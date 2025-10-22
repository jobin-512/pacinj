<script lang="ts">
    import hero from '$lib/assets/about us/banner.jpg';
    import w1 from '$lib/assets/about us/Who-We-Are-03.jpg';
    import w2 from '$lib/assets/about us/Who-We-Are.jpg';
    import w3 from '$lib/assets/about us/Plastic-Totes.jpg';
    import w4 from '$lib/assets/about us/Containers-&-Bins.jpg'
    import w5 from '$lib/assets/about us/Lids,-Accessories-&-Custom.jpg'
    import p from '$lib/assets/about us/our-philosophy.jpg'
    import i from '$lib/assets/about us/Industries-We-Serve.jpg' 
    
</script>

<section class="relative h-[80vh] bg-cover bg-center flex items-center" style="background-image: url('{hero}')">
    <div class="absolute inset-0  bg-opacity-50"></div>
    <div class="container mx-auto px-4">
      <div class="max-w-2xl text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">
          About Us
        </h1>
      </div>
    </div>
  </section>


  
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Copy -->
        <div>
          <p class="text-sm tracking-widest text-green-700 font-semibold mb-4 uppercase">Pacific Injection Molding</p>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-6">Who We Are?</h2>
          <p class="text-gray-700 leading-relaxed mb-5 ">Pacific Injection Molding, started in 1971, we are a proud manufacturer of plastic products. Our mission is to provide reusable, affordable products of exceptional quality using advanced injection molding technology. We service valued customers in Canada, the U.S., and Mexico. We are dedicated to offering the best pricing and delivery times while expanding our product lines with custom solutions tailored to meet our customers’ needs. Our goal is to enhance our customers’ experience through exceptional service and beautifully crafted plastic products. We also promote environmental mindfulness by offering a recycling program that rewards our customers with financial savings.</p>
          <p class="text-gray-700 leading-relaxed mb-5">
            At Pacific Injection Molding LTD (PIM), we don’t just mold plastic—we shape solutions.
            Based in Canada with a growing footprint across the U.S. and Mexico, we specialize in
            high‑quality plastic injection‑molded totes, bins, and containers engineered for
            real‑world durability.
          </p>
          <p class="text-gray-700 leading-relaxed mb-8">
            Whether you’re storing, stacking, shipping, or organizing, PIM containers are designed to
            withstand whatever your operation throws their way. With decades of experience and a
            customer‑first approach, our clients don’t just work with us—they stick with us.
          </p>
          <a href="/contactus" class="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded transition-colors">More About Us</a>
        </div>

        <!-- Right: Image placeholders + badge -->
        <div class="relative">
          <!-- Badge -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div class="bg-black text-white px-6 py-3 shadow-xl relative">
              <span class="text-4xl font-extrabold align-middle">25</span>
              <span class="ml-3 text-sm leading-tight align-middle inline-block">
                Years Of<br />Experience
              </span>
              <span class="absolute inset-0 translate-x-2 translate-y-2 bg-green-700 -z-10"></span>
            </div>
          </div>

          <!-- Grid of blocks -->
          <div class="grid grid-cols-2 gap-6">
            <div class="col-span-1 row-span-2  h-[360px]"><img src={w2} alt="" class="h-full"></div>
            <div class="bg-gray-300 h-[180px]"><img src={w1} class="w-full" alt=""></div>
            <div class="bg-gray-300 h-[180px]"><img src={w3} class="w-full" alt=""></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What We Do (redesign) -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="mb-10 text-center">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-3">What We Do</h2>
        <p class="text-gray-600">Injection molded plastic solutions designed for demanding operations.</p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow p-6 flex flex-col">
          <div class="w-full h-40 bg-gray-200 rounded mb-4"><img src={w3} class="h-full w-full" alt=""></div>
          <h3 class="text-lg font-semibold mb-2">Plastic Totes</h3>
          <p class="text-gray-700 text-sm mb-4">From stackable containers to custom‑sized storage units, our products are engineered for commercial, industrial, and logistics environments.</p>
          <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Stackable and nestable options</li>
            <li>Ergonomic and lightweight</li>
            <li>Impact‑resistant design</li>
          </ul>
        </div>
        <div class="bg-white rounded-xl shadow p-6 flex flex-col">
          <div class="w-full h-40 bg-gray-200 rounded mb-4"><img src={w4} class="h-full w-full"  alt=""></div>
          <h3 class="text-lg font-semibold mb-2">Containers &amp; Bins</h3>
          <p class="text-gray-700 text-sm mb-4">Available in multiple sizes and configurations to support a wide range of uses—from picking and kitting to bulk storage.</p>
          <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Food‑grade materials available</li>
            <li>Ventilation and drainage options</li>
            <li>Label slots and interlocking bases</li>
          </ul>
        </div>
        <div class="bg-white rounded-xl shadow p-6 flex flex-col">
          <div class="w-full h-40 bg-gray-200 rounded mb-4"><img src={w5} class="h-full w-full" alt=""></div>
          <h3 class="text-lg font-semibold mb-2">Lids, Accessories &amp; Custom</h3>
          <p class="text-gray-700 text-sm mb-4">Secure your load and streamline storage with purpose‑built lids and accessories—or create a custom solution with our full‑service molding.</p>
          <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Custom fit and finish</li>
            <li>Hot‑stamped branding options</li>
            <li>Engineered for lifecycle durability</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Philosophy (redesign) -->
  <section class="py-20">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-6">Our Philosophy</h2>
          <p class="text-gray-700 mb-6"><b>Reliable Products. Responsive Service. Real Partnerships.</b></p>
          <p class="text-gray-700 mb-4">Containers should be the one thing you never worry about. We build products that work—day in, day out, year after year.</p>
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="bg-gray-50 rounded-xl border p-5">
              <h3 class="font-semibold mb-2">Responsiveness</h3>
              <p class="text-sm text-gray-700">No surprises, no fine print—just honest, fast support.</p>
            </div>
            <div class="bg-gray-50 rounded-xl border p-5">
              <h3 class="font-semibold mb-2">Transparency</h3>
              <p class="text-sm text-gray-700">Clear communication and predictable timelines.</p>
            </div>
            <div class="bg-gray-50 rounded-xl border p-5">
              <h3 class="font-semibold mb-2">Long‑Term Thinking</h3>
              <p class="text-sm text-gray-700">We help you grow, improve, and scale with confidence.</p>
            </div>
            <div class="bg-gray-50 rounded-xl border p-5">
              <h3 class="font-semibold mb-2">Quality First</h3>
              <p class="text-sm text-gray-700">Engineered for performance, validated by testing.</p>
            </div>
          </div>
        </div>
        <div>
          <div class="w-full h-[420px] bg-gray-300 rounded"><img src={p} class="h-full w-full" alt=""></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Industries We Serve (redesign) -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="mb-8 text-center">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-3">Industries We Serve</h2>
        <p class="text-gray-600">Proudly supporting operations across North America.</p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 items-start">
        <div class="lg:col-span-2">
          <div class="grid sm:grid-cols-2 gap-4 text-gray-800">
            <div class="flex items-start gap-3"><span class="text-green-700">•</span><span>Warehousing &amp; Distribution</span></div>
            <div class="flex items-start gap-3"><span class="text-green-700">•</span><span>Manufacturing</span></div>
            <div class="flex items-start gap-3"><span class="text-green-700">•</span><span>Agriculture</span></div>
            <div class="flex items-start gap-3"><span class="text-green-700">•</span><span>Retail &amp; Grocery</span></div>
            <div class="flex items-start gap-3"><span class="text-green-700">•</span><span>Automotive</span></div>
            <div class="flex items-start gap-3"><span class="text-green-700">•</span><span>Food &amp; Beverage</span></div>
            <div class="flex items-start gap-3"><span class="text-green-700">•</span><span>E‑commerce</span></div>
            <div class="flex items-start gap-3"><span class="text-green-700">•</span><span>Medical &amp; Pharma</span></div>
            <div class="flex items-start gap-3"><span class="text-green-700">•</span><span>Cannabis</span></div>
          </div>
          <p class="text-gray-700 leading-relaxed mt-8 max-w-3xl">
            No matter your sector, if you need reliable storage and handling solutions, we’re here to help.
          </p>
        </div>
        <div class="grid gap-4">
          <div class="w-full h-44 bg-gray-300 rounded"><img src={i} class="h-full w-full" alt=""></div>
        </div>
      </div>
    </div>
  </section>