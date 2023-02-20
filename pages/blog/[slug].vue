<template>

  <div>
    <post-details :post="Posts"/>
  </div>
  
</template>

<script setup>
import postDetails from '../components/postDetails.vue';

// get the slug of the post
let route= useRoute()

let slug =route.params.slug

//make request to the server
let uri = `https://dev-louis-dev.pantheonsite.io/wp-json/wp/v2/posts/${slug}?_embed`


//geting the featured data from the api 
let {data:Posts} = await useFetch(uri);

//passing  the information as props 


</script>

<style>

</style>