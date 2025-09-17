<script>
  import logo from '$lib/assets/logo.svg';
</script>

<footer class="bg-[#426E32] text-white pt-16">
  <div class="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-16">
    
    <!-- About Us -->
    <div>
      <img src={logo} alt="PIM Logo" class="h-14 mb-6 grayscale-100 invert" />
      <h3 class="text-xl font-semibold mb-4">About Us</h3>
      <p class="text-base leading-relaxed">
        Welcome to our home security camera website! Our mission is to.
      </p>
      <div class="bg-gray-200 h-28 w-full flex items-center justify-center mt-6">
        <span class="text-[#426E32] text-3xl">📍</span>
      </div>
    </div>

    <!-- About Store -->
    <div>
      <h3 class="text-xl font-semibold mb-6">About Store</h3>
      <div class="flex items-center gap-4 mb-6">
        <div class="bg-white text-[#426E32] p-4 rounded-full text-2xl">
          ☎️
        </div>
        <div>
          <p class="text-sm">Have Question? Call Us 24/7</p>
          <p class="text-xl font-bold">+258 3692 2569</p>
        </div>
      </div>
      <p class="text-base mb-2">Monday - Friday: <span class="font-bold">8:00am - 6:00pm</span></p>
      <p class="text-base mb-2">Saturday: <span class="font-bold">8:00am - 6:00pm</span></p>
      <p class="text-base">Sunday: <span class="font-bold">Service Close</span></p>
    </div>

    <!-- Quick Links -->
    <div>
      <h3 class="text-xl font-semibold mb-6">Quick Links</h3>
      <ul class="space-y-3 text-base">
        <li class="flex items-center gap-2"><a href="/aboutus" class="hover:underline">› About Us</a></li>
        <li class="flex items-center gap-2"><a href="/products" class="hover:underline">› Products</a></li>
        <li class="flex items-center gap-2"><a href="/recycling" class="hover:underline">› Recycling</a></li>
        <li class="flex items-center gap-2"><a href="/sustainability" class="hover:underline">› Sustainability</a></li>
        <li class="flex items-center gap-2"><a href="/contactus" class="hover:underline">› Contact Us</a></li>
      </ul>
    </div>

    <!-- Latest News -->
    <div>
      <h3 class="text-xl font-semibold mb-6">Latest News</h3>
      <div class="flex gap-5 mb-6">
        <img src="/" alt="News 1" class="w-20 h-20 object-cover" />
        <p class="text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
      </div>
      <div class="flex gap-5">
        <img src="/" alt="News 2" class="w-20 h-20 object-cover" />
        <p class="text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
      </div>
    </div>

  </div>

  <!-- Divider -->
  <div class="border-t border-black my-3 " ></div>

  <!-- Bottom Section -->
  <div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-base text-gray-200 text-center align-middle ">
    <p>© 2023 WeDesignTech. All Rights Reserved.</p>
    <div class="flex gap-10 mt-6 md:mt-0">
      <a href="/terms" class="hover:underline">Terms And Condition</a>
      <a href="/privacy" class="hover:underline">Privacy Policy</a>
    </div>
  </div>
</footer>
