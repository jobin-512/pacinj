<script>
    import img1 from '$lib/assets/9/1.jpg';

  let product = {
    title: "15 lb. Agricultural Harvesting Lugs",
    images: [
      img1,
    ],
    icons: [
      { name: "Ventilated Holes", icon: "◻️" },
      { name: "Stackable", icon: "📦" },
      { name: "Nestable", icon: "🧩" },
      { name: "We Recycle", icon: "♻️" }
    ],
    colors: ["#1BAFBF", "#2F60A1", "#FFD200", "#E53935", "#2BB673", "#2F6041", "#6B7280"],
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
      "23.5”L x 15.75”W x 3”H",
      "Weight: 1.7 lb",
      "Load capacity up to 20 lb"
    ],
    shipping: [
      "370 units per pallet",
      "11100 nested in 53' trailer"
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
      <img src={product.images[0]} alt="Product large" class="rounded-xl shadow-md w-full" />
      <div class="grid grid-cols-3 gap-4">
        {#each product.images.slice(1) as img}
          <img src={img} alt="Product thumbnail" class="rounded-lg shadow w-full h-full object-cover" />
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

