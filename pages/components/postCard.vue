<template>
    <section
          class="card-bg card-border rounded-md lg:col-span-2 hover:bg-gray-200 cursor-pointer shadow-md md:col-span-2"
        >
          <!-- this the wrapper for all content -->
          <div class="wrapper grid grid-cols-1 gap-3">
            <!-- image container -->

            <section class="m-4">
              <img
                class="rounded-lg card-border card-h"
                src= "~/assets/images/tech.jpg"
                alt=""
              />
            </section>
            <!-- card header,excert and title text dev -->
            <section>

                    <div class="space-x-2 ml-5">
                    <NuxtLink to="/category"
                        class="px-2 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                        style="font-size: 10px">{{ post._embedded['wp:term'][0][0].name }}</NuxtLink>

                </div>

            </section>

            <article class="px-5 py-4">
                <h1 class="text-2xl font-extrabold sm:text-2xl mb-3 ">
       {{post.title.rendered}}
 

      </h1>
              <p v-html="post.content.rendered" class="text-gray-900 leading-7 text-md">
       
             
              </p>
              <p class="mt-4 mx-1 block text-gray-400 text-xs">
                Published 2 hours ago
                <!-- Published <time>{{moment(post[1].created_at).startOf('hour').fromNow()}} </time> -->
              </p>
              <!-- this is user and image and  name -->
              <section class="flex justify-between">
                <!-- user name -->
                <div class="flex gap-3">
                
                <p
                    class="mt-5 align-bottom text-sm font-semibold text-gray-500"
                  >
                 {{ post._embedded.author[0].name}}
               
                  </p>
                  <img
                    class="mt-3 ml-4 w-10 h-10 rounded-full round-border "
                    src="~/assets/images/side2.jpg"
                    alt=""
                  />
                </div>
                <!-- readmore button -->
                <div class="p-4 mt-2">
                 <NuxtLink to="/post"> <button
                    class="font-sans font-semibold btn-bg rounded-lg text-sm h-8"
                  >
                    read more
                  </button></NuxtLink>
                </div>
              </section>
            </article>
          </div>
        </section>
</template>

<script setup>

 defineProps({
  post:Object
})

</script>

<style>

</style>