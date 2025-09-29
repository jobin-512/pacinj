<script>
  import { page } from '$app/stores';
  import logo from '$lib/assets/logo.svg';
  import Icon from "@iconify/svelte";
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About P.I.M', href: '/aboutus' },
    { name: 'Products', href: '/products' },
    { name: 'Recycling', href: '/recycling' },
    { name: 'Custom Molding', href: '/custom-molding' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'BLOG', href: '/blog' },
    { name: 'Contact Us', href: '/contactus' }
  ];

  const socialLinks = [
    { icon: "ic:baseline-facebook", href: '#' },
    { icon: 'mdi:instagram', href: '#' },
    { icon: 'line-md:twitter-x', href: '#' },
    { icon: 'mdi:pinterest', href: '#' },
    { icon: 'mdi:youtube', href: '#' },
    { icon: 'mdi:linkedin', href: '#' }
  ];
</script>

<header class=" fixed w-full top-0 z-50">
  <!-- Top bar -->
  <div class="bg-[#1E1E1E] text-white px-4 py-2 flex justify-between items-center text-sm">
    <div class="flex items-center space-x-4">
      <span>Call Us Now:</span>
      <a href="tel:+16048595503" class="hover:text-gray-300">+1 (604) 859-5503</a>
    </div>
    <div class="flex items-center space-x-4">
      <a href="/aboutus" class="hover:text-gray-300">Why P.I.M?</a>
      <div class="flex items-center space-x-2">
        {#each socialLinks as link}
          <a 
            href={link.href} 
            class="hover:text-gray-300 p-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={`${link.icon}`} class="w-5 h-5" />
          </a>
        {/each}
      </div>
    </div>
  </div>

  <!-- Main header -->
  <div class="bg-[#ffffff] shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a class="w-40" href="/">
          <img src={logo} alt="PIM Logo" class="w-full" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex space-x-6">
          {#each menuItems as item}
            <a
              href={item.href}
              class="text-gray-800 hover:text-[#426E32] font-medium {$page.url.pathname === item.href ? 'text-[#426E32]' : ''}"
            >
              {item.name}
            </a>
          {/each}
          <a
            href="/contactus"
            class="bg-[#426E32] text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Get in Touch
          </a>
        </nav>

        <!-- Mobile menu button -->
        <button class="lg:hidden" on:click={toggleMenu} aria-label="Toggle navigation menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation -->
  {#if isMenuOpen}
    <nav class="lg:hidden bg-white border-t py-4 px-4 shadow-lg">
      {#each menuItems as item}
        <a
          href={item.href}
          class="block py-2 text-gray-800 hover:text-red-600 {$page.url.pathname === item.href ? 'text-red-600' : ''}"
        >
          {item.name}
        </a>
      {/each}
      <div class="mt-4 pt-4 border-t">
        <a
          href="/contactus"
          class="block w-full text-center bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  {/if}
</header>

<!-- Spacer to prevent content from going under fixed header -->
<div class="h-[120px]"></div>
