// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim:false
      },
      css: ['~/assets/css/main.css'],
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      app: {
        head: {
          charset: 'utf-16',
          // viewport: 'width=500, initial-scale=1',
          title: 'Mkay tech ',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
          ],

          
        }
      },
      
        // modules: [
        //   // Simple usage
        //   ['@nuxtjs/google-adsense', {
        //     id: 'ca-pub-5601341163967044'
        //   },
     
          
        // ],

        // // [ '@nuxtjs/google-analytics',{
        // //   googleAnalytics: {
        // //     id: 'G-V9G9NNYXFY'
        // //   }
        // // }]
        
    
   
      

 
})

