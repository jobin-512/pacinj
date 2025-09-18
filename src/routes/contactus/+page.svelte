<script lang="ts">
    import hero from '$lib/assets/hero.webp';
    import Contact from '$lib/components/contact.svelte';
</script>


<section class="relative h-[80vh] bg-cover bg-center flex items-center" style="background-image: url('{hero}')">
  <div class="absolute inset-0  bg-opacity-50"></div>
  <div class="container mx-auto px-4">
    <div class="max-w-2xl text-white">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        Contact Us 
      </h1>
    </div>
  </div>
</section>

<section class="bg-white py-16">
  <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-10 text-gray-800">
    
    <!-- Sales -->
    <div>
      <h3 class="text-xl font-semibold mb-3">Sales</h3>
      <p class="mb-1">
        <span class="font-medium">Email:</span> 
        <a href="mailto:jon@pacinj.com" class="text-blue-600 hover:underline">jon@pacinj.com</a>
      </p>
      <p class="mb-1"><span class="font-medium">Phone:</span> (604) 859-5503</p>
      <p class="mb-1"><span class="font-medium">Toll Free:</span> 1-800-665-5211</p>
      <p class="mb-1"><span class="font-medium">Fax:</span> (604) 859-5541</p>
    </div>

    <!-- Office Manager / Accounting -->
    <div>
      <h3 class="text-xl font-semibold mb-3">Office Manager/Accounting</h3>
      <p class="mb-1">
        <span class="font-medium">Email:</span> 
        <a href="mailto:info@pacinj.com" class="text-blue-600 hover:underline">info@pacinj.com</a>
      </p>
      <p class="mb-1"><span class="font-medium">Phone:</span> (604) 859-5503</p>
      <p class="mb-1"><span class="font-medium">Toll Free:</span> 1-800-665-5211</p>
      <p class="mb-1"><span class="font-medium">Fax:</span> (604) 859-5541</p>
    </div>

    <!-- Production -->
    <div>
      <h3 class="text-xl font-semibold mb-3">Production</h3>
      <p class="mb-1">
        <span class="font-medium">Email:</span> 
        <a href="mailto:brent@pacinj.com" class="text-blue-600 hover:underline">brent@pacinj.com</a>
      </p>
      <p class="mb-1"><span class="font-medium">Phone:</span> (604) 859-5503</p>
      <p class="mb-1"><span class="font-medium">Toll Free:</span> 1-800-665-5211</p>
      <p class="mb-1"><span class="font-medium">Fax:</span> (604) 859-5541</p>
    </div>

  </div>
</section>


<Contact/>