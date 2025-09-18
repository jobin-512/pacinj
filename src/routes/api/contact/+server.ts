import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';
import { env as kitEnv } from '$env/dynamic/private';
import * as dotenv from 'dotenv';

dotenv.config();

const env = new Proxy(kitEnv as any, {
  get(target, prop: string) {
    const val = (target as any)[prop];
    if (val !== undefined) return val;
    const proc = (globalThis as any).process;
    return proc && proc.env ? proc.env[prop as any] : undefined;
  }
}) as any;

function createTransport() {
  const host = env.SMTP_HOST as string | undefined;
  const port = Number(env.SMTP_PORT || 587);
  const user = env.SMTP_USER as string | undefined;
  const pass = env.SMTP_PASS as string | undefined;

  if (!user || !pass) {
    throw new Error('SMTP_USER and SMTP_PASS must be set (use Gmail App Password if using Gmail)');
  }

  if (host) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: port === 587,
      auth: { user, pass }
    });
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });
}

export const POST: RequestHandler = async ({ request }) => {
  let transporter;
  try {
    transporter = createTransport();
  } catch (cfgErr) {
    return new Response(JSON.stringify({ error: (cfgErr as Error).message }), { status: 500 });
  }

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

    const toAddress = (env.CONTACT_TO as string | undefined) || (env.SMTP_USER as string | undefined) || email;
    const fromUser = env.SMTP_USER as string;

    try {
      await transporter.verify();
    } catch (verifyErr) {
      const msg = 'Email transport not ready. Verify SMTP_HOST/PORT (or Gmail), and use a valid SMTP password/App Password.';
      console.error('Nodemailer verify failed:', verifyErr);
      return new Response(JSON.stringify({ error: msg }), { status: 500 });
    }

    const text = `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    const html = `<p>New contact form submission</p>
<p><b>Name:</b> ${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Subject:</b> ${subject}</p>
<p><b>Message:</b></p>
<pre style=\"white-space:pre-wrap;\">${message}</pre>`;

    const info = await transporter.sendMail({
      from: `${name} via Website <${fromUser}>`,
      to: toAddress,
      subject: `[Website] ${subject}`,
      replyTo: `${name} <${email}>`,
      text,
      html,
      envelope: { from: fromUser, to: toAddress }
    });

    const warnings = env.CONTACT_TO ? undefined : 'CONTACT_TO missing; delivered to SMTP_USER (or sender) as fallback.';

    return new Response(JSON.stringify({ ok: true, messageId: info.messageId, warnings }), { status: 200 });
  } catch (err: unknown) {
    console.error('Contact form error:', err);
    const msg = err instanceof Error ? err.message : 'Failed to send message';
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
}
