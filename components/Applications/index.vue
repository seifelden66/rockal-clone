<template lang="pug">
.div
  .container-fluid(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" )
      .navBar 
          .left 
              h2 {{$t('applications')}}
          .right 
            nuxt-link(:to="localePath('/applications/')").lin.smoothBox 
                  h6 browse all categouries 
      Swiper.cards(
          :slides-per-view="'auto'"
            :space-between="6"
            :navigation="true"
            :modules="modules"
            :breakpoints="{1080:{slidesPerView: '3'}, 992:{slidesPerView: '3'},640:{slidesPerView: '2'}}"
      )
          SwiperSlide(v-for="i in data.applications")
              div(v-for="item in i.translations")
                nuxt-link(:to="localePath('/applications/' + i.slug)").lin.card(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                      .image
                          img(loading="lazy" :src="'https://board.rockal.org/assets/'+ item.cover.id")
                      .bottom
                          h5 {{ item.title }}
                          p {{ item.description}}
</template>

<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
import { Navigation, Pagination } from "swiper";

const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);
const modules = [Navigation, Pagination];

const { data } = await useAsyncGql({
  operation: "productsapps",
});
</script>

<style lang="scss" scoped>
.div{
  background: #f8f8f8;
  padding-top: 7em;
  .container-fluid {
    padding-bottom: 1em;
    .navBar {
      margin-bottom: 2.5em;
  
      display: flex;
      justify-content: space-between;
      .right {
        .smoothBox {
          background: white;
          color: black;
          border: 1px black solid;
        }
      }
    }
   .cards{
      .card {
          
          height: 55vh;
          
          .image {
            height: 30vh;
          }
          .bottom {
            margin-top: 5px;
            align-items: center;
            padding: .5em;
            p {
              font-size: 14px;
            }
          }
        }
   }
  }
}

  @media (max-width: 992px) {
   .div{
    padding-top: 5em;
    .container-fluid{
      .navBar {
        display: flex;
        justify-content: center !important;
        text-align: center !important;
        .right {
          display: none !important;
        }
      }
    }
    }
   }
</style>
