<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
  .container-fluid
    div(v-for="i in data11")
        div(v-for="item in i.a")
          div(v-if="item.slug === namee" )
            div(v-for="j in item.translations" )
              div(v-if="j.languages_code.code.includes(lang)") 
                .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                    NuxtLink.lin(:to="localePath('/')" style="color:#fbc30c") {{$t('home')}} 
                    span(style="color:#fbc30c")  / 
                    NuxtLink.lin(:to="localePath('/products')" style="color:#fbc30c") {{$t('products')}}
                    span(style="color:#fbc30c")  / 
                    h6(style="display:inline-block") {{ j.title }}
                .contaai
                  .left
                    h2 {{ j.title }}
                    p {{ j.description }}
                  .right 
                    .image
                      img(:src="'https://board.rockal.org/assets/'+j.cover.id")

.div2(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" )
  .container-fluid
    div(v-for="i in data11")
      div(v-for="item in i.a")
        div(v-if="item.slug === namee" )
          div(v-for="j in item.translations" )
            div(v-if="j.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'") 
              .html(v-html="j.content")
.div2 
  .container-fluid 
      h2(style="text-align:center") {{t('related')}} {{t('products')}}
      div(v-for="i in data11")
          div(v-for="item in i.a")
            Swiper(
              v-if="item.slug === namee" 
              :slides-per-view="'auto'"
              :space-between="16"
              :navigation="true"
              :modules="modules"
              :breakpoints="{1080:{slidesPerView: '3'}, 992:{slidesPerView: '3'},640:{slidesPerView: '2'}, 400:{slidesPerView: '1.5'}}"  
              )
              SwiperSlide(v-for="j in item.category.products " )
                div(v-for="jj in j.translations" )
                  NuxtLink.lin(:to="localePath('/products/' + j.slug)")
                    .card(v-if="jj.languages_code.code.includes(lang)")
                      .image
                        img(loading="lazy" :src="'https://board.rockal.org/assets/' + jj.cover.id")
                      .cont()
                        h3 {{ jj.title }}
                        p {{ jj.description }}
</template>   

<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
import { Navigation, Pagination } from "swiper";
const modules = [Navigation, Pagination];
const lang = ref(locale);
const route = useRoute();
const namee = route.params.slug;
const { data: data2 } = await useAsyncGql({
  operation: "products",
  variables: { limit2: 1, a: true},
});

const data11 = data2.value?.categories.map((item) => item).flat();
</script>

<style lang="scss" scoped>
.div {
  padding-top: 12rem;
  padding-bottom: 3em;
  .container-fluid {
    color: white;
    .contaai {
      display: grid;
      grid-template-columns: 1.75fr 1.7fr;
      gap: 3em;
      align-items: center;
      
      @media (max-width:768px) {
        display: grid;
        grid-template-columns: 1fr;
      }
    }
  }
  @media(max-width:992px){
    padding-top:7em;
    .container-fluid {
      .image {
        height: 47vh;
        padding-bottom: 1em;
        position: relative;
  
      }
  }
}
}
.div2{
  padding-top: 5em;
  background:#f8f8f8;
  .card {
      
      margin-top: 2em;
      height: 59vh;
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
}
</style>
