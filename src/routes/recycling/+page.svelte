<script lang="ts">
    import hero from '$lib/assets/hero.webp';
</script>

<section class="relative h-[80vh] bg-cover bg-center flex items-center" style="background-image: url('{hero}')">
    <div class="absolute inset-0  bg-opacity-50"></div>
    <div class="container mx-auto px-4">
      <div class="max-w-2xl text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">
          Recycling
        </h1>
      </div>
    </div>
  </section>

<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-3 gap-12 items-center">
            <!-- Silhouette Graphic -->
            <div class="lg:col-span-1">
                <div class="w-full h-96 bg-gray-800 rounded-lg flex items-end justify-center">
                    <!-- Two people silhouette -->
                    <div class="flex items-end space-x-2 mb-8">
                        <div class="w-16 h-32 bg-gray-700 rounded-t-full"></div>
                        <div class="w-16 h-36 bg-gray-700 rounded-t-full relative">
                            <div class="absolute -left-2 top-8 w-8 h-16 bg-gray-700 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Text Content -->
            <div class="lg:col-span-2">
                <p class="text-[#426E32] text-sm font-medium mb-2">Who We Are</p>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Transforming Waste into <br />Opportunities
                </h2>
                <p class="text-gray-600 text-lg mb-8">
                    Where we are dedicated to revolutionizing the way waste is managed, with a firm commitment to environmental sustainability and community well-being.
                </p>
                
                <!-- Vision Section -->
                <div class="mb-6">
                    <div class="flex items-start space-x-3">
                        <div class="w-5 h-5 bg-[#426E32] rounded-full flex items-center justify-center mt-1">
                            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-bold text-[#426E32] text-lg mb-2">Our Vision</h3>
                            <p class="text-gray-600">
                                We envision a future where every act of waste disposal contributes to environmental sustainability, resource conservation, and community well-being.
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Mission Section -->
                <div class="mb-8">
                    <div class="flex items-start space-x-3">
                        <div class="w-5 h-5 bg-[#426E32] rounded-full flex items-center justify-center mt-1">
                            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-bold text-[#426E32] text-lg mb-2">Our Mission</h3>
                            <p class="text-gray-600">
                                Revolutionize the waste disposal industry by providing sustainable, efficient, and cost-effective solutions that minimize environmental impact and maximize resource recovery.
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- About Us Button -->
                <a href="/aboutus" class="inline-block bg-[#426E32] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#365a2a] transition-colors">
                    About Us
                </a>
            </div>
        </div>
    </div>
</section>



<section class="bg-[#426E32] py-16">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-10 items-start">
            <div>
                <p class="text-white/80 text-sm mb-2">How It Works</p>
                <h2 class="text-white text-3xl md:text-4xl font-bold leading-tight">
                    Tracing the Steps of <br class="hidden md:block" />
                    Waste Disposal
                </h2>
            </div>
            <div class="text-white/90 text-sm md:text-base">
                <p>
                    Waste disposal is a critical aspect of modern society, encompassing the processes and
                    practices involved in managing and disposing of various types of waste materials generated
                    by human activities.
                </p>
            </div>
        </div>

        <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div class="bg-white/95 rounded-xl shadow-md p-6">
                <div class="w-10 h-10 rounded-full bg-[#426E32] text-white flex items-center justify-center mb-4">1</div>
                <h3 class="font-semibold text-gray-900">Collect</h3>
                <p class="text-sm text-gray-600 mt-2">
                    Collected from homes, businesses, and industrial sites using various methods such as
                    curbside pickup and containers.
                </p>
            </div>
            <div class="bg-white/95 rounded-xl shadow-md p-6">
                <div class="w-10 h-10 rounded-full bg-[#426E32] text-white flex items-center justify-center mb-4">2</div>
                <h3 class="font-semibold text-gray-900">Sorting & Segregation</h3>
                <p class="text-sm text-gray-600 mt-2">
                    Waste is sorted and segregated to separate recyclable materials from non‑recyclable waste.
                </p>
            </div>
            <div class="bg-white/95 rounded-xl shadow-md p-6">
                <div class="w-10 h-10 rounded-full bg-[#426E32] text-white flex items-center justify-center mb-4">3</div>
                <h3 class="font-semibold text-gray-900">Treatment & Processing</h3>
                <p class="text-sm text-gray-600 mt-2">
                    Treatment methods may include composting, incineration, chemical treatment, and mechanical
                    recycling.
                </p>
            </div>
            <div class="bg-white/95 rounded-xl shadow-md p-6">
                <div class="w-10 h-10 rounded-full bg-[#426E32] text-white flex items-center justify-center mb-4">4</div>
                <h3 class="font-semibold text-gray-900">Disposal</h3>
                <p class="text-sm text-gray-600 mt-2">
                    Residual waste that cannot be recycled or reused is disposed of in landfills or
                    incinerators.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <p class="text-center text-[#426E32] text-sm font-medium mb-3">Our Services</p>
        <h2 class="text-center text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
            Turning Trash into
            <br class="md:hidden" />
            <span class="block md:inline">Treasure</span>
        </h2>
        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Effective waste disposal is essential for maintaining cleanliness, hygiene, and
            environmental sustainability in homes, businesses, and communities.
        </p>

        <div class="grid md:grid-cols-2 gap-10 items-end">
            <!-- Card 1 -->
            <div class="rounded-xl overflow-hidden shadow-md">
                <div class="h-72 bg-gray-600"></div>
                <div class="bg-white mx-4 -mt-10 relative z-10 rounded-xl shadow p-6">
                    <h3 class="text-[#426E32] font-semibold text-lg mb-2">Residential Waste Collection</h3>
                    <p class="text-gray-600 text-sm">
                        Curbside services are a fundamental aspect of municipal waste management systems. Waste
                        disposal companies collect household trash, recyclables, and yard waste.
                    </p>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="rounded-xl overflow-hidden shadow-md">
                <div class="h-72 bg-gray-600"></div>
                <div class="bg-white mx-4 -mt-10 relative z-10 rounded-xl shadow p-6">
                    <h3 class="text-[#426E32] font-semibold text-lg mb-2">Commercial Dumpster Rental & Collection</h3>
                    <p class="text-gray-600 text-sm">
                        Waste disposal companies manage the collection and transportation of commercial waste,
                        allowing businesses to focus on their core operations while complying with waste regulations.
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-10 flex justify-center">
            <a href="/products" class="bg-[#426E32] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#365a2a] transition-colors">
                All Services
            </a>
        </div>
    </div>
</section>

<section class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
            <!-- Left image with overlay stat card -->
            <div class="relative">
                <div class="h-80 md:h-96 bg-gray-600 rounded-xl"></div>
                <div class="absolute -bottom-6 left-8 bg-white rounded-xl shadow-md px-8 py-6">
                    <div class="flex items-end space-x-2">
                        <span class="text-5xl font-bold text-[#426E32]">50</span>
                        <span class="text-3xl font-bold text-[#426E32]">+</span>
                    </div>
                    <p class="text-gray-700 leading-tight mt-2">
                        Successful<br/>Projects
                    </p>
                </div>
            </div>

            <!-- Right content -->
            <div>
                <p class="text-[#426E32] text-sm font-medium mb-2">Why Choose Us</p>
                <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    Safe & Reliable Curbside
                </h2>
                <p class="text-gray-600 mb-8">
                    Effective waste disposal is essential for maintaining cleanliness, hygiene, and environmental
                    sustainability in homes, businesses, and communities.
                </p>

                <!-- Progress items -->
                <div class="space-y-6">
                    <div>
                        <div class="flex justify-between text-sm text-gray-800 mb-1">
                            <span>Quality Control System</span>
                            <span class="text-[#426E32] font-semibold">80%</span>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-[#426E32]" style="width:80%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between text-sm text-gray-800 mb-1">
                            <span>Waste Management</span>
                            <span class="text-[#426E32] font-semibold">90%</span>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-[#426E32]" style="width:90%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between text-sm text-gray-800 mb-1">
                            <span>Problem Solving</span>
                            <span class="text-[#426E32] font-semibold">80%</span>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-[#426E32]" style="width:80%"></div>
                        </div>
                    </div>
                </div>

                <!-- Call badge -->
                <div class="mt-8 flex items-start space-x-3">
                    <div class="w-12 h-12 rounded-lg bg-[#426E32] text-white flex items-center justify-center">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-2.047a1.125 1.125 0 00-.852-1.09l-3.348-.837a1.125 1.125 0 00-1.173.417l-.97 1.293a.75.75 0 01-.823.279 12.035 12.035 0 01-7.143-7.143.75.75 0 01.279-.823l1.293-.97a1.125 1.125 0 00.417-1.173L6.637 3.352a1.125 1.125 0 00-1.09-.852H3.5A1.25 1.25 0 002.25 3.75v3z" />
                        </svg>
                    </div>
                    <div>
                        <p class="text-gray-900 font-semibold leading-tight">Call Us</p>
                        <p class="text-gray-600 leading-tight">Anytime</p>
                        <p class="text-gray-900">0761-8523-398</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>