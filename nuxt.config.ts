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
          title: 'Kola Soft ',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: ' kolasoft Team kola is a team of coders, developers and technology engineers, who love working with code.' }
          ],

          
        }
      },
      
})

