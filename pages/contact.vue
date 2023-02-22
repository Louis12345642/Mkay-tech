<template>
  <div>
    <br>
    <br>
    <!-- contact us  -->
   <main>
    <main class="flex justify-center mt-20 gap-10">
      <section>
        <div
          class="p-5 my-4 card-bg card-border rounded-lg shadow-md h-70 hover:bg-gray-200 block"
        >
          <h1
            class="text-lg font-sans font-bold mt-3 text-center uppercase mb-3"
          >
            contact us
          </h1>
          <form class="p-5 py-3">
            <label class="block my-3 font-mono font-bold" for="">Name</label>
            <input
              name="name"
              class="p-4 block my-3 input-width-c card-border rounded-md bg-slate-100 h-8"
              type="text"
              placeholder="enter name .."
            />
            <label class="block my-3 font-mono font-bold" for="">Email</label>
            <input
              name="email"
              class="p-4 block my-3 input-width-c card-border rounded-md bg-slate-100 h-8"
              type="email"
              placeholder="Enter email.."
            />
            <label class="font-sans font-bold" for="">Message</label>
            <textarea
              name="message"
              class=" p-4 block my-3 input-width-c bg-gray-100 card-border rounded-md active:border-purple-500"
              placeholder="message here .."
            ></textarea>
            <button
              type="submit"
              class="mt-4 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-500 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 w-36"
            >
              summit
            </button>
          </form>
        </div>
    
      </section>
    </main>
   </main>
  </div>
</template>

<script setup></script>

<style>
.form-width {
  width: 600px;
}
</style>
