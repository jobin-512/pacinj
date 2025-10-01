<script>
  import Contact from '$lib/components/contact.svelte';

  // 30 lb (folder 8), 20 lb (folder 7), 15 lb (folder 9)
  import lug30_1 from '$lib/assets/8/1.jpg';
  import lug30_2 from '$lib/assets/8/2.jpg';
  import lug30_3 from '$lib/assets/8/3.jpg';

  import lug20_1 from '$lib/assets/7/1.jpg';
  import lug20_2 from '$lib/assets/13/2.jpg';
  import lug20_3 from '$lib/assets/7/3.jpg';
  import lug20_4 from '$lib/assets/7/4.jpg';

  import lug15_1 from '$lib/assets/9/1.jpg';

  const featured = {
    title: '30 lb Mixed Colors',
    subtitle: 'Durable agricultural harvesting lugs in assorted colors',
    // Use red lug if only one picture on the introduction
    cover: lug30_1,
    gallery: [lug30_1, lug30_2, lug30_3],
    link: '/products/8'
  };

  const products = [
    {
      title: '20 lb Purp/Green Pink/Blue',
      desc: '20 lb harvesting lugs available in multiple colorways for fast sorting.',
      images: [lug20_1, lug20_3, lug20_4],
      link: '/products/7'
    },
    {
      title: '20 lb Red (Wavy Bottom)',
      desc: 'Textured base for airflow and grip during field handling.',
      images: [lug20_2],
      link: '/products/13'
    },
    {
      title: '15 lb Red Lug',
      desc: 'Compact, lightweight lug ideal for smaller harvests.',
      images: [lug15_1],
      link: '/products/9'
    }
  ];
</script>

<section class="relative h-[80vh] bg-cover bg-center flex items-center justify-center" style="background-image: url('{featured.cover}')">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative text-center text-white px-4">
    <p class="text-sm tracking-widest uppercase">Category</p>
    <h1 class="text-4xl md:text-5xl font-bold">Agricultural Harvesting Lugs</h1>
    <p class="mt-3 text-sm md:text-base opacity-90 max-w-2xl mx-auto">
      Heavy‑duty, reusable lugs designed for field picking, staging, and short‑haul transport.
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
          <img src={img} alt={`30 lb lug image ${i + 1}`} class="w-full h-36 object-cover rounded" />
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
                  <img src={thumb} alt="Color option" class="w-10 h-10 rounded object-cover border" />
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


