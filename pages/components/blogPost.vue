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
                        :src= "post.x_featured_media_original"
                        alt=""
                    />
                </section>
                <!-- card header,excert and title text dev -->
                <section>
                    <div class="space-x-2 ml-5">
                        <NuxtLink
                          :to="categoryRoute(post.categories[0])"
                            class="px-2 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                            style="font-size: 10px"
                            >{{ post.x_categories }}</NuxtLink
                        >
                    </div>
                </section>

                <NuxtLink :to="`/blog/${post.id}`" class="px-5 py-4">
                    <h1 class="text-xl font-extrabold sm:text-2xl mb-3">
                        <!-- {{ short(post.title, 25) }} -->
                        {{post.title.rendered}}
                    </h1>
                    <p v-html="short(post.content.rendered,150)" class="text-gray-900 leading-7 text-md">
                     
                      
                    </p>
                    <p class="mt-4 mx-1 block text-gray-500 text-mono text-xs">
                     
                        <time
                            >{{
                                post.x_date
                            }}
                        </time>
                    
                    </p>
                    <!-- this is user and image and  name -->
                    <section class="flex justify-between">
                        <!-- user name -->
                        <div class="flex gap-3">
                            <NuxtLink
                                to="#"
                            >
                                <p
                                    class="hidden lg:mt-5 lg:align-bottom lg:text-sm lg:font-semibold lg:text-gray-500   "
                                >
                                {{ post.x_author}}
                                </p>
                            </NuxtLink>
                            <img
                                class="mt-4 ml-4 w-10 h-10 rounded-full round-border"
                                src=~/assets/images/tech.jpg
                                alt=""
                            />
                        </div>

                        <!-- readmore button -->
                        <div class="p-4 mt-2">
                            <NuxtLink to="#">
                                <button
                                    class="font-sans font-semibold btn-bg rounded-lg text-sm h-8"
                                >
                                    read more
                                </button></NuxtLink
                            >
                        </div>
                    </section>
                </NuxtLink>
            </div>
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

const categoryRoute =(id)=>{
  
    return `/category/${id}`
}



</script>

<style>

</style>