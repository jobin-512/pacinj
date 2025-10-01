<script>
  import Contact from '$lib/components/contact.svelte';

  // Images for milk crates (folder 4 has 1-6.jpg)
  import mc1 from '$lib/assets/4/1.jpg';
  import mc2 from '$lib/assets/4/2.jpg';
  import mc3 from '$lib/assets/4/3.jpg';
  import mc4 from '$lib/assets/4/4.jpg';
  import mc5 from '$lib/assets/4/5.jpg';
  import mc6 from '$lib/assets/4/6.jpg';

  const featured = {
    title: 'Milk Crates (Non-divided) – Green/Red/Blue',
    subtitle: 'Stackable, durable crates for distribution and back‑of‑house storage.',
    cover: mc1,
    gallery: [mc1, mc2, mc3],
    link: '/products/4'
  };

  const products = [
    {
      title: 'Milk Crates (Non-divided) – Green/Red/Blue',
      desc: 'General-purpose, non-divided crates available in multiple colors.',
      images: [mc1, mc2, mc3],
      link: '/products/4'
    },
    {
      title: 'Standard 4‑Gallon / 16‑Quart – Black',
      desc: 'Classic dairy crate format designed for strength and stability.',
      images: [mc4],
      link: '/products/4'
    },
    {
      title: 'Rectangular Milk Crate 4‑Gallon / 16‑Quart – Green',
      desc: 'Rectangular profile for tighter truck/floor layouts.',
      images: [mc2],
      link: '/products/4'
    },
    {
      title: '6‑Cell Half Gallon Glass Bottles – Blue',
      desc: 'Cell dividers protect glass bottles in transit and storage.',
      images: [mc5],
      link: '/products/4'
    },
    {
      title: '9‑Cell 1‑Quart Crate – Black',
      desc: 'Nine compartments to keep quarts separated and secure.',
      images: [mc3],
      link: '/products/4'
    },
    {
      title: '12‑Cell 1‑Quart Crate – Purple',
      desc: 'Twelve compartments for higher throughput and organized handling.',
      images: [mc6],
      link: '/products/4'
    }
  ];
</script>

<section class="relative h-[80vh] bg-cover bg-center flex items-center justify-center" style="background-image: url('{featured.cover}')">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative text-center text-white px-4">
    <p class="text-sm tracking-widest uppercase">Category</p>
    <h1 class="text-4xl md:text-5xl font-bold">Milk Crates</h1>
    <p class="mt-3 text-sm md:text-base opacity-90 max-w-2xl mx-auto">
      Reliable, stackable crates for dairy, grocery, and general back‑of‑house logistics.
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
          <img src={img} alt={`Milk crate ${i + 1}`} class="w-full h-36 object-cover rounded" />
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


