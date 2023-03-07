<template><!-- <div>
        <nav class="card-bg w-full h-22 border-b-slate-100">
      <section class="container">
        <div class="flex justify-between">
        
            <NuxtLink to="/">
            <h1 class="text-lg font-bold font-mono md:text-xl lg:text-2xl">
                <span class="secondary-color">Mkay</span> Technologies
              </h1></NuxtLink>
           
          <ul
            class="hidden lg:flex lg:gap-10 font-sans open sans font-semibold"
          >
            <li>
              <NuxtLink to="/blog" class="text-xs font-bold uppercase"
                >blog</NuxtLink
              >
            </li>
            <li>
              <a href="/signin.html" class="text-xs font-bold uppercase"
                >sign in</a
              >
            </li>
            <li>
              <NuxtLink to="/contact" class="text-xs font-bold usppercase"
                >CONTACT</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/about" class="text-xs font-bold uppercase"
                >About</NuxtLink
              >
            </li>
            <li></li>
            <li>
              <div class="mt-8 md:mt-0">
             
                <a
                  href="#"
                  class="transition-colors duration-300 bg-blue-500 hover:bg-blue-600 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5"
                  >Subscribe for Updates</a
                >
              </div>
            </li>
          </ul>
          nav icons manualy made  
          <section class="lg:hidden cursor-pointer">
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
          </section>
        </div>
      </section>
    </nav>
    </div> -->
      <div>

       
<nav class=" card-bg px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
  <div class="container flex flex-wrap items-center justify-between  h-7">
    <NuxtLink to="/">
            <h1 class="text-lg font-bold font-mono md:text-xl lg:text-2xl">
                <span class="secondary-color">Kola</span>Soft
              </h1></NuxtLink>
           

  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      
    <ul
            class="hidden lg:flex lg:gap-10 font-sans open sans font-semibold"
          >
            <li>
              <NuxtLink to="/blog" class="text-xs font-bold uppercase"
                >blog</NuxtLink
              >
            </li>
            <li>
              <a href="/signin.html" class="text-xs font-bold uppercase"
                >sign in</a
              >
            </li>
            <li>
              <NuxtLink to="/contact" class="text-xs font-bold usppercase"
                >CONTACT</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/about" class="text-xs font-bold uppercase"
                >About</NuxtLink
              >
            </li>
            <li></li>
            <li>
              <div class="mt-8 md:mt-0">
             
                <a
                  href="#"
                  class="transition-colors duration-300 bg-blue-500 hover:bg-blue-600 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5"
                  >Subscribe for Updates</a
                >
              </div>
            </li>
          </ul>
          
         
          
  </div>


  <section class="lg:hidden cursor-pointer">
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
          </section>
  </div>
  
</nav>

     
      </div>
</template>

<script setup>

// let navBarOpen = ref(true)

let navBarOpen = ref(false);
    const toggleNav = () => (navBarOpen.value = !navBarOpen.value);
  



</script>

<style></style>
