<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  const categories = ['All', 'Company', 'Products', 'Guides', 'Sustainability'];
  const pageSize = 6;

  const posts = [
    {
      id: '1',
      title: 'How We Engineer Durable Injection-Molded Totes',
      excerpt:
        'A behind-the-scenes look at our design principles for strength, longevity, and safety in demanding environments.',
      image:
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop',
      category: 'Products',
      author: 'PIM Team',
      date: 'Sep 2025',
      readTime: '5 min'
    },
    {
      id: '2',
      title: 'Closing the Loop: Practical Recycling for Plastics',
      excerpt:
        'What closed-loop recycling looks like in practice, and how it benefits both operations and the planet.',
      image:
        'https://images.unsplash.com/photo-1548607086-e7ef42d18084?q=80&w=1200&auto=format&fit=crop',
      category: 'Sustainability',
      author: 'Sustainability Office',
      date: 'Aug 2025',
      readTime: '6 min'
    },
    {
      id: '3',
      title: 'Choosing the Right Container: Stack vs. Stack & Nest',
      excerpt:
        'A quick guide to help operations managers pick the right container style for their workflow.',
      image:
        'https://images.unsplash.com/photo-1610465299990-0f2a8d0a5150?q=80&w=1200&auto=format&fit=crop',
      category: 'Guides',
      author: 'Operations',
      date: 'Aug 2025',
      readTime: '4 min'
    },
    {
      id: '4',
      title: 'Inside PIM: Our 7-Step Product Development Process',
      excerpt:
        'From discovery to delivery—how we collaborate with customers to build the right solution.',
      image:
        'https://images.unsplash.com/photo-1581091870622-7c81d596b43f?q=80&w=1200&auto=format&fit=crop',
      category: 'Company',
      author: 'Engineering',
      date: 'Jul 2025',
      readTime: '7 min'
    },
    {
      id: '5',
      title: 'Food-Grade Considerations for Agriculture & Processing',
      excerpt:
        'What to know about materials, certifications, and best practices for food-safe handling.',
      image:
        'https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=1200&auto=format&fit=crop',
      category: 'Guides',
      author: 'Quality Team',
      date: 'Jun 2025',
      readTime: '6 min'
    },
    {
      id: '6',
      title: 'Customer Spotlight: Scaling Efficiently with Stackable Crates',
      excerpt:
        'How a regional distributor reduced handling time by 18% with the right containers.',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
      category: 'Company',
      author: 'Customer Success',
      date: 'May 2025',
      readTime: '5 min'
    }
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
