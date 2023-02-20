<template>
  <section>
    <div>
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
          <!-- nav icons manualy made  -->
          <section class="lg:hidden cursor-pointer">
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
          </section>
        </div>
      </section>
    </nav>
    </div>
    <slot/>
    <div>
        <footer
      class="card-bg card-border rounded-xl text-center py-16 px-10 mt-16 mx-8 mb-10 shadow-md hover:bg-gray-100"
    >
      <img
        src="~assets/images/logo.png"
        alt=""
        class="mx-auto rounded-full logo-border"
      />
      <h5 class="text-3xl">Stay in touch with the latest posts</h5>
      <p class="text-sm">Promise to keep the inbox clean. No bugs.</p>

      <div class="mt-10">
        <div class="relative inline-block mx-auto lg:bg-gray-200 rounded-full">
          <form method="POST" action="#" class="lg:flex text-sm">
            <div class="lg:py-3 lg:px-5 flex items-center">
              <label for="email" class="hidden lg:inline-block">
                <img
                  src="~/assets/icons/mailbox-icon.svg"
                  alt="mailbox letter"
                />
              </label>
        
              <input
                id="email"
                type="text"
                placeholder="Your email address"
                class="lg:bg-transparent pl-4 focus-within:outline-none card-border"
              />
            </div>

            <button
              type="submit"
              class="transition-colors duration-300 bg-blue-500 hover:bg-blue-600 mt-4 lg:mt-0 lg:ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-8"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
    </div>
  </section>
</template>

<script setup>

</script>

<style>

/* colors an theme */
:root{
    --primaryColor:#E0E0E0;
    --cardBackground:#f3e9e9;
    --secondaryColor:#3680C5;
    --borderColor:#e4e0e0;
}

*{
    margin:0 ;
    padding: 0;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
.container{
    padding: 30px;
}
.icon{
    width: 30px;
    height: 3px;
    background:var(--secondaryColor);
    border-radius: 2px;
    margin-top: 4px;

}
.nav-bg{
    background-color: var(--borderColor);
    margin-top:0;
   position: relative;

}
.secondary-color{
    color: var(--secondaryColor);
}
.secondary-color-bg{
    background-color: var(--secondaryColor);
}
.round-border{
    border: 2px var(--secondaryColor) solid;
}
.card-border{
    border: 0.1px var(--borderColor) solid;
}
.card-bg{
    background-color:var( --cardBackground) ;

}
.btn-bg{
    background-color: #E0E0E0;
    width:100px
}
.category-drop{
    border-radius: 20px;
}
p{
    font-family: Open Sans, sans-serif;
}
.logo-border{
    margin-bottom: 20px;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    border: 4px solid var(--secondaryColor);
}
.trending-image{
    width: 8px;

}
.input-width{
    width:100%;
}
.input-width-c{
    width:300px;
}
.max-heigth{
    max-height: 530px;
}
.title-width{
    width:100%;
}

</style>