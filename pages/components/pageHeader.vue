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

        <head class="w-full fixed flex justify-between items-center p-5 md:p-5 card-bg">
          <NuxtLink to="/" @click="navBarOpen=false">
            <h1 class="text-lg font-bold font-mono md:text-xl lg:text-2xl mb-3">
              <span class="secondary-color">Mkay</span> Technologies
            </h1>
          </NuxtLink>

          <nav>
            <button @click="navBarOpen = !navBarOpen" class="cursor-pointer m-3 md:hidden">
              <div class="icon"></div>
              <div class="icon"></div>
              
              <div class="icon"></div>
             
            </button>

            <ul
              class="space-y-3 p-4 flex flex-col items-center min-h-full bg-blue-400 fixed right-0 left-0 font-sans open sans font-semibold transform translate-x-full md:relative md:flex md:space-y-0 md:space-x-6 md:p-0  md:default-bg md:translate-x-0 md:min-h-0 transition duration-100" :class="{'translate-x-0':!navBarOpen,'translate-x-full':navBarOpen}">
              <li class="card-border rounded-md pl-10 pr-10" >
                <NuxtLink to="/blog" class="text-xs font-bold uppercase text-white" @click="navBarOpen=!navBarOpen">blog</NuxtLink>
              </li  >
              <li>
                <a href="/signin.html" class="text-xs font-bold uppercase text-white"  @click="navBarOpen=!navBarOpen">sign in</a>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-xs font-bold usppercase text-white"  @click="navBarOpen=!navBarOpen">CONTACT</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="text-xs font-bold uppercase text-white"  @click="navBarOpen=!navBarOpen">About</NuxtLink>
              </li>
              <li></li>
              <li>
                <div class="mt-8 md:mt-0">
                  <a href="#"
                    class="transition-colors duration-300 bg-black hover:bg-blue-600 rounded-full text-xs font-semibold text-white uppercase py-3 px-5">Subscribe
                    for Updates</a>
                </div>
              </li>
            </ul>
          </nav>
        </head>
     
      </div>
</template>

<script setup>

let navBarOpen = ref(true)



</script>

<style></style>
