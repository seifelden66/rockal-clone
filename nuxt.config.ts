// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css", "/assets/styles/main.scss"],
    plugins: [{ src: '~/plugins/aos.ts', mode: 'client' },],
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" }
            ]
        },
        
    },
    runtimeConfig: {
        public: {
            GQL_HOST: 'https://board.rockal.org/graphql',
            defaultLocale: 'en',
        }
    },
    modules: [
        'nuxt-graphql-client', '@nuxtjs/i18n', 'nuxt-swiper'
    ],
    i18n: {
        locales: [
            { code: 'ar', iso: 'ar', file: 'ar.ts', dir: 'rtl' },
            { code: 'en', iso: 'en-US', file: 'en.ts', dir: 'ltr' },
          ],
          
          lazy: true,
          langDir: 'lang/',
      
    },
    'graphql-client':{
        watch: true,
        autoImport: true,
        functionPrefix: 'Gql',
        documentPaths: ['./'],
        preferGETQueries: false
    }


})
