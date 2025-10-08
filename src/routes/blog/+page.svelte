<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  const categories = ['All', 'Company', 'Products', 'Guides', 'Sustainability'];
  const pageSize = 6;

  const posts = [
    // New posts
    {
      id: 'Packaging-Solutions-for-BC’s-Berry-Farmers-Protecting-Crops-from-Field-to-Market',
      title: 'Packaging Solutions for BC’s Berry Farmers',
      excerpt:
        'How the right mini, non-divided, and divided berry trays protect crops and boost profits from field to shelf.',
      image:
        'https://images.unsplash.com/photo-1498601761256-1b16cf243eb8?q=80&w=1200&auto=format&fit=crop',
      category: 'Guides',
      author: 'PIM Team',
      date: 'Oct 2025',
      readTime: '8 min'
    },
    {
      id: 'Sustainable-Agriculture-in-BC-How-Reusable-Harvesting-Lugs-Reduce-Waste',
      title: 'Sustainable Agriculture in BC: Reusable Harvesting Lugs',
      excerpt:
        'Why durable, vented, and stackable lugs cut waste, speed harvests, and improve freshness across BC farms.',
      image:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
      category: 'Sustainability',
      author: 'PIM Team',
      date: 'Oct 2025',
      readTime: '8 min'
    },
    {
      id: 'Why-Ventilated-Totes-Are-Essential-for-Canadian-Produce-Exporters',
      title: 'Why Ventilated Totes Are Essential for Exporters',
      excerpt:
        'Ventilated totes reduce spoilage, improve handling, and support sustainability for long-haul produce.',
      image:
        'https://images.unsplash.com/photo-1524594227089-03cbf79f1423?q=80&w=1200&auto=format&fit=crop',
      category: 'Guides',
      author: 'PIM Team',
      date: 'Oct 2025',
      readTime: '7 min'
    },
    {
      id: 'From-Abbotsford-to-Global-Markets-Smart-Packaging-for-Specialty-Crops',
      title: 'Smart Packaging for Specialty Crops',
      excerpt:
        'Trays, baskets, and totes that protect delicate crops while improving efficiency from field to export.',
      image:
        'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
      category: 'Guides',
      author: 'PIM Team',
      date: 'Oct 2025',
      readTime: '9 min'
    },
    {
      id: 'How-Canadian-Dairy-Distributors-Can-Save-Costs-with-Durable-Milk-Crates',
      title: 'How Canadian Dairy Distributors Can Save Costs with Durable Milk Crates',
      excerpt:
        'Durable milk crates cut product loss, speed handling, and reduce long‑term costs for Canadian distributors.',
      image:
        'https://images.unsplash.com/photo-1517959105821-eaf2591984dd?q=80&w=1200&auto=format&fit=crop',
      category: 'Guides',
      author: 'PIM Team',
      date: 'Oct 2025',
      readTime: '7 min'
    },
  ];

  /** @param {{cat?: string, page?: number}} params */
  function updateQuery(params) {
    const url = new URL($page.url);
    // Manage category
    if ('cat' in params) {
      if (params.cat && params.cat !== 'All') url.searchParams.set('cat', params.cat);
      else url.searchParams.delete('cat');
    }
    // Manage page
    if ('page' in params) {
      const p = params.page;
      if (p && p > 1) url.searchParams.set('page', String(p));
      else url.searchParams.delete('page');
    }
    goto(`${url.pathname}${url.search}`, { replaceState: true, noScroll: true });
  }

  $: activeCategory = $page.url.searchParams.get('cat') ?? 'All';
  $: filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);
  $: totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  $: rawPage = parseInt($page.url.searchParams.get('page') || '1', 10);
  $: currentPage = isNaN(rawPage) ? 1 : Math.min(Math.max(rawPage, 1), totalPages);
  $: start = (currentPage - 1) * pageSize;
  $: paginated = filtered.slice(start, start + pageSize);
</script>

<section class="relative h-[45vh] md:h-[55vh] bg-cover bg-center flex items-center" style="background-image: url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop')">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative container mx-auto px-4 text-white">
    <h1 class="text-4xl md:text-5xl font-extrabold mb-3">Insights & Updates</h1>
    <p class="max-w-2xl text-white/90">Stories, guides, and news from Pacific Injection Molding—covering products, sustainability, and behind‑the‑scenes process.</p>
  </div>
</section>

<section class="py-12">
  <div class="container mx-auto px-4">
    <!-- Category filter -->
    <div class="flex flex-wrap gap-2 mb-8">
      {#each categories as cat}
        <button
          class="px-4 py-2 rounded-full border transition text-sm
          {activeCategory === cat ? 'bg-[#426E32] text-white border-[#426E32]' : 'border-gray-300 text-gray-700 hover:border-[#426E32]'}"
          on:click={() => updateQuery({ cat, page: 1 })}
          aria-pressed={activeCategory === cat}
        >
          {cat}
        </button>
      {/each}
    </div>

    <!-- Posts grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each paginated as post}
        <a href={`/blog/${post.id}`} class="group rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition flex flex-col">
          <div class="relative">
            <img src={post.image} alt={post.title} class="w-full h-52 object-cover group-hover:scale-[1.02] transition" />
            <span class="absolute top-3 left-3 bg-white/90 text-gray-900 text-xs font-medium px-2 py-1 rounded">{post.category}</span>
          </div>
          <div class="p-5 flex-1 flex flex-col">
            <h3 class="text-lg font-semibold mb-2 group-hover:text-[#426E32]">{post.title}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
            <div class="mt-auto flex items-center justify-between text-xs text-gray-500">
              <span>{post.author}</span>
              <span>{post.date} • {post.readTime}</span>
            </div>
          </div>
        </a>
      {/each}
    </div>

    {#if totalPages > 1}
      <!-- Pagination (works via query params) -->
      <div class="mt-10 flex items-center justify-center gap-2">
        <button
          class="px-3 py-2 border rounded text-sm {currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}"
          on:click={() => currentPage > 1 && updateQuery({ page: currentPage - 1 })}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {#each Array(totalPages) as _, i}
          <button
            class="px-3 py-2 border rounded text-sm {currentPage === i + 1 ? 'bg-[#426E32] text-white border-[#426E32]' : 'text-gray-700 hover:bg-gray-50'}"
            on:click={() => updateQuery({ page: i + 1 })}
            aria-current={currentPage === i + 1 ? 'page' : undefined}
          >
            {i + 1}
          </button>
        {/each}
        <button
          class="px-3 py-2 border rounded text-sm {currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'}"
          on:click={() => currentPage < totalPages && updateQuery({ page: currentPage + 1 })}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    {/if}
  </div>
</section>
