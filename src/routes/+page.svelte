
<script lang="ts">
    import Contact from '$lib/components/contact.svelte';
    import agriculture from '$lib/assets/agriculture.svg';
    import greenhouse from '$lib/assets/greenhouse.svg';
    import stacking from '$lib/assets/stacking.svg';
    import automated from '$lib/assets/automated.svg';
    import custom from '$lib/assets/custom.svg';
    import industrial from '$lib/assets/industrial.svg';
    import b1 from '$lib/assets/b1.webp';
    import b2 from '$lib/assets/b2.webp';
    import b3 from '$lib/assets/b3.svg';
    import { fly } from "svelte/transition";
	import { onMount } from 'svelte';
    import c1 from "$lib/assets/Home page/Meeting.jpg"
    import c2 from "$lib/assets/Home page/Design.jpg"
    import c3 from "$lib/assets/Home page/Prototype.png"
    import c4 from "$lib/assets/Home page/Analysis.jpg"
    import c5 from "$lib/assets/Home page/Initial Test.png"
    import c6 from "$lib/assets/Home page/Sustainability.jpg"
    import c7 from "$lib/assets/Home page/Recycling.jpg"
	import s1 from "$lib/assets/Home page/banner/1.jpg";
	import s2 from "$lib/assets/Home page/banner/2.jpg";
	import s3 from "$lib/assets/Home page/banner/3.jpg";
	import s4 from "$lib/assets/Home page/banner/4.jpg";
	import s5 from "$lib/assets/Home page/banner/5.jpg";

	const slides = [
		{ image: s1, title: 'Over 55 Years of Expertise in Plastic Injection Molding', quote: 'Reliable, high-quality solutions for agriculture and industry across North America. From custom molding to CAD design, 3D printing, and prototyping — we bring your vision to life.' },
		{ image: s2, title: 'Precision That Performs', quote: 'Engineered for demanding industries and real-world conditions' },
		{ image: s3, title: 'From Idea To Product', quote: 'End-to-end design, tooling, and production under one roof' },
		{ image: s4, title: 'Sustainable By Design', quote: 'Smart materials, efficient processes, and longer product life cycles' },
		{ image: s5, title: 'Made To Fit Your Workflow', quote: 'Custom sizes, features, and finishes to match your operations' }
	];

	let currentSlide = 0;
	let autoplayInterval: ReturnType<typeof setInterval> | undefined;

	function goToSlide(index: number) {
		currentSlide = (index + slides.length) % slides.length;
	}

	function nextHero() {
		goToSlide(currentSlide + 1);
	}

	function prevHero() {
		goToSlide(currentSlide - 1);
	}

	onMount(() => {
		autoplayInterval = setInterval(() => {
			nextHero();
		}, 5000);
		return () => {
			if (autoplayInterval) clearInterval(autoplayInterval);
		};
	});

	const tabs = [
    "Meeting",
    "Design",
    "Prototype",
    "Analysis",
    "Initial Test",
    "Sustainability",
    "Recycling"
	] as const;

	type Tab = typeof tabs[number];
	let activeTab: Tab = "Meeting";

  // Example content (you can extend this for other tabs)
	const content: Record<Tab, { title: string; subtitle: string; points: string[]; image: string }> = {
    Meeting: {
      title: "Meeting – We Listen First. Always.",
      subtitle:
        "Before we touch a CAD file or fire up a machine, we sit down with you. Why? Because every client is different—and so is every challenge. In this initial phase, we work to fully understand your requirements:",
      points: [
        "What kind of products are you storing or transporting?",
        "How are your current containers falling short?",
        "Are there weight limits, handling needs, or space constraints?",
        "Do you have industry compliance or food-grade material requirements?"
      ],
      image:c1
    },
    Design: {
      title: "Design – Turning Your Ideas Into Real-World Solutions",
      subtitle:
        "We don’t just design products—we design possibilities. By working closely with you, our team transforms your vision into intelligent, manufacturable solutions tailored to your needs. Here’s what sets us apart:",
      points: [
        "Custom-fit CAD modeling that aligns with your unique specifications and business objectives",
        "Infinite design flexibility—from functionality to aesthetics, we adapt to whatever your solution requires",
        "Engineered durability and performance, ensuring every design thrives under real-world demands",
        "Tailored textures, finishes, and reinforcements that enhance usability, brand appeal, and long-term reliability"
      ],
      image: c2
    },
    Prototype: {
      title: "Prototype – See It. Feel It. Test It.",
      subtitle:
        "After design comes something tangible—your prototype. This isn't just a rough draft; it’s your first chance to experience how your container performs in the real world. With rapid prototyping, you’ll be able to:",
      points: [
        "3D printed samples",
        "Rapid mold prototyping",
        "Early performance validation",
        "Cost-saving iterations"
      ],
      image: c3
    },
    Analysis: {
      title: "Analysis – We Let the Data Do the Talking",
      subtitle:
        "We take your prototype and push it to the limit. Our internal analysis process uses advanced testing tools and simulation software to ensure the product holds up under pressure. What we test:",
      points: [
        "Weight-bearing capacity and load distribution",
        "Impact resistance, including drops and high-friction handling",
        "Temperature and UV resistance for outdoor or cold-storage use",
        "Material compliance with regulatory requirements (especially important in food, pharma, and agriculture)"
      ],
      image: c4
    },
    "Initial Test": {
      title: "Initial Test – Real-World Trials Before Full Production",
      subtitle:
        "After lab analysis, we go one step further: real-world trials. We create a short-run production batch so you can test the containers in their intended environment—on your floor, with your team, in actual use. You’ll be able to:",
      points: [
        "Catch any last-minute tweaks that may be required",
        "Evaluate how it holds up during actual use, including stacking, storing, washing, and transport",
        "Feel 100% confident before scaling up to high-volume production"
      ],
      image: c5
    },
    Sustainability: {
      title: "Sustainability – Good for Business. Better for the Planet.",
      subtitle:
        "Sustainability isn’t a buzzword here—it’s part of our DNA. Every design decision we make includes an eco-conscious approach. Here’s how:",
      points: [
        "Recyclable and reusable materials: We use high-performance polymers that are designed for long lifecycles and are recyclable at end-of-life",
        "Reduced plastic waste: Through advanced mold design and lean manufacturing",
        "Energy-efficient machines: Our injection molding equipment is optimized for reduced energy consumption",
        "Made-in-Canada production: Less shipping distance = lower carbon footprint"
      ],
      image: c6
    },
    Recycling: {
      title: "Recycling – We Close the Loop",
      subtitle:
        "Every product we create is built for durability, but we also think ahead. When it’s time to retire a bin or tote, we want to make that transition easy and responsible. Our recycling program:",
      points: [
        "Helps you reclaim and recycle used containers",
        "Offers closed-loop solutions for clients with high-volume needs",
        "Supports your internal ESG and sustainability goals"
      ],
      image:c7
    }
	};

  const products = [
    {
      name: "Agricultural",
      desc: "Durable injection-molded containers built for agriculture and farming applications.",
      img: agriculture
    },
    {
      name: "Green House",
      desc: "Specialized trays and bins designed for greenhouse environments.",
      img: greenhouse
    },
    {
      name: "STACK ING ONLY",
      desc: "Heavy-duty crates designed exclusively for stacking efficiency.",
      img: stacking
    },
    {
      name: "STACKING & NESTING",
      desc: "Versatile bins that can be stacked or nested for flexible storage.",
      img: stacking
    },
    {
      name: "Automated Sorting Trays",
      desc: "Reliable trays tailored for automated systems and conveyor belts.",
      img: automated
    },
    {
      name: "Custom",
      desc: "Custom-molded containers tailored to your specifications.",
      img: custom
    },
    {
      name: "Industrial",
      desc: "Strong and durable containers engineered for industrial use.",
      img: industrial
    },
    {
      name: "Industrial",
      desc: "Standardized industrial trays for heavy-duty applications.",
      img: industrial
    }
  ];

  const items = [
    {
      title: "Injection Molding Machine capabilities ",
      lines: ["- 20 TON", "- 2000 TON"],
      img: b1,
      link:"#"
    },
    {
      title: "Click Here To Learn About",
      lines: ["Hot stamping", "Laser printing"],
      img: b2,
      link:"#"
    },
    {
      title: "See our color options",
      lines: [""],
      img: b3,
      link:"#"
    }
  ];

  let startIndex = 0;
  let direction = 1; // 1 = forward, -1 = backward

    const testimonials = [
    {
      name: "Mr. Madonna Sabastin",
      role: "General Manager",
      title: "Deliver Peace of Mind!",
      text: "Welcome to our home security camera website! Our mission is to help you keep your home and loved ones safe and secure.",
      img: "https://via.placeholder.com/100"
    },
    {
      name: "Ms. Jennifer Louis",
      role: "Operations Head",
      title: "Top-notch Security!",
      text: "The cameras and monitoring system are excellent. They give me peace of mind knowing my office and staff are protected at all times.",
      img: "https://via.placeholder.com/100"
    },
    {
      name: "Mr. Alex Johnson",
      role: "IT Manager",
      title: "Reliable & Secure!",
      text: "The installation process was smooth and the team provided outstanding support. Highly recommend for corporate setups.",
      img: "https://via.placeholder.com/100"
    },
    {
      name: "Mrs. Emma Watson",
      role: "Home Owner",
      title: "Worth Every Penny!",
      text: "I feel much safer at home. The mobile app lets me monitor everything in real-time from anywhere.",
      img: "https://via.placeholder.com/100"
    },
    {
      name: "Mr. David Smith",
      role: "Business Owner",
      title: "Great Customer Service!",
      text: "The support team is fantastic and always available to help. Very professional and responsive.",
      img: "https://via.placeholder.com/100"
    }
  ];

  function prev() {
    direction = -1;
    startIndex = (startIndex - 1 + testimonials.length) % testimonials.length;
  }

  function next() {
    direction = 1;
    startIndex = (startIndex + 1) % testimonials.length;
  }
</script>

<section class="relative h-[80vh] overflow-hidden">
	{#each slides as slide, i}
		<div
			class="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
			style="background-image: url('{slide.image}'); opacity: {currentSlide === i ? 1 : 0};"
			aria-hidden={currentSlide !== i}
		>
			<div class="absolute inset-0 bg-black/40"></div>
			<div class="relative h-full container mx-auto px-4 flex items-center">
				<div class="max-w-2xl text-white">
					{#if i === 0}
						<h1 class="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
					{:else}
						<h2 class="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h2>
					{/if}
					<p class="text-lg md:text-xl mb-8">{slide.quote}</p>
					<div class="flex flex-col sm:flex-row gap-4">
						<a
							href="/contactus"
							class="bg-[#416D30] z-10 hover:bg-white hover:text-[#416D30] hover:cursor-pointer text-white px-8 py-3 rounded-md text-center font-semibold transition-colors"
						>
							Contact Us
						</a>
						<a
							href="/custom-molding"
							class="bg-white z-10 hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-md text-center font-semibold transition-colors"
						>
							See How It Works
						</a>
					</div>
				</div>
			</div>
		</div>
	{/each}

	<!-- Controls -->
	<div class="absolute inset-x-0 bottom-6 flex items-center justify-between px-4">
		<button aria-label="Previous" class="text-white/90 hover:text-white bg-black/30 hover:bg-black/40 rounded-full w-10 h-10 flex items-center justify-center" on:click={prevHero}>
			<span aria-hidden="true">←</span>
		</button>
		<div class="flex gap-2">
			{#each slides as _, i}
				<button class="w-2.5 h-2.5 rounded-full transition-all {currentSlide === i ? 'bg-white w-6' : 'bg-white/60'}" aria-label={`Go to slide ${i + 1}`} on:click={() => goToSlide(i)}></button>
			{/each}
		</div>
		<button aria-label="Next" class="text-white/90 hover:text-white bg-black/30 hover:bg-black/40 rounded-full w-10 h-10 flex items-center justify-center" on:click={nextHero}>
			<span aria-hidden="true">→</span>
		</button>
	</div>
</section>

<section class="py-12 px-4 max-w-7xl mx-auto">
  <p class="text-sm text-green-700 font-semibold mb-2">Custom Molding</p>
  <h2 class="text-3xl md:text-4xl font-bold mb-6">
    PIM’s Story: The 7-Step Process That Delivers Results
  </h2>

  <!-- Tabs -->
  <div class="flex flex-wrap gap-2 border-b mb-8">
    {#each tabs as tab}
      <button
        class="px-4 py-2 font-medium border-b-4 transition-colors duration-200 
          {activeTab === tab
            ? ' text-white bg-[#426E32] rounded-xl'
            : 'border-transparent text-gray-600 hover:text-[#426E32]'}"
        on:click={() => (activeTab = tab)}
      >
        {tab}
      </button>
    {/each}
  </div>

  <!-- Content -->
  {#if content[activeTab]}
    <div class="grid md:grid-cols-2 gap-8 items-center md:min-h-[25rem]">
      <!-- Left -->
      <div>
        <h3 class="text-2xl font-bold mb-4">{content[activeTab].title}</h3>
        <p class="text-gray-600 mb-6">{content[activeTab].subtitle}</p>

        <ul class="space-y-2 mb-6">
          {#each content[activeTab].points as point}
            <li class="flex items-center gap-2 text-gray-700">
              <span class="text-[#426E32]">✔</span> {point}
            </li>
          {/each}
        </ul>

        <button class="px-5 py-2 border border-gray-800 hover:bg-gray-800 hover:text-white transition">
          MORE DETAILS
        </button>
      </div>

      <!-- Right -->
      <div>
        <img
          src={content[activeTab].image}
          alt={content[activeTab].title}
          class="rounded-lg shadow-md w-full h-full"
        />
      </div>
    </div>
  {/if}
</section>


<section class="py-12 px-4 max-w-7xl mx-auto">
  <p class="text-sm text-center text-gray-500 mb-2">Our Product</p>
  <h2 class="text-2xl md:text-3xl font-bold text-center mb-10">
    <span class="text-green-700">Pacific Injection Molding</span> LTD specializes in plastic <br />
    injected molded totes and containers.
  </h2>

  <!-- Product Grid -->
  <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {#each products as product}
      <div class="relative group rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <!-- Image -->
        <img
          src={product.img}
          alt={product.name}
          class="w-full h-56 object-cover"
        />

        <!-- Default Content -->
        <div class="p-4 bg-white">
          <h3 class="text-lg font-semibold">{product.name}</h3>
          <p class="text-gray-500 text-sm">{product.desc}</p>
        </div>

        <!-- Hover Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#426E32] to-transparent bg-opacity-0 flex flex-col items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <h3 class="text-xl font-semibold mb-2">{product.name}</h3>
          <p class="text-sm mb-4 px-3">{product.desc}</p>
          <button
            class="px-4 py-2 border border-white hover:bg-white hover:text-green-700 transition"
          >
            DETAILS
          </button>
        </div>
      </div>
    {/each}
  </div>
</section>


<section class="w-full ">
  <h2 class="text-2xl md:text-3xl font-bold text-center mb-10"> PIM offers</h2>
  <div class="grid md:grid-cols-3 grid-cols-1 ">
    {#each items as item}
      <a href={item.link}
        class="relative group h-[300px] md:h-[400px] overflow-hidden  hover:scale-110 hover:duration-300 duration-300"
      >
        <!-- Background Image -->
        <img
          src={item.img}
          alt={item.title}
          class="w-full h-full object-cover"
        />

        <!-- Dark base overlay -->
        <div class="absolute inset-0 bg-opacity-40"></div>

        <!-- Text -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white text-center font-bold text-2xl md:text-3xl transition duration-300"
        >
          <h3>{item.title}</h3>
          {#each item.lines as line}
            <p class="mt-2">{line}</p>
          {/each}
        </div>
      </a>
    {/each}
  </div>
</section>


<section class="py-16 px-4 max-w-7xl mx-auto text-center overflow-hidden">
  <!-- Section Header -->
  <p class="text-sm text-red-600 font-semibold tracking-wide">CLIENT TESTIMONIAL</p>
  <h2 class="text-3xl md:text-4xl font-bold mb-12">
    What Our client <span class="text-red-600">says to Us</span>
  </h2>

  <!-- Testimonials Row with Animation -->
  <div class="flex flex-col md:flex-row justify-center gap-6 relative">
    {#each Array(3) as _, i (startIndex + i)}
      <div
        class="flex-1 p-6 rounded-2xl bg-gray-100 shadow transition-all duration-300"
        transition:fly="{{ x: direction * 200, duration: 400 }}"
      >
        <div class="flex items-center gap-4 mb-4">
          <img
            src={testimonials[(startIndex + i) % testimonials.length].img}
            alt={testimonials[(startIndex + i) % testimonials.length].name}
            class="w-16 h-16 rounded-full bg-gray-300"
          />
          <div class="text-left">
            <h4 class="font-bold">{testimonials[(startIndex + i) % testimonials.length].name}</h4>
            <p class="text-red-600 text-sm">{testimonials[(startIndex + i) % testimonials.length].role}</p>
          </div>
        </div>
        <h5 class="text-lg font-semibold mb-2">
          {testimonials[(startIndex + i) % testimonials.length].title}
        </h5>
        <p class="text-gray-600 text-sm">
          {testimonials[(startIndex + i) % testimonials.length].text}
        </p>
      </div>
    {/each}
  </div>

  <!-- Controls -->
  <div class="flex justify-center mt-8 gap-3">
    <button
      class="w-10 h-10 flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition"
      on:click={prev}
    >
      ←
    </button>
    <button
      class="w-10 h-10 flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition"
      on:click={next}
    >
      →
    </button>
  </div>
</section>

<Contact/>