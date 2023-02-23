import vueGtag from 'vue-gtag'
 
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vueGtag, {
    property: {
      id: 'G-V9G9NNYXFY'
    }
  })
})