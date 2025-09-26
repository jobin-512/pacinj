<script>
    import img1 from '$lib/assets/7/1.jpg';
    import img2 from '$lib/assets/7/2.jpg';
    import img3 from '$lib/assets/7/3.jpg';
    import img4 from '$lib/assets/7/4.jpg';
    import Contact from "$lib/components/contact.svelte"

let selectedImage = null;
let showModal = false;

function openImageModal(imageSrc) {
  selectedImage = imageSrc;
  showModal = true;
}

function closeImageModal() {
  showModal = false;
  selectedImage = null;
}

  let product = {
    title: "20 lb. Agricultural Harvesting Lugs",
    images: [
      img1,
      img2,
      img3,
      img4
    ],
    icons: [
      { name: "Slot Ventilation", icon: "🪟" },
      { name: "Solid Wall", icon: "🧱" },
      { name: "Stackable", icon: "📦" },
      { name: "Nestable", icon: "🧩" },
      { name: "We Recycle", icon: "♻️" }
    ],
    colors: ["#2BB673", "#1BAFBF", "#FFD200", "#C61D6D", "#6A1B9A", "#2F6041", "#6B7280"],
    description: `Used in the harvesting, storage, and processing of asparagus, beans, blueberries, cherries, figs, grapes, mushrooms, and other small to midsize fruits and vegetables.`,
    features: [
      "Containers will nest at a ratio of 2.5:1",
      "Ventilation holes on sides & bottom",
      "Name and/or logo may be hot stamped on one or both ends",
      "U. V. stabilizer is available to aid in preventing deterioration of plastic",
      "Freezer safe",
      "100% recyclable"
    ],
    dimensions: [
      "23.5”L x 15.75”W x 5”H",
      "Weight: 2.4 lb",
      "Load capacity up to 30 lb"
    ],
    shipping: [
      "300 per pallet",
      "9000 nested in 53' trailer"
    ]
  };
</script>

<section class="p-10 bg-gray-50">
  <!-- Title -->
  <h1 class="text-3xl font-bold text-green-800 mb-6">
    {product.title}
  </h1>

  <!-- Force two-column layout -->
  <div class="flex flex-col md:flex-row gap-10 items-start">
    
    <!-- LEFT: Product Info -->

    <div class="w-full md:w-1/2 flex flex-col gap-4">
      <button 
        type="button"
        class="rounded-xl shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500"
        on:click={() => openImageModal(product.images[0])}
        on:keydown={(e) => e.key === 'Enter' && openImageModal(product.images[0])}
        aria-label="View enlarged product image"
      >
        <img 
          src={product.images[0]} 
          alt="Product large" 
          class="rounded-xl w-full" 
        />
      </button>
      <div class="grid grid-cols-3 gap-4">
        {#each product.images.slice(1) as img}
          <button 
            type="button"
            class="rounded-lg shadow w-full h-full cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500"
            on:click={() => openImageModal(img)}
            on:keydown={(e) => e.key === 'Enter' && openImageModal(img)}
            aria-label="View enlarged product thumbnail"
          >
            <img 
              src={img} 
              alt="Product thumbnail" 
              class="rounded-lg w-full h-full object-cover" 
            />
          </button>
        {/each}
      </div>
    </div>
    

    <!-- RIGHT: Product Images -->
     <div class="w-full md:w-1/2 space-y-6 md:sticky md:top-[10rem]">
      <!-- Icons -->
      <div class="flex flex-wrap gap-4">
        {#each product.icons as i}
          <div class="flex flex-col items-center text-center w-20">
            <div class="text-3xl">{i.icon}</div>
            <p class="text-xs text-gray-600">{i.name}</p>
          </div>
        {/each}
      </div>

      <!-- Colors -->
      <div>
        <h3 class="font-semibold">Colors:</h3>
        <div class="flex items-center gap-2 mt-2">
          {#each product.colors as color}
            <div class="w-6 h-6 rounded" style="background: {color}"></div>
          {/each}
          <span class="px-2 py-1 bg-gray-200 rounded text-xs">Custom</span>
        </div>
      </div>

      <!-- Description -->
      <p class="text-gray-700">{product.description}</p>

      <!-- Features -->
      <div>
        <h3 class="font-semibold mb-2">Features:</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          {#each product.features as f}
            <li>{f}</li>
          {/each}
        </ul>
      </div>

      <!-- Dimensions & Shipping -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold mb-2">Dimensions & Weight:</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            {#each product.dimensions as d}
              <li>{d}</li>
            {/each}
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Shipping:</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            {#each product.shipping as s}
              <li>{s}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</section>

<!-- Image Modal -->
{#if showModal}
  <div 
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
    on:click={closeImageModal}
    on:keydown={(e) => e.key === 'Escape' && closeImageModal()}
    role="button"
    tabindex="0"
  >
    <div class="relative max-w-4xl max-h-full">
      <img 
        src={selectedImage} 
        alt="" 
        class="max-w-full max-h-full object-contain rounded-lg"
      />
      <button 
        class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all focus:outline-none focus:ring-2 focus:ring-white"
        on:click={closeImageModal}
        aria-label="Close enlarged image"
      >
        ×
      </button>
    </div>
  </div>
{/if}

<Contact />