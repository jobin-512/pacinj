<script>
    import hero from '$lib/assets/hero.svg';
    import Contact from '$lib/components/contact.svelte';
    import p1 from "$lib/assets/1/1.jpg"
    import p2 from "$lib/assets/2/1.jpg"
    import p3 from "$lib/assets/3/1.jpg"
    import p4 from "$lib/assets/4/1.jpg"
    import p5 from "$lib/assets/5/1.jpg"
    import p6 from "$lib/assets/6/1.jpg"


    let products = [
    { id: 1, name: "Small Ventilated Agriculture Tote", reviews: 12, rating: 4.5, tag: "New", image:p1 ,link: "/products/1"},
    { id: 2, name: "Large Agriculture Tote", reviews: 50, rating: 5, tag: "New", image: p2 ,link: "/products/2" },
    { id: 3, name: "Large Ventilated Agriculture Tote", reviews: 10, rating: 4, tag: "New", image: p3 ,link: "/products/3" },
    { id: 4, name: "Milk Crates (Divided / Non-divided)", reviews: 15, rating: 4.5, tag: "New", image: p4 ,link: "/products/4" },
    { id: 5, name: "Harvest Berry Tray", reviews: 22, rating: 5, tag: "", image: p5  ,link: "/products/5"},
    { id: 6, name: "Half Bushel Basket", reviews: 30, rating: 4.5, tag: "", image: p6 ,link: "/products/6"},
    { id: 7, name: "Fruit/Veg. Harvesting Lugs", reviews: 18, rating: 4, tag: "", image: hero ,link: "/"},
    { id: 8, name: "Grape Container", reviews: 20, rating: 5, tag: "New", image: hero ,link: "/"},
    { id: 9, name: "Milk Crates", reviews: 25, rating: 4, tag: "New", image: hero ,link: "/"},
    { id: 10, name: "Gallon Plant", reviews: 35, rating: 5, tag: "New", image: hero ,link: "/"},
    { id: 11, name: "Recycling Box", reviews: 16, rating: 4.5, tag: "New", image: hero ,link: "/"},
    { id: 12, name: "Wheel Chock", reviews: 10, rating: 4, tag: "New", image: hero ,link: "/"},
  ];

  let currentPage = 1;
  let perPage = 8;

  $: totalPages = Math.ceil(products.length / perPage);

  $: paginatedProducts = products.slice((currentPage - 1) * perPage, currentPage * perPage);

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) currentPage = page;
  }

</script>

<section class="relative h-[80vh] bg-cover bg-center flex items-center" style="background-image: url('{hero}')">
  <div class="absolute inset-0  bg-opacity-50"></div>
  <div class="container mx-auto px-4">
    <div class="max-w-2xl text-white">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        Products
      </h1>
    </div>
  </div>
</section>

<section class="p-8 bg-[#f9f9f9]">
  <h2 class="text-2xl font-semibold mb-6">Our Products</h2>

  <!-- Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {#each paginatedProducts as product}
      <div class="bg-white shadow rounded-xl overflow-hidden relative hover:shadow-lg transition">
        {#if product.tag}
          <span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.tag}
          </span>
        {/if}

        <img src={product.image} alt={product.name} class="w-full h-[25rem] object-cover" />

        <div class="p-4 space-y-2">
          <h3 class="text-lg font-medium">{product.name}</h3>
          <p class="text-sm text-gray-500">{product.reviews} Reviews</p>
          <div class="flex items-center gap-1 text-yellow-400">
            {"⭐".repeat(Math.round(product.rating))}
          </div>

          <a href={product.link} class="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Read More
          </a>
        </div>
      </div>
    {/each}
  </div>

  <!-- Pagination -->
  <div class="flex justify-center mt-8 space-x-2">
    <button
      on:click={() => goToPage(currentPage - 1)}
      disabled={currentPage === 1}
      class="px-3 py-1 border rounded disabled:opacity-50"
    >
      Prev
    </button>

    {#each Array(totalPages) as _, i}
      <button
        class="px-3 py-1 border rounded {currentPage === i + 1 ? 'bg-red-500 text-white' : ''}"
        on:click={() => goToPage(i + 1)}
      >
        {i + 1}
      </button>
    {/each}

    <button
      on:click={() => goToPage(currentPage + 1)}
      disabled={currentPage === totalPages}
      class="px-3 py-1 border rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
</section>


<Contact/>