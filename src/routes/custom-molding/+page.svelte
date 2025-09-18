<script lang="ts">
  import hero from '$lib/assets/hero.webp';
</script>

<!-- Hero section -->
<section class="relative h-[80vh] bg-cover bg-center flex items-center" style="background-image: url('{hero}')">
<div class="absolute inset-0  bg-opacity-50"></div>
<div class="container mx-auto px-4">
  <div class="max-w-2xl text-white">
    <h1 class="text-5xl md:text-6xl font-bold mb-4">
      Custom Molding
    </h1>
  </div>
</div>
</section>

<!-- seven steps process -->
<section class="py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-10">
      <p class="text-sm text-[#426E32] font-semibold">Our Services</p>
      <h2 class="text-3xl md:text-4xl font-extrabold mt-2">The 7‑Step Custom Molding Process at Pacific Injection<br class="hidden md:block" /> Molding</h2>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card 1 -->
      <div class="group bg-white rounded-xl shadow hover:shadow-lg transition p-6 hover:bg-[#1F2227]">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center text-2xl">🛠️</div>
          <div>
            <h3 class="font-semibold text-lg group-hover:text-white">Meeting — We Listen First. Always.</h3>
            <p class="text-sm text-gray-600 mt-2 group-hover:text-white/80">We start with discovery: goals, constraints, compliance, and success criteria.</p>
            <button class="mt-4 inline-block text-xs text-[#426E32] font-semibold group-hover:text-white">LEARN MORE</button>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="group bg-white rounded-xl shadow hover:shadow-lg transition p-6 hover:bg-[#1F2227]">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center text-2xl group-hover:bg-white/10">🧩</div>
          <div>
            <h3 class="font-semibold text-lg group-hover:text-white">Design — We Engineer With You, Not Just For You</h3>
            <p class="text-sm text-gray-600 mt-2 group-hover:text-white/80">Models tailored to your workflow: handles, stacking, ventilation, and labeling.</p>
            <button class="mt-4 inline-block text-xs text-[#426E32] font-semibold group-hover:text-white">LEARN MORE</button>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="group bg-white rounded-xl shadow hover:shadow-lg transition p-6 hover:bg-[#1F2227]">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center text-2xl">🧪</div>
          <div>
            <h3 class="font-semibold text-lg group-hover:text-white">Prototype — See It. Feel It. Test It.</h3>
            <p class="text-sm text-gray-600 mt-2 group-hover:text-white/80">Rapid prototypes for form, fit, and function before you scale up.</p>
            <button class="mt-4 inline-block text-xs text-[#426E32] font-semibold group-hover:text-white">LEARN MORE</button>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="group bg-white rounded-xl shadow hover:shadow-lg transition p-6 hover:bg-[#1F2227]">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center text-2xl">📊</div>
          <div>
            <h3 class="font-semibold text-lg group-hover:text-white">Analysis — Let the Data Do the Talking</h3>
            <p class="text-sm text-gray-600 mt-2 group-hover:text-white/80">FEA, impact, load, and thermal checks ensure real‑world performance.</p>
            <button class="mt-4 inline-block text-xs text-[#426E32] font-semibold group-hover:text-white">LEARN MORE</button>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="group bg-white rounded-xl shadow hover:shadow-lg transition p-6 hover:bg-[#1F2227]">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center text-2xl">✅</div>
          <div>
            <h3 class="font-semibold text-lg group-hover:text-white">Initial Test — Field‑Proven Performance</h3>
            <p class="text-sm text-gray-600 mt-2 group-hover:text-white/80">Short‑run builds to validate ergonomics, stacking, washing, and transport.</p>
            <button class="mt-4 inline-block text-xs text-[#426E32] font-semibold group-hover:text-white">LEARN MORE</button>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="group bg-white rounded-xl shadow hover:shadow-lg transition p-6 hover:bg-[#1F2227]">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center text-2xl">🌿</div>
          <div>
            <h3 class="font-semibold text-lg group-hover:text-white">Sustainability — Designed to Last. Built to Recycle.</h3>
            <p class="text-sm text-gray-600 mt-2 group-hover:text-white/80">Materials and processes chosen for long lifecycle and recyclability.</p>
            <button class="mt-4 inline-block text-xs text-[#426E32] font-semibold group-hover:text-white">LEARN MORE</button>
          </div>
        </div>
      </div>

      <!-- Card 7 -->
      <div class="group bg-white rounded-xl shadow hover:shadow-lg transition p-6 md:col-span-2 lg:col-span-1 hover:bg-[#1F2227]">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center text-2xl">♻️</div>
          <div>
            <h3 class="font-semibold text-lg group-hover:text-white">Recycling — We Close the Loop</h3>
            <p class="text-sm text-gray-600 mt-2 group-hover:text-white/80">End‑of‑life take‑back and regrind options keep plastics in circulation.</p>
            <button class="mt-4 inline-block text-xs text-[#426E32] font-semibold group-hover:text-white">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16">
  <div class="container mx-auto px-4 space-y-16">
    <!-- Step 1 -->
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Step 1: Meeting — We Listen First. Always.</h3>
        <p class="text-sm text-gray-700 mb-4">Before we build anything, we build understanding.</p>
        <p class="text-sm text-gray-700 mb-4">This step isn’t just about gathering specs—it’s about strategic alignment. We take the time to understand your product, your workflow, and the problems you’re trying to solve.</p>
        <p class="text-xs text-gray-500 font-semibold mb-2">We ask the tough questions:</p>
        <ul class="text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>What are you storing, shipping, or stacking?</li>
          <li>Are your current containers underperforming, breaking, or wasting space?</li>
          <li>What handling equipment do you use—forklifts, conveyors, racking systems?</li>
          <li>Any sanitation requirements, food‑grade standards, or industry regulations?</li>
          <li>Do you need bins that nest, stack, drain, or lock?</li>
        </ul>
        <p class="text-sm text-gray-700 mt-4">Whether you’re in food processing, agriculture, warehousing, or cold‑chain logistics, we align solutions with your exact goals—not assumptions.</p>
        <p class="text-sm text-gray-700 mt-4">This is not a transaction—it’s a partnership. Our goal? Co‑create a solution that works in your real‑world environment, not just in a brochure.</p>
      </div>
      <div>
        <div class="w-full h-64 md:h-72 bg-gray-200 rounded"></div>
      </div>
    </div>

    <!-- Step 2 -->
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div class="order-2 md:order-1">
        <div class="w-full h-64 md:h-72 bg-gray-200 rounded"></div>
      </div>
      <div class="order-1 md:order-2">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Step 2: Design — We Engineer With You, Not Just For You</h3>
        <p class="text-sm text-gray-700 mb-4">Here’s where your idea begins to take shape—literally.</p>
        <p class="text-sm text-gray-700 mb-4">We use CAD to translate your needs into a manufacturable design. Your feedback is integral at every step.</p>
        <p class="text-xs text-gray-500 font-semibold mb-2">What goes into the design phase?</p>
        <ul class="text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Tailored CAD modeling based on your specs, handling systems, and load requirements</li>
          <li>Ergonomic features: grips, interlocking lids, secure bases, label holders</li>
          <li>Reinforcements for stacking strength and longevity</li>
          <li>Optional elements for drainage, venting, or anti‑slip textures</li>
          <li>Material selection informed by environment, regulatory requirements, or reuse goals</li>
        </ul>
        <p class="text-sm text-gray-700 mt-4">We factor in weight‑to‑strength ratios, durability targets, and cost‑efficiency—so you get a container that performs without wasted material or money.</p>
        <p class="text-sm text-gray-700 mt-4">Bottom line: Every curve, edge, and groove is designed for a reason—yours.</p>
      </div>
    </div>

    <!-- Step 3 -->
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Step 3: Prototype — See It. Feel It. Test It.</h3>
        <p class="text-sm text-gray-700 mb-4">No more crossing your fingers at the production stage.</p>
        <p class="text-sm text-gray-700 mb-4">Once the design is approved, we produce a tangible prototype—an early production‑quality version of your product. This allows you to test and validate the solution in real‑world conditions before committing to full‑scale manufacturing.</p>
        <p class="text-xs text-gray-500 font-semibold mb-2">Why prototyping matters:</p>
        <ul class="text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Visualize and feel your container before production begins</li>
          <li>Test fit and function on your floor: racking systems, pallet jacks, conveyors, cold storage, etc.</li>
          <li>Check ergonomics—how does it grip, stack, drain, or hold up?</li>
          <li>Provide immediate feedback to tweak size, wall thickness, handles, or texture</li>
        </ul>
        <p class="text-sm text-gray-700 mt-4">This stage is collaborative and crucial. You’re not just approving a drawing—you’re experiencing your product.</p>
      </div>
      <div>
        <div class="w-full h-64 md:h-72 bg-gray-200 rounded"></div>
      </div>
    </div>

    <!-- Step 4 -->
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div class="order-2 md:order-1">
        <div class="w-full h-64 md:h-72 bg-gray-200 rounded"></div>
      </div>
      <div class="order-1 md:order-2">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Step 4: Analysis — Let the Data Do the Talking</h3>
        <p class="text-sm text-gray-700 mb-4">We don’t gamble with quality. We validate it—with science.</p>
        <p class="text-sm text-gray-700 mb-4">Our engineering and QA teams subject your prototype to rigorous testing using simulation software and real‑world stress tests. We ensure your container is engineered to withstand your most demanding applications.</p>
        <p class="text-xs text-gray-500 font-semibold mb-2">What we test:</p>
        <ul class="text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Weight‑bearing performance, both static and dynamic</li>
          <li>Drop impact and durability in high‑friction and high‑handling environments</li>
          <li>Thermal resistance for extreme cold or heat (freezers, sun exposure, wash‑downs)</li>
          <li>UV protection for outdoor use or long‑term storage</li>
          <li>Chemical and material compatibility with food safety, agriculture, or industrial needs</li>
        </ul>
        <p class="text-sm text-gray-700 mt-4">If the container cracks, warps, slips, or degrades—it’s back to the drawing board. If it passes with flying colors? We’re almost ready to scale.</p>
        <p class="text-sm text-gray-700 mt-4">This step ensures your product won't just look good—it will perform brilliantly under pressure.</p>
      </div>
    </div>

    <!-- Step 5 -->
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Step 5: Initial Test — Field‑Proven Performance</h3>
        <p class="text-sm text-gray-700 mb-4">Once we’ve stress‑tested your prototype, it’s time for field testing—because real‑life always has surprises.</p>
        <p class="text-sm text-gray-700 mb-4">We manufacture a short‑run production batch, allowing you to trial the containers in the environments they were built for.</p>
        <p class="text-xs text-gray-500 font-semibold mb-2">What you get:</p>
        <ul class="text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>A mini production batch delivered to your site</li>
          <li>Real‑world testing with your team, machinery, inventory, and processes</li>
          <li>Insights into cleaning cycles, transport conditions, and stacking dynamics</li>
          <li>Opportunity to fine‑tune details before committing to full‑scale production</li>
        </ul>
        <p class="text-sm text-gray-700 mt-4">This step is the final safeguard. It ensures the solution not only meets our standards—but works seamlessly in your workflow.</p>
      </div>
      <div>
        <div class="w-full h-64 md:h-72 bg-gray-200 rounded"></div>
      </div>
    </div>

    <!-- Step 6 -->
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div class="order-2 md:order-1">
        <div class="w-full h-64 md:h-72 bg-gray-200 rounded"></div>
      </div>
      <div class="order-1 md:order-2">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Step 6: Sustainability — Designed to Last. Built to Recycle.</h3>
        <p class="text-sm text-gray-700 mb-4">At Pacific Injection Molding, sustainability isn’t just good PR—it’s good practice. We engineer containers that reduce waste, extend lifespan, and lower your environmental footprint.</p>
        <p class="text-xs text-gray-500 font-semibold mb-2">What makes our process eco‑conscious?</p>
        <ul class="text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Recyclable and reusable polymers chosen for strength and longevity</li>
          <li>Efficient mold designs that minimize material waste during production</li>
          <li>Smart part geometry that reduces weight without compromising strength</li>
          <li>Energy‑efficient machines that lower operational carbon emissions</li>
          <li>Local manufacturing in Canada to reduce transport emissions across North America</li>
        </ul>
        <p class="text-sm text-gray-700 mt-4">We’ll help you meet your corporate sustainability goals, comply with industry regulations, and build a supply chain that’s as responsible as it is reliable.</p>
      </div>
    </div>

    <!-- Step 7 -->
    <div class="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Step 7: Recycling — We Close the Loop</h3>
        <p class="text-sm text-gray-700 mb-4">Even the strongest containers reach the end of their lifecycle. We don’t want them in a landfill—we want them back.</p>
        <p class="text-sm text-gray-700 mb-4">Through our Reclaim &amp; Recycle program, we make it easy to dispose of your worn‑out totes, bins, or parts responsibly.</p>
        <p class="text-xs text-gray-500 font-semibold mb-2">What our recycling process includes:</p>
        <ul class="text-sm text-gray-700 space-y-1 list-disc pl-5">
          <li>Easy return or pickup of used containers</li>
          <li>Processing of high‑performance plastics for reuse</li>
          <li>Closed‑loop systems for high‑volume clients (think circular economy)</li>
          <li>Support for your internal ESG initiatives and reporting needs</li>
        </ul>
        <p class="text-sm text-gray-700 mt-4">We’re proud to offer a full‑circle solution—from design to disposal—and to help our clients do the same.</p>
      </div>
      <div>
        <div class="w-full h-64 md:h-72 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
</section>

<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <!-- Headline & Intro -->
    <div class="grid md:grid-cols-2 gap-10 items-center mb-12">
      <div>
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">One Process. Endless Possibilities.</h2>
        <p class="text-gray-700 mb-4">Our 7-step process isn’t just a checklist—it’s a quality commitment. It's how we’ve earned the trust of industry leaders in logistics, agriculture, cold storage, food production, and industrial warehousing.</p>
        <p class="text-gray-700 mb-4">Whether you're looking for:</p>
        <ul class="list-disc pl-5 text-gray-700 space-y-1">
          <li>A lightweight, nestable bin with ergonomic grip</li>
          <li>A heavy-duty industrial container that resists corrosion</li>
          <li>A food-grade stackable tote that drains and washes easily</li>
          <li>Or a completely unique plastic product made from scratch...</li>
        </ul>
        <p class="text-gray-800 font-semibold mt-4">We’ve got you covered—from idea to impact.</p>
      </div>
      <div>
        <div class="w-full h-72 bg-white rounded-xl shadow flex items-center justify-center">
          <div class="w-5/6 h-5/6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>

    <!-- Why Choose PIM -->
    <div class="mb-14">
      <h3 class="text-2xl md:text-3xl font-bold mb-6">Why Choose Pacific Injection Molding?</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow p-6">
          <h4 class="font-semibold text-lg mb-2">Built to Perform.</h4>
          <p class="text-gray-700 text-sm">Our containers are engineered to survive the harshest environments—over and over again. Think heavy loads, extreme temps, constant handling, and years of wear.</p>
          <div class="mt-4 w-full h-32 bg-gray-200 rounded"></div>
        </div>
        <div class="bg-white rounded-xl shadow p-6">
          <h4 class="font-semibold text-lg mb-2">Designed for Your Workflow.</h4>
          <p class="text-gray-700 text-sm">We design for your specs, not ours. From size and shape to features like interlocking bases and drain holes—we build to fit your processes perfectly.</p>
          <div class="mt-4 w-full h-32 bg-gray-200 rounded"></div>
        </div>
        <div class="bg-white rounded-xl shadow p-6">
          <h4 class="font-semibold text-lg mb-2">Industry-Tested. Customer-Trusted.</h4>
          <p class="text-gray-700 text-sm">From logistics and food processing to warehousing and agriculture, we’ve served hundreds of clients across North America—and they keep coming back.</p>
          <div class="mt-4 w-full h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>

    <!-- Made in Canada & Service -->
    <div class="grid md:grid-cols-2 gap-10 items-start mb-16">
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="font-semibold text-lg mb-2">Made in Canada. Distributed Across America and Mexico.</h4>
        <p class="text-gray-700 text-sm">With a full-service manufacturing facility in Canada and partnerships across the U.S., Canada, and Mexico, we’re proud to deliver local service with continental scale.</p>
        <div class="mt-4 w-full h-40 bg-gray-200 rounded"></div>
      </div>
      <div class="bg-white rounded-xl shadow p-6">
        <h4 class="font-semibold text-lg mb-2">Service That Sticks.</h4>
        <p class="text-gray-700 text-sm">We’re not just here to ship containers—we’re here to solve problems. Our customer service team is ranked #1 for a reason: we’re fast, responsive, and always ready to help.</p>
        <div class="mt-4 w-full h-40 bg-gray-200 rounded"></div>
      </div>
    </div>

    <!-- Who We Serve -->
    <div>
      <h3 class="text-2xl md:text-3xl font-bold mb-6">Who We Serve?</h3>
      <div class="grid lg:grid-cols-2 gap-10 items-start">
        <ul class="list-disc pl-5 text-gray-800 space-y-2">
          <li><b>Warehousing &amp; Logistics</b> – Stackable, space-saving containers built for forklift and racking systems</li>
          <li><b>Agriculture</b> – Food-safe, ventilated, and moisture-resistant bins for produce, grains, or live goods</li>
          <li><b>Manufacturing &amp; Industrial</b> – Rugged, reusable containers for parts, tools, and inventory</li>
          <li><b>Cold Storage</b> – Temperature-stable materials that perform in freezer environments</li>
          <li><b>Food &amp; Beverage</b> – Containers designed for hygiene, cleaning, and regulatory compliance</li>
        </ul>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="w-full h-36 bg-gray-200 rounded"></div>
          <div class="w-full h-36 bg-gray-200 rounded"></div>
          <div class="w-full h-36 bg-gray-200 rounded"></div>
          <div class="w-full h-36 bg-gray-200 rounded"></div>
        </div>
      </div>
      <p class="mt-6 text-gray-900 font-semibold">No matter your industry, if you need custom-molded containers—PIM delivers.</p>
    </div>
  </div>
</section>
