<template>
  <main>
    <NuxtLoadingIndicator/>
    <br>
    <div>
    <h1 class=" mt-20  text-center  mb-20 text-3xl font-extrabold text-gray-900  md:text-4xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Letast blog </span>From {{ posts[0].x_categories}}</h1>
    
        <section   class="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-8 m-10">
      <blogPost v-for="p in posts" :key="p.id" :post="p"/>
    </section>




  </div>
  </main>
</template>

<script setup>
import blogPost from '../components/blogPost.vue';

//get the id that is the category id

let route = useRoute()

const id = route.params.id



//the request uri
const uri =`https://dev-louis-dev.pantheonsite.io/wp-json/wp/v2/posts?categories=${id}`

//make request to server fro the post with that id

let {data:posts} = await useFetch(uri)

//pass it as props to the component  above

</script>

<style>

</style>