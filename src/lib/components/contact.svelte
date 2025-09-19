<script>
  let name = "";
  let email = "";
  let subject = "";
  let message = "";
  let sending = false;
  let success = false;
  let error = "";

  /** @param {SubmitEvent} e */
  async function handleSubmit(e) {
    e.preventDefault();
    sending = true;
    success = false;
    error = "";
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        error = data?.error || 'Failed to send message';
      } else {
        success = true;
        name = '';
        email = '';
        subject = '';
        message = '';
      }
    } catch (err) {
      error = 'Network error. Please try again.';
    } finally {
      sending = false;
    }
  }
</script>

<section class="bg-gray-50 py-16">
  <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
    
    <!-- Contact Form -->
    <div class="md:col-span-2 bg-gray-50 p-8 rounded-lg">
      <h2 class="text-3xl font-bold mb-8">Get In Touch</h2>
      {#if success}
        <div class="mb-4 p-3 rounded bg-green-100 text-green-800">Your message has been sent. We will get back to you soon.</div>
      {/if}
      {#if error}
        <div class="mb-4 p-3 rounded bg-red-100 text-red-700">{error}</div>
      {/if}
      <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
        
        <!-- Name + Email -->
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label for="contact-name" class="block text-gray-700 mb-2">Your name</label>
            <input id="contact-name" type="text" bind:value={name} required class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600" />
          </div>
          <div>
            <label for="contact-email" class="block text-gray-700 mb-2">Email address</label>
            <input id="contact-email" type="email" bind:value={email} required class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600" />
          </div>
        </div>

        <!-- Subject -->
        <div>
          <label for="contact-subject" class="block text-gray-700 mb-2">Subject</label>
          <input id="contact-subject" type="text" bind:value={subject} class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600" />
        </div>

        <!-- Message -->
        <div>
          <label for="contact-message" class="block text-gray-700 mb-2">Write Your Message</label>
          <textarea id="contact-message" rows="5" bind:value={message} required class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600"></textarea>
        </div>

        <!-- Button -->
        <button type="submit" class="bg-[#426E32] cursor-pointer text-white px-6 py-3 rounded font-semibold hover:bg-[#35512a] transition disabled:opacity-60" disabled={sending}>
          {sending ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>

    <!-- Contact Info -->
    <div class="bg-white p-8 shadow rounded-lg">
      <!-- Map Placeholder -->
      <div class="bg-gray-200 h-36 w-full mb-6 rounded"></div>

      <!-- Office -->
      <h3 class="text-lg font-semibold mb-2">Main Office</h3>
      <p class="text-gray-600 mb-2">#1 – 33759 Morey Avenue Abbotsford British Columbia Canada V2S 2W5</p>
      <p class="text-gray-600 mb-1">Phone: +1 (604) 859-5503</p>
      <p class="text-gray-600 mb-4">
        Email: 
        <a href="mailto:brent@pacinj.com" class="text-blue-600 hover:underline">brent@pacinj.com</a>
      </p>

      <hr class="my-4">

      <!-- Hours -->
      <h3 class="text-lg font-semibold mb-2">Opening Hours</h3>
      <p class="text-gray-600">Monday - Friday : 9am - 5pm</p>
      <p class="text-gray-600">Weekend Closed</p>
    </div>

  </div>
</section>
