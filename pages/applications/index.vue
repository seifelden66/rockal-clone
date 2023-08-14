<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'ltr' : 'rtl'")
    .container-fluid
        .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
            NuxtLink.lin(:to="localePath('/')" style="color:#fbc30c") {{$t('home')}}     
            span(style="color:white")  / 
            p(style="display:inline-block; color:white") {{$t('applications')}}
        .image
            img(src="/applications.jpg")
            .tex
              .title(style="text-align:center; font-weight:700")
                h2(style="font-weight:700;") {{$t('Explore the various applications of our products')}}  

.div3(style="background:#f8f8f8;")
    .container-fluid(:dir="$i18n.locale === 'ar' ? 'ltr' : 'rtl'")
      .cards
          div(v-for="i in data.applications" )
              div(v-for="item in i.translations" )
                nuxt-link(:to="localePath('/applications/' + i.slug)").lin.card(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align:right;':'text-align:left;'" data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400")
                  .image(v-if="item.cover")
                    img(loading="lazy" :src="'https://board.rockal.org/assets/' + item.cover.id")
                  .cont
                    h5 {{ item.title }}
                    p {{ item.description }}
      .btn
        .smoothBox(@click="lim = lim + 10") {{$t('show')}}
.div4(style="background:#f8f8f8;") 
  .container-fluid 
    .cards(data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400")
      .card(:style="$i18n.locale === 'ar' ? 'text-align:right; align-items: flex-end;' : 'text-align:left; align-items: flex-start;'")
        h2 {{$t('store')}}
        p {{$t('Order Our Products Directly')}}
        .botn(style="float:right" )
          nuxt-link.lin(:to="localePath('/store')" style="color:#ffff").smoothBox {{$t('Shop Now')}}
        
        
      .card(:style="$i18n.locale === 'ar' ? 'text-align:right; align-items: flex-end;' : 'text-align:left; align-items: flex-start;'")
        h2 {{$t('Inquiries')}}
        p {{$t('Do You Have A Project?')}}
        .botn(style="float:right" )
          nuxt-link.lin(:to="localePath('/contact')" style="color:#ffff").smoothBox {{$t('contact')}}
</template>


<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
import { Navigation, Pagination } from "swiper";

const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);
const modules = [Navigation, Pagination];
const lim = ref(6)
const { data } = await useAsyncGql({
  operation: "productsapps",
  variables: { limit:lim },
});
</script>

<style lang="scss" scoped>
.div {
    padding-top: 12em;
    padding-bottom: 1em;
    margin-bottom: 0;
  
    .container-fluid {
      .image {
        height: 67vh;
        padding-bottom: 1em;
        position: relative;
        img {
          filter: brightness(65%);
        }
        .tex {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate((-50%, -90%));
          color: white;
          @media (max-width:992px) {
            width: 60%;
          }
          .title {
            margin-bottom: 0.5em;
          }
        }
      }
    }
    @media (max-width: 992px) {
      padding-top: 7em;
      .container-fluid {
        .image {
          height: 37vh;
          padding-bottom: 1em;
          position: relative;
        }
      }
    }
  }
.div3{
  padding-top: 3em;
  .container-fluid{
   
    .btn{
      margin-top: 5px;
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
  }
    .cards{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1em;
      .card {
      
        margin-top: 2em;
        height: 55vh;
        .image {      
          height: 26vh;
          border-bottom: .6px solid rgb(172, 172, 172);
          
        }
        .cont {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: .75em;
        }
      }
      @media (max-width:992px) {
        grid-template-columns: 1fr 1fr;
        .card{
          height: 50vh;
          overflow: hidden;
        }
      }
      @media (max-width:600px) {
        grid-template-columns: 1fr;
      }
    }
  }
}
.div4{
  padding-top: 6em;
  .container-fluid{
    .cards{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2em;
      .card{
        display: flex;
        padding: 1em;
        gap: .75em;
        .botn{
          .smoothBox{
            margin: 0 auto;
          }
        }
       
      }
    }
  }
}
</style>