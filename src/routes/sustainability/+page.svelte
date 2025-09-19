<script lang="ts">
  import hero from '$lib/assets/hero.webp';
  import { onMount } from 'svelte';
  import Contact from '$lib/components/contact.svelte';

  let activeSection = 'overview';
  let sections = [
    { id: 'overview', title: 'Sustainability Overview', href: '#overview' },
    { id: 'environmental', title: 'Environmental Impact', href: '#environmental' },
    { id: 'recycling', title: 'Recycling Programs', href: '#recycling' },
    { id: 'materials', title: 'Sustainable Materials', href: '#materials' },
    { id: 'initiatives', title: 'Green Initiatives', href: '#initiatives' },
    { id: 'certifications', title: 'Certifications', href: '#certifications' },
    { id: 'future', title: 'Future Goals', href: '#future' }
  ];

  onMount(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  });

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
</script>

<!-- Hero Section -->
<section class="relative h-[80vh] bg-cover bg-center flex items-center" style="background-image: url('{hero}')">
  <div class="absolute inset-0 bg-opacity-50"></div>
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-2xl text-white">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        Sustainability
      </h1>
      <p class="text-xl md:text-2xl mb-6">
        Committed to environmental responsibility and sustainable manufacturing practices
      </p>
    </div>
  </div>
</section>

<!-- Main Content with Sidebar -->
<div class="flex">
  <!-- Sticky Sidebar -->
  <aside class="hidden lg:block w-80 bg-gray-50 sticky top-[120px] h-fit p-6">
    <div class="bg-white rounded-lg shadow-sm p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Table of Contents</h3>
      <nav class="space-y-2">
        {#each sections as section}
          <button
            on:click={() => scrollToSection(section.id)}
            class="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium
              {activeSection === section.id 
                ? 'bg-[#426E32] text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-100 hover:text-[#426E32]'}"
          >
            {section.title}
          </button>
        {/each}
      </nav>
      
      <!-- Need Help Section -->
      <div class="mt-8 bg-[#1E1E1E] rounded-lg p-6 text-white">
        <h4 class="font-semibold mb-2">Need Help?</h4>
        <p class="text-sm text-gray-300 mb-4">
          Speak with a human to filling out a form? call corporate office and we will connect you with a team member who can help.
        </p>
        <a href="tel:+16048595503" class="flex items-center text-[#426E32] font-semibold hover:text-green-400 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          +1 (604) 859-5503
        </a>
      </div>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="flex-1 max-w-4xl mx-auto px-4 py-12">
    <!-- Overview Section -->
    <section id="overview" class="mb-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Sustainability Overview</h2>
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-700 leading-relaxed mb-6">
          At Pacific Injection Molding, sustainability isn't just a buzzword—it's a core principle that guides every aspect of our operations. We believe that responsible manufacturing means creating products that not only meet today's needs but also protect tomorrow's environment.
        </p>
        <p class="text-gray-700 leading-relaxed mb-6">
          Our commitment to sustainability encompasses everything from the materials we use and the energy we consume to the waste we generate and the partnerships we build. We're constantly innovating to reduce our environmental footprint while maintaining the high quality and durability our customers expect.
        </p>
        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <div class="w-12 h-12 bg-[#426E32] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Environmental Stewardship</h3>
            <p class="text-gray-600 text-sm">Protecting our planet through responsible manufacturing practices and waste reduction.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <div class="w-12 h-12 bg-[#426E32] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Quality & Durability</h3>
            <p class="text-gray-600 text-sm">Creating long-lasting products that reduce the need for frequent replacements.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <div class="w-12 h-12 bg-[#426E32] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Community Impact</h3>
            <p class="text-gray-600 text-sm">Supporting local communities and creating sustainable employment opportunities.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Environmental Impact Section -->
    <section id="environmental" class="mb-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Environmental Impact</h2>
      <div class="bg-white rounded-lg shadow-sm p-8">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold mb-4 text-[#426E32]">Our Environmental Commitments</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-[#426E32] mr-3 mt-1">•</span>
                <span class="text-gray-700">Reduced energy consumption through efficient manufacturing processes</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#426E32] mr-3 mt-1">•</span>
                <span class="text-gray-700">Minimized waste generation through precision molding techniques</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#426E32] mr-3 mt-1">•</span>
                <span class="text-gray-700">Water conservation initiatives in our production facilities</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#426E32] mr-3 mt-1">•</span>
                <span class="text-gray-700">Air quality improvements through advanced filtration systems</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-100 rounded-lg p-6">
            <h4 class="text-lg font-semibold mb-4">Environmental Metrics</h4>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Energy Efficiency</span>
                  <span>85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-[#426E32] h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Waste Reduction</span>
                  <span>92%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-[#426E32] h-2 rounded-full" style="width: 92%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span>Water Conservation</span>
                  <span>78%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-[#426E32] h-2 rounded-full" style="width: 78%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recycling Programs Section -->
    <section id="recycling" class="mb-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Recycling Programs</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow-sm p-8">
          <h3 class="text-2xl font-semibold mb-4 text-[#426E32]">Product Lifecycle Management</h3>
          <p class="text-gray-700 mb-6">
            We design our products with end-of-life considerations in mind. Our containers are made from recyclable materials and can be easily processed through standard recycling programs.
          </p>
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-8 h-8 bg-[#426E32] rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-sm">1</span>
              </div>
              <span class="text-gray-700">Collection of used containers from customers</span>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-[#426E32] rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-sm">2</span>
              </div>
              <span class="text-gray-700">Sorting and cleaning of materials</span>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-[#426E32] rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-sm">3</span>
              </div>
              <span class="text-gray-700">Processing into new raw materials</span>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-[#426E32] rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-sm">4</span>
              </div>
              <span class="text-gray-700">Manufacturing new products</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-lg p-8">
          <h3 class="text-2xl font-semibold mb-4 text-[#426E32]">Recycling Statistics</h3>
          <div class="space-y-6">
            <div class="text-center">
              <div class="text-4xl font-bold text-[#426E32] mb-2">95%</div>
              <div class="text-gray-600">of our products are recyclable</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[#426E32] mb-2">2.5M</div>
              <div class="text-gray-600">pounds of plastic recycled annually</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-[#426E32] mb-2">40%</div>
              <div class="text-gray-600">reduction in virgin material usage</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sustainable Materials Section -->
    <section id="materials" class="mb-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Sustainable Materials</h2>
      <div class="bg-white rounded-lg shadow-sm p-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-[#426E32] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Recycled Content</h3>
            <p class="text-gray-600 text-sm">Up to 30% post-consumer recycled content in our products</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-[#426E32] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Food-Grade Materials</h3>
            <p class="text-gray-600 text-sm">FDA-approved materials safe for food contact applications</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-[#426E32] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Energy Efficient</h3>
            <p class="text-gray-600 text-sm">Low-energy manufacturing processes and renewable energy sources</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Green Initiatives Section -->
    <section id="initiatives" class="mb-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Green Initiatives</h2>
      <div class="space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-8">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-[#426E32] rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-[#426E32]">Renewable Energy</h3>
              <p class="text-gray-700 mb-4">
                We've invested in solar panels and other renewable energy sources to power our manufacturing facilities. This initiative has reduced our carbon footprint by 40% over the past three years.
              </p>
              <div class="text-sm text-gray-600">
                <strong>Impact:</strong> 500 kW solar installation, 2,000 MWh annual generation
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-8">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-[#426E32] rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-[#426E32]">Circular Economy</h3>
              <p class="text-gray-700 mb-4">
                We've implemented a comprehensive take-back program that allows customers to return used containers for recycling, creating a closed-loop system that minimizes waste.
              </p>
              <div class="text-sm text-gray-600">
                <strong>Impact:</strong> 85% of returned containers are successfully recycled into new products
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-8">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-[#426E32] rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-[#426E32]">Community Partnerships</h3>
              <p class="text-gray-700 mb-4">
                We partner with local environmental organizations and schools to promote sustainability education and community recycling programs.
              </p>
              <div class="text-sm text-gray-600">
                <strong>Impact:</strong> 15 community partnerships, 500+ students educated annually
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section id="certifications" class="mb-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Certifications & Standards</h2>
      <div class="bg-white rounded-lg shadow-sm p-8">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-[#426E32]">Our Certifications</h3>
            <div class="space-y-4">
              <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                <div class="w-12 h-12 bg-[#426E32] rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">ISO 14001:2015</div>
                  <div class="text-sm text-gray-600">Environmental Management System</div>
                </div>
              </div>
              <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                <div class="w-12 h-12 bg-[#426E32] rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">FDA Food Contact</div>
                  <div class="text-sm text-gray-600">Food-grade material certification</div>
                </div>
              </div>
              <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                <div class="w-12 h-12 bg-[#426E32] rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">ASTM D6400</div>
                  <div class="text-sm text-gray-600">Compostable plastics standard</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-[#426E32]">Quality Standards</h3>
            <div class="space-y-4">
              <div class="p-4 border-l-4 border-[#426E32] bg-gray-50">
                <div class="font-semibold mb-2">Continuous Improvement</div>
                <div class="text-sm text-gray-600">Regular audits and process optimization to maintain the highest standards</div>
              </div>
              <div class="p-4 border-l-4 border-[#426E32] bg-gray-50">
                <div class="font-semibold mb-2">Third-Party Verification</div>
                <div class="text-sm text-gray-600">Independent testing and certification by recognized industry bodies</div>
              </div>
              <div class="p-4 border-l-4 border-[#426E32] bg-gray-50">
                <div class="font-semibold mb-2">Transparency</div>
                <div class="text-sm text-gray-600">Open reporting of our environmental performance and sustainability metrics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future Goals Section -->
    <section id="future" class="mb-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">Future Goals</h2>
      <div class="bg-gradient-to-r from-[#426E32] to-green-600 rounded-lg p-8 text-white">
        <h3 class="text-2xl font-semibold mb-6">Our 2030 Sustainability Vision</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-xl font-semibold mb-4">Environmental Targets</h4>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                <span>100% renewable energy by 2025</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                <span>Zero waste to landfill by 2027</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                <span>50% reduction in water usage by 2030</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                <span>Carbon neutral operations by 2030</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-xl font-semibold mb-4">Innovation Goals</h4>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                <span>100% recyclable product portfolio</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                <span>Biodegradable material alternatives</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                <span>AI-powered waste reduction systems</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
                <span>Industry-leading sustainability metrics</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 text-center">
          <p class="text-lg mb-4">Join us in building a more sustainable future</p>
          <a href="/contactus" class="inline-block bg-white text-[#426E32] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Involved
          </a>
        </div>
      </div>
    </section>
  </main>
</div>

<Contact />
