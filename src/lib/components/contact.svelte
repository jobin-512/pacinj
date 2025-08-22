<script>
  let name = "";
  let email = "";
  let subject = "";
  let message = "";

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, email, subject, message });
    // You can replace this with an API call or email service
    alert("Message sent!");
  }
</script>

<section class="bg-gray-50 py-16">
  <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
    
    <!-- Contact Form -->
    <div class="md:col-span-2 bg-gray-50 p-8 rounded-lg">
      <h2 class="text-3xl font-bold mb-8">Get In Touch</h2>
      <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
        
        <!-- Name + Email -->
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 mb-2">Your name</label>
            <input type="text" bind:value={name} class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600" />
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Email address</label>
            <input type="email" bind:value={email} class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600" />
          </div>
        </div>

        <!-- Subject -->
        <div>
          <label class="block text-gray-700 mb-2">Subject</label>
          <input type="text" bind:value={subject} class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600" />
        </div>

        <!-- Message -->
        <div>
          <label class="block text-gray-700 mb-2">Write Your Message</label>
          <textarea rows="5" bind:value={message} class="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-600"></textarea>
        </div>

        <!-- Button -->
        <button type="submit" class="bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition">
          Send Message
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
