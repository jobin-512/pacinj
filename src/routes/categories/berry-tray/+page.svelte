<script>
  import Contact from '$lib/components/contact.svelte';

  // Images from existing assets
  import mini_red_1 from '$lib/assets/5/3.jpg';
  import mini_red_2 from '$lib/assets/5/1.jpg';
  import mini_red_3 from '$lib/assets/5/2.jpg';

  import nondiv_green from '$lib/assets/12/1.jpg';
  import divided_green from '$lib/assets/11/1.png';

  const featured = {
    title: 'Mini Berry Trays – Red',
    subtitle: 'Compact, stackable trays designed for airflow and gentle handling.',
    cover: mini_red_1,
    gallery: [divided_green],
    link: '/products/11'
  };

  const products = [
    {
      title: 'Harvest Berry Tray',
      desc: 'Lightweight, ventilated mini trays ideal for small fruits and rapid drying.',
      images: [mini_red_1, mini_red_2, mini_red_3],
      link: '/products/5'
    },
    {
      title: 'Non‑divided Berry Trays – Green',
      desc: 'Open surface area to maximize airflow and reduce pressure spots.',
      images: [nondiv_green],
      link: '/products/12'
    },
    {
      title: 'Harvest Trays',
      desc: 'Segmented layout to keep delicate berries separated during drying and staging.',
      images: [divided_green],
      link: '/products/11'
    }
  ];
</script>

<section class="relative h-[50vh] bg-cover bg-center flex items-center justify-center" style="background-image: url('{featured.cover}')">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative text-center text-white px-4">
    <p class="text-sm tracking-widest uppercase">Category</p>
    <h1 class="text-4xl md:text-5xl font-bold">Berry Trays</h1>
    <p class="mt-3 text-sm md:text-base opacity-90 max-w-2xl mx-auto">
      Durable trays engineered for airflow, gentle handling, and efficient drying.
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
          <img src={img} alt={`Mini berry tray ${i + 1}`} class="w-full h-36 object-cover rounded" />
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


