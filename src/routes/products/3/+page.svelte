<script>
    import img1 from '$lib/assets/3/1.jpg';
    import img2 from '$lib/assets/3/2.jpg';
    import img3 from '$lib/assets/3/3.jpg';
    import img4 from '$lib/assets/3/4.jpg';

  let product = {
    title: "Ventilated Agriculture Tote",
    images: [
      img1,
      img2,
      img3,
      img4
    ],
    icons: [
      { name: "Slot Ventilation", icon: "🪟" },
      { name: "Stackable", icon: "📦" },
      { name: "Nestable", icon: "🧩" },
      { name: "We Recycle", icon: "♻️" }
    ],
    colors: ["#ffffff", "#f44336", "#ff9800", "#ffeb3b", "#9c27b0", "#2196f3", "#4caf50", "#2e7d32"],
    description: `This Ventilated Agriculture Tote is commonly used in harvesting produce.`,
    features: [
      "Strong and durable",
      "Great for transportation",
      "Name/ logo hot stamp may be added",
      "U.V protection is added into every tote to ensure color doesn’t fade.",
      "Freezer safe",
      "100% recyclable"
    ],
    dimensions: [
      "23.5”L x 16”W x 10.75”H",
      "Weight: 3.9 lb"
    ],
    shipping: [
      "125 units per pallet",
      "3750 nested in 53’ trailer"
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

