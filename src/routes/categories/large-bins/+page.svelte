<script>
  import Contact from '$lib/components/contact.svelte';

  // Images from existing assets
  import large_solid_1 from '$lib/assets/2/1.jpg';
  import large_solid_2 from '$lib/assets/2/2.jpg';
  import large_solid_3 from '$lib/assets/2/3.jpg';
  import large_solid_4 from '$lib/assets/2/4.jpg';

  import small_vent_1 from '$lib/assets/1/1.jpg';
  import small_vent_2 from '$lib/assets/1/2.jpg';
  import small_vent_3 from '$lib/assets/1/3.jpg';
  import small_vent_4 from '$lib/assets/1/4.jpg';

  import large_vent_1 from '$lib/assets/3/1.jpg';
  import large_vent_2 from '$lib/assets/3/2.jpg';
  import large_vent_3 from '$lib/assets/3/3.jpg';
  import large_vent_4 from '$lib/assets/3/4.jpg';

  const featured = {
    title: 'Large Solid Wall Ag. Tote – White',
    subtitle: 'High‑capacity, solid-wall agricultural tote for bulk handling.',
    cover: large_solid_2,
    gallery: [large_solid_1],
    link: '/products/2'
  };

  const products = [
    {
      title: 'Large Solid Wall Ag. Tote – White',
      desc: 'Rigid walls protect contents; optimized for stacking and transport.',
      images: [large_solid_1, large_solid_2, large_solid_3, large_solid_4],
      link: '/products/2'
    },
    {
      title: 'Small Ventilated Ag. Tote – Green/Orange',
      desc: 'Ventilated sides for airflow; compact footprint for smaller loads.',
      images: [small_vent_1, small_vent_2, small_vent_3, small_vent_4],
      link: '/products/1'
    },
    {
      title: 'Large Ventilated Ag. Tote – Lime Green',
      desc: 'High-volume ventilated tote to improve cooling and drying cycles.',
      images: [large_vent_1, large_vent_2, large_vent_3, large_vent_4],
      link: '/products/3'
    }
  ];
</script>

<section class="relative h-[80vh] bg-cover bg-center flex items-center justify-center" style="background-image: url('{featured.cover}')">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative text-center text-white px-4">
    <p class="text-sm tracking-widest uppercase">Category</p>
    <h1 class="text-4xl md:text-5xl font-bold">Large Bins</h1>
    <p class="mt-3 text-sm md:text-base opacity-90 max-w-2xl mx-auto">
      Solid-wall and ventilated agricultural totes built for capacity and durability.
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
      <div class="grid grid-cols-4 gap-3">
        {#each featured.gallery as img, i}
          <img src={img} alt={`Large solid tote ${i + 1}`} class="w-full h-36 object-cover rounded" />
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


