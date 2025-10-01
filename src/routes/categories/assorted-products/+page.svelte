<script>
  import Contact from '$lib/components/contact.svelte';

  // Images from existing assets
  import harvest_tan from '$lib/assets/11/1.png'; // Non-divided Berry Tray (tan-like) as 4.5" tray rep
  import harvest_alt from '$lib/assets/11/1.png'; // Harvest Tray

  import half_bushel_1 from '$lib/assets/6/1.jpg';
  import half_bushel_2 from '$lib/assets/6/2.jpg';
  import half_bushel_3 from '$lib/assets/6/3.jpg';

  import mushroom_blue from '$lib/assets/17/1.jpg'; // Stacking tray as blue mushroom tray rep

  import recycling_1 from '$lib/assets/18/1.jpg';

  const featured = {
    title: '4.5" Harvest Tray – Tan',
    subtitle: 'Low-profile drying tray designed to increase airflow and reduce bruising.',
    cover: harvest_tan,
    gallery: [harvest_tan, harvest_alt],
    link: '/products/11'
  };

  const products = [
    {
      title: 'Mushroom Tray',
      desc: '',
      images: [mushroom_blue],
      link: '/products/17'
    },
    {
      title: 'Half Bushel Basket',
      desc: 'Sturdy hand-carry basket sized for half-bushel field work.',
      images: [half_bushel_2, half_bushel_1, half_bushel_3],
      link: '/products/6'
    },
    {
      title: 'Recycling Tray',
      desc: '',
      images: [recycling_1],
      link: '/products/18'
    },
  ];
</script>

<section class="relative h-[80vh] bg-cover bg-center flex items-center justify-center" style="background-image: url('{featured.cover}')">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative text-center text-white px-4">
    <p class="text-sm tracking-widest uppercase">Category</p>
    <h1 class="text-4xl md:text-5xl font-bold">Assorted Products</h1>
    <p class="mt-3 text-sm md:text-base opacity-90 max-w-2xl mx-auto">
      A mix of popular trays and baskets for harvesting, drying, and logistics.
    </p>
  </div>
</section>

<section class="p-8 bg-[#f9f9f9]">
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-8 items-start">
      <div class="space-y-4">
        <h2 class="text-2xl font-bold">{featured.title}</h2>
        <p class="text-gray-600">{featured.subtitle}</p>
        <div class="flex gap-2">
          <a href={featured.link} class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">View Details</a>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-3">
        {#each featured.gallery as img, i}
          <img src={img} alt={`Harvest tray ${i + 1}`} class="w-full h-36 object-cover rounded" />
        {/each}
      </div>
    </div>
  </div>
</section>

<section class="p-8">
  <div class="max-w-6xl mx-auto">
    <h3 class="text-xl font-semibold mb-6">More in this category</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each products as p}
        <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <a href={p.link} aria-label={p.title}>
            <img src={p.images[0]} alt={p.title} class="w-full h-64 object-cover" />
          </a>
          <div class="p-4 space-y-2">
            <h4 class="text-lg font-medium">{p.title}</h4>
            <p class="text-sm text-gray-600">{p.desc}</p>
            {#if p.images.length > 1}
              <div class="flex gap-2 mt-2">
                {#each p.images.slice(1) as thumb}
                  <img src={thumb} alt="Additional view" class="w-10 h-10 rounded object-cover border" />
                {/each}
              </div>
            {/if}
            <a href={p.link} class="inline-block mt-3 px-4 py-2 bg-[#426E32] text-white rounded hover:bg-[#365628]">Read More</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<Contact/>


