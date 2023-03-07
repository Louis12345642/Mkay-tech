<template>
  
    <div class="wrapper grid grid-cols-1 gap-1 lg:flex md:flex">
      <!-- image container -->

      <div class="m-2 lg:inner-card lg:gap-1">
        <img
          class="rounded-lg card-border lg:image-hieght lg:lg:h-60 lg:rounded-xl lg:m-1 md:w-50 md:h-60 md:m-5"
          :src="featured[0].x_featured_media_original"
          alt=""
        />
      </div>
      <!-- card header,excert and title text dev -->

      <article class="p-4 lg:m-2 lg:p-2">
        <NuxtLink :to=" `/blog/${featured[0].id}` " >
        <div>
          <div class="space-x-2 ml-1">
            <NuxtLink
              :to="categoryRoute(featured[0].categories[0])"
              class="px-3 py-1 my-4 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
              style="font-size: 10px">
              <!-- {{featured[0].post.category.rendered}}  -->
              {{ featured[0].x_categories}}
            </NuxtLink>
           
          </div>
        </div>

        <h1 class="text-3xl font-extrabold sm:text-2xl mb-3 mt-4 ">
     
   {{ short(featured[0].title.rendered,25) }}
    
        </h1>
        

        <div v-html="short(featured[0].excerpt.rendered,150)"  class="capitalize text-gray-900 leading-7 text-md"> </div>
    <!-- {{featured[0].excerpt.rendered}} -->
        <p class="mt-2 block text-gray-400 text-xs">
          <!-- Published <time>{{moment(post[0].created_at).startOf('hour').fromNow()}} </time> -->
          {{ featured[0].x_date }}
        </p>
        <section class="flex justify-between">
          <div class="flex gap-3">
            <p class=" media mt-10 align-bottom font-sans font-semibold text-gray-500">
              <!-- {{post[0].author.name}} -->
              {{ featured[0].x_author}}
            </p>
            <!-- </Link> -->
            <img
              class="media mt-7 w-12 h-12 rounded-full round-border"
              src="~/assets/images/tech.jpg"
              alt=""
            />
          </div>
          <div class="p-4 mt-6">
            <NuxtLink :to=" `/blog/${featured[0].id}` ">
              <button
                class=" media font-sans font-semibold btn-bg rounded-lg text-sm h-8"
              >
                read more
              </button></NuxtLink
            >
          </div>
        </section>
      </NuxtLink>
      </article>

    </div>

</template>

<script setup>
defineProps({
  featured:Array
})

const short = (title, limit) => {
    if (title.length > limit) title = title.substr(0, limit) + "...";
    return title;
};

const categoryRoute =(id)=>{
  
  return `/category/${id}`
}


</script>

<style>
</style>
