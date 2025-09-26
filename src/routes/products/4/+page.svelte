<script>
  import img1 from '$lib/assets/4/1.jpg';
  import img2 from '$lib/assets/4/2.jpg';
  import img3 from '$lib/assets/4/3.jpg';
  import img4 from '$lib/assets/4/4.jpg';
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

  const page = {
    title: 'Milk Crates (Divided / Non-divided)',
    colors: ['#1e88e5', '#43a047', '#e53935', '#ffb300', '#7e57c2', '#1565c0', '#4caf50', '#2e7d32'],
    features: [
      'Strong and durable',
      'Excellent for dairy product transportation',
      'Name/logo and/or "Warning Against Theft" sign may be hot stamped on one or two sides',
      'U. V. stabilizer is available to aid in preventing deterioration of plastic',
      'Freezer safe',
      '100% recyclable'
    ],
    shipping: [
      '96 units per pallet',
      '2496 stacked in 53’ trailer',
      'Hand load full 53’ container',
      '3360 units (no pallet)'
    ]
  };

  const variants = [
    {
      name: 'Standard (4 Gallon)',
      image: img1,
      specs: ['13"L x 13"W x 10.5"H', 'Weight 2.8 lb'],
      shipping: ['108 units per pallet', '2888 nested in 53’ trailer'],
      options: ['Handload Option: 10 units per stack', '3300 nested in 53’ trailer']
    },
    {
      name: 'Rectangular Milk Crate (4 Gallon)',
      image: img2,
      specs: ['13"L x 12"W x 11"H', 'Weight 2.6 lb'],
      shipping: ['108 units per pallet', '3240 nested in 53’ trailer']
    },
    {
      name: '6 Cavity (6 Cell Crate)',
      image: img3,
      specs: ['13"L x 13"W x 10.5"H', 'Weight 3.4 lb'],
      shipping: ['108 units per pallet', '3240 nested in 53’ trailer']
    },
    {
      name: '9 Cavity (9 Cell Crate)',
      image: img4,
      specs: ['13"L x 13"W x 10.5"H', 'Weight 3.8 lb'],
      shipping: ['108 units per pallet', '2808 nested in 53’ trailer']
    },
    {
      name: '12 Cavity (12 Cell Crate)',
      image: img1,
      specs: ['14.75"L x 11.5"W x 10.25"H', 'Weight 3.4 lb'],
      shipping: ['108 units per pallet', '2808 nested in 53’ trailer']
    }
  ];
</script>

<section class="p-10 bg-gray-50">
  <h1 class="text-3xl font-bold text-green-800 mb-6">{page.title}</h1>

  <!-- Header badges and colors -->
  <div class="bg-green-100 rounded-lg p-4 flex flex-col gap-4 mb-6">
    <div class="flex flex-wrap items-center gap-6">
      <div class="flex items-center gap-2">
        <span class="w-8 h-8 rounded-full bg-gray-200 border border-gray-400 inline-block"></span>
        <div>
          <p class="font-semibold text-sm">Divided</p>
        </div>
        <span class="px-2 text-sm">OR</span>
        <span class="w-4 h-4 rounded-full bg-transparent border border-gray-400 inline-block"></span>
        <p class="font-semibold text-sm ml-2">Non-Divided</p>
      </div>
      <div class="flex items-center gap-6 ml-auto">
        <div class="flex items-center gap-2"><span class="text-2xl">📦</span><span class="text-sm">Stackable</span></div>
        <div class="flex items-center gap-2"><span class="text-2xl">♻️</span><span class="text-sm">We Recycle</span></div>
      </div>
    </div>
    <div>
      <h3 class="font-semibold">Colors:</h3>
      <div class="flex items-center gap-2 mt-2">
        {#each page.colors as color}
          <div class="w-6 h-6 rounded" style="background: {color}"></div>
        {/each}
        <span class="px-2 py-1 bg-gray-200 rounded text-xs">Custom</span>
      </div>
    </div>
  </div>

  <!-- Overview panel -->
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
    <div class="md:col-span-5">
      <button 
        type="button"
        class="rounded-xl shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500"
        on:click={() => openImageModal(img1)}
        on:keydown={(e) => e.key === 'Enter' && openImageModal(img1)}
        aria-label="View enlarged milk crates image"
      >
        <img src={img1} alt="Milk crates" class="rounded-xl w-full" />
      </button>
    </div>
    <div class="md:col-span-7 bg-gray-100 rounded-lg p-4">
      <h3 class="font-semibold mb-2">Features:</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-1 mb-4">
        {#each page.features as f}
          <li>{f}</li>
        {/each}
      </ul>
      <h3 class="font-semibold mb-2">Shipping:</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        {#each page.shipping as s}
          <li>{s}</li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Variant cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each variants as v}
      <div class="bg-white rounded-xl shadow p-4 flex flex-col">
        <h3 class="font-semibold text-lg mb-3">{v.name}</h3>
        <button 
          type="button"
          class="rounded-lg w-full h-[25rem] cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          on:click={() => openImageModal(v.image)}
          on:keydown={(e) => e.key === 'Enter' && openImageModal(v.image)}
          aria-label="View enlarged {v.name} image"
        >
          <img src={v.image} alt={v.name} class="rounded-lg w-full h-[25rem] object-cover" />
        </button>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
          <div>
            <h4 class="font-semibold mb-1">Specifications:</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              {#each v.specs as s}
                <li>{s}</li>
              {/each}
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-1">Shipping:</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              {#each v.shipping as s}
                <li>{s}</li>
              {/each}
            </ul>
          </div>
        </div>
        {#if v.options}
          <div class="mt-3 text-sm text-gray-700">
            {#each v.options as o}
              <p>{o}</p>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
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

<Contact/>