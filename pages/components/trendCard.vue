<template>
    <section
            class="wrapper grid grid-cols-2 gap-5 mt-14 hover:bg-gray-200 cursor-pointer card-border m-4 rounded-lg"
          >
            <!-- image container -->

            <div class="m-2">
              <img
                class="rounded-lg card-border"
            
                alt=""
                :src="post.x_featured_media_original"
              />
            </div>


           <NuxtLink :to="`/blog/${post.id}`">
            <article class="mt-4 ">
              <p class="font-semibold leading-6 mb-4 text-sm">
            {{ short(post.title.rendered,40) }}
              </p>
              <p class="mt-2 mb-2 block text-gray-400 text-xs">
        
              <time>{{post.x_date}} </time>
              </p>
            </article>
        </NuxtLink>

          </section>
</template>

<script setup>


defineProps({
  post:Object
})

// this function shorten the text size for easy visivilitty
const short = (title, limit) => {
    if (title.length > limit) title = title.substr(0, limit) + "...";
    return title;
};


</script>

<style>

</style>