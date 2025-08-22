<script lang="ts">
    import hero from '$lib/assets/hero.svg';
    import Contact from '$lib/components/contact.svelte';
    import agriculture from '$lib/assets/agriculture.svg';
    import greenhouse from '$lib/assets/greenhouse.svg';
    import stacking from '$lib/assets/stacking.svg';
    import automated from '$lib/assets/automated.svg';
    import custom from '$lib/assets/custom.svg';
    import industrial from '$lib/assets/industrial.svg';
    import b1 from '$lib/assets/b1.svg';
    import b2 from '$lib/assets/b2.svg';
    import b3 from '$lib/assets/b3.svg';
    import { fly } from "svelte/transition";
    

  const tabs = [
    "Meeting",
    "Design",
    "Prototype",
    "Analysis",
    "Initial Test",
    "Sustainability",
    "Recycling"
  ];

  let activeTab = "Meeting";

  // Example content (you can extend this for other tabs)
  const content = {
    Meeting: {
      title: "INDUSTRY LEADER IN PLASTIC INJECTED MOLDED TOTES AND CONTAINERS",
      subtitle:
        "We start every project with a collaborative meeting to align your goals with our expertise. Together, we define the scope, materials, and production requirements.",
      points: [
        "Client-focused project planning",
        "Feasibility discussions",
        "Material recommendations",
        "Timeline & budget alignment"
      ],
      image:hero
    },
    Design: {
      title: "Innovative Design Solutions",
      subtitle:
        "Our design team creates solutions that merge durability, aesthetics, and cost-effectiveness while meeting functional requirements.",
      points: [
        "User-centered design approach",
        "CAD modeling & simulations",
        "Structural optimization",
        "Customization for branding"
      ],
      image: hero
    },
    Prototype: {
      title: "Turning Ideas Into Reality",
      subtitle:
        "Prototyping allows us to validate designs before full-scale production. We help you test and refine your product to perfection.",
      points: [
        "3D printed samples",
        "Rapid mold prototyping",
        "Early performance validation",
        "Cost-saving iterations"
      ],
      image: hero
    },
    Analysis: {
      title: "Data-Driven Product Analysis",
      subtitle:
        "Our engineers conduct in-depth analysis to ensure strength, safety, and efficiency. We use advanced tools for product performance verification.",
      points: [
        "Stress & load testing simulations",
        "Material property evaluation",
        "Risk assessments",
        "Regulatory compliance checks"
      ],
      image: hero
    },
    "Initial Test": {
      title: "Quality First Testing",
      subtitle:
        "Before mass production, we run initial tests to guarantee product integrity and confirm compliance with your expectations.",
      points: [
        "Functional performance tests",
        "Environmental resistance checks",
        "Prototype field trials",
        "User feedback integration"
      ],
      image: hero
    },
    Sustainability: {
      title: "Sustainable Manufacturing Practices",
      subtitle:
        "We believe in eco-conscious production methods. Our processes minimize waste and maximize efficiency to protect the environment.",
      points: [
        "Energy-efficient molding machines",
        "Use of recyclable plastics",
        "Reduced carbon footprint",
        "Sustainable sourcing"
      ],
      image: hero
    },
    Recycling: {
      title: "Commitment to Circular Economy",
      subtitle:
        "End-of-life products are not discarded—they are recycled and reintroduced into production, supporting a circular economy.",
      points: [
        "Closed-loop recycling programs",
        "Post-consumer resin usage",
        "Material recovery systems",
        "Zero-waste initiatives"
      ],
      image:hero
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
      title: "CAPABILITIES",
      lines: ["- 20 TON", "- 2000 TON"],
      img: b1,
      link:"#"
    },
    {
      title: "HOT STAMPING",
      lines: ["LASER", "PRINTING"],
      img: b2,
      link:"#"
    },
    {
      title: "CHOICE OF COLOUR",
      lines: ["RECYCLING"],
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

<section class="relative h-[80vh] bg-cover bg-center flex items-center" style="background-image: url('{hero}')">
  <div class="absolute inset-0  bg-opacity-50"></div>
  <div class="container mx-auto px-4">
    <div class="max-w-2xl text-white">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        Empowering New Jersey Seniors to Thrive at Home
      </h1>
      <p class="text-lg md:text-xl mb-8">
        Personalized, coordinated care for adults 55+ so you can stay safely in your community.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 ">
        <a
          href="/"
          class="bg-[#416D30] z-10 hover:bg-[white] hover:text-[#416D30] hover:cursor-pointer text-white px-8 py-3 rounded-md text-center font-semibold transition-colors"
        >
          Find Your Local PACE Program
        </a>
        <a
          href="/"
          class="bg-white z-10 hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-md text-center font-semibold transition-colors"
        >
          See How It Works
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-12 px-4 max-w-7xl mx-auto">
  <p class="text-sm text-green-700 font-semibold mb-2">Custom Molding</p>
  <h2 class="text-3xl md:text-4xl font-bold mb-6">
    The support you need, the independence you deserve.
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
    <div class="grid md:grid-cols-2 gap-8 items-center">
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
          class="rounded-lg shadow-md w-full h-auto"
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