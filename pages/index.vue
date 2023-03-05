<template>
<main>
  <br>
  <div>
    <NuxtLoadingIndicator/>
    <section
      class=" -z-30 relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-image bg-cover bg-center bg-no-repeat">
      <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25">
      </div>

      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
   Hello Techies

            <strong class="block font-extrabold text-blue-700">
             KolaSoft
            </strong>
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
        Welcome to kolasoft technologies ,it is Louis great to have you! Here are bunch of programming tuturial that will get your coding skills enhanced
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <NuxtLink to="/blog"
              class="mt-4 mx-4 px-4 py-2  bg-purple-500 text-sm text-white font-semibold rounded-full border border-purple-500 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 w-36">
            Get started
            </NuxtLink>

            <NuxtLink to="/about"
              class="mt-4 mx-4 px-4 py-2 text-w text-sm text-purple-600 font-semibold rounded-full border border-purple-500 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 w-36">
            learn more
            </NuxtLink>
          </div>
        </div>
      </div>

    </section>



    <main>
      <!-- featured section wrapper -->
      <section class="grid grid-cols-1 lg:grid lg:grid-cols-6 gap-8 m-10 md:grid md:grid-cols-4">
        <!-- featured card -->
        <section
          class="card-bg card-border rounded-md lg:col-span-4 hover:bg-gray-200 cursor-pointer shadow-md md:col-span-4">
          <!-- card items alignment -->
          <featured-card :featured="featuredPosts"/>
        </section>

        <!-- end of one card -->
        <!-- Trending -->
        <section class="lg:card-bg card-border rounded-md card-bg lg:col-span-2 lg:row-span-2 shadow-md md:col-span-2">

          <h1 class="font-bold font-mono text-center mt-6 mb-4 text-3xl">
            Trending
          </h1>
          <trend-card v-for="trendingPost in featuredPosts" :key="trendingPost.id" :post="trendingPost"  />
        

        </section>
        <!-- this is a card section -->

        

        

        <blogPost :post="featuredPosts[1]"/>
        <blogPost :post="featuredPosts[2]"/>
        <NuxtLoadingIndicator />
       

      </section>
    </main>

  </div>
</main>
</template>
<script setup>
import blogPost from './components/blogPost.vue';
import featuredCard from './components/featuredCard.vue';
import postCard from './components/postCard.vue';
import trendCard from './components/trendCard.vue';

//url for the api

let uri = "/api/featured"

//geting the featured data from the api 
let {data:featuredPosts} = await useFetch(uri);

</script>
<style scoped>
.bg-image{
  background-image: url("../assets/images/pexels-fauxels-3183132.jpg");
}

</style>