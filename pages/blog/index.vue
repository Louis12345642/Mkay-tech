<template>
  <div>

    <h1 class=" mt-20  text-center  mb-20 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Letast blog </span> post.</h1>


    <section   class="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-6 gap-8 m-10">
      

      
      <blogPost v-for="featured in featuredPosts" :key="featured.id" :post="featured"/>
    
    </section>
  </div>
</template>

<script setup>
import blogPost from '../components/blogPost.vue';

let uri = "/api/blog";

//geting the featured data from the api
let { data: featuredPosts } = await useFetch(uri);

</script>

<style></style>
