import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

function createTransport() {
  const host = env.SMTP_HOST;
  const port = Number(env.SMTP_PORT || 587);
  const user = env.SMTP_USER;
  const pass = env.SMTP_PASS;

  if (host) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: user && pass ? { user, pass } : undefined
    });
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });
}

export const POST: RequestHandler = async ({ request }) => {
  const transporter = createTransport();
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Invalid content type' }), { status: 415 });
    }

    const body = await request.json().catch(() => null) as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    } | null;

    if (!body) {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
    }

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const subject = (body.subject || '').trim() || 'New Contact Form Submission';
    const message = (body.message || '').trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Name is required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email is required';
    if (!message) errors.message = 'Message is required';

    if (Object.keys(errors).length) {
      return new Response(JSON.stringify({ error: 'Validation failed', errors }), { status: 400 });
    }

    const toAddress = env.CONTACT_TO || env.SMTP_USER;
    const fromUser = env.SMTP_USER;
    if (!toAddress || !fromUser) {
      return new Response(JSON.stringify({ error: 'Server email not configured' }), { status: 500 });
    }

    // Verify transporter configuration up-front
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error('Nodemailer verify failed:', verifyErr);
      return new Response(JSON.stringify({ error: 'Email transport not ready. Check SMTP credentials or app password.' }), { status: 500 });
    }

    const text = `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    const html = `<p>New contact form submission</p>
<p><b>Name:</b> ${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Subject:</b> ${subject}</p>
<p><b>Message:</b></p>
<pre style="white-space:pre-wrap;">${message}</pre>`;

    const info = await transporter.sendMail({
      from: `${name} via Website <${fromUser}>`,
      to: toAddress,
      subject: `[Website] ${subject}`,
      replyTo: `${name} <${email}>`,
      text,
      html
    });

    return new Response(JSON.stringify({ ok: true, messageId: info.messageId }), { status: 200 });
  } catch (err: unknown) {
    console.error('Contact form error:', err);
    const msg = err instanceof Error ? err.message : 'Failed to send message';
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
}
