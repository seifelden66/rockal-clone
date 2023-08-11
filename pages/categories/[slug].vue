<template lang="pug">
.div(style="paddin-bottom:1em")
    .container-fluid
        div(v-for="i in data11")
            div(v-if="i.slug === namee")
                div(v-for="item in i.translations")
                  div(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                    .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
                      NuxtLink.lin(:to="localePath('/')" style="color:#fbc30c") {{$t('home')}} 
                      span(style="color:#fbc30c")  / 
                      NuxtLink.lin(:to="localePath('/categories')" style="color:#fbc30c") {{$t('categories')}}
                      span(style="color:#fbc30c")  / 
                      h6(style="display:inline-block; color:white") {{ item.title }}
                    .image
                        img(:src="'https://board.rockal.org/assets/' + item.cover.id")
                        .tex(:style="$i18n.locale === 'ar' ? 'right:1em': 'left: 1em'")
                            .title
                                h3 {{ item.title }}
                            p {{ item.description }}
.div3(style="background:#f8f8f8")
    .container-fluid 
        div(v-for="i in data11")
            div(v-if="i.slug === namee")
                div(v-for="item in i.translations")
                    div(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                        .html(v-html="item.content")
.div5 
    .container-fluid
        div
            div(v-for="i in data11" )
                div(v-if="i.slug === namee" )
                  div(v-for="item in i.translations")
                    div(v-if="item.languages_code.code.includes(lang)")
                      h2(style="text-align:center") {{ item.title }} {{$t('applications')}}

                  Swiper.fr(
                      v-for="item in i.b"
                      :slides-per-view="'auto'"
                      :space-between="16"
                      :navigation="true"
                      :modules="modules"
                      :breakpoints="{1080:{slidesPerView: '3'}, 992:{slidesPerView: '3'},640:{slidesPerView: '2'}, 400:{slidesPerView: '1.5'}}"
                  )
                      SwiperSlide(v-for="j in item.applications")
                          div(v-for="jj in j.applications_id.translations"  :key="jj.title")
                              div(v-if="jj.languages_code.code.includes(lang)") 
                                  NuxtLink.lin(:to="localePath('/applications/' + j.applications_id.slug)")
                                    .card(:style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                                      .image
                                          img(:src="'https://board.rockal.org/assets/' + jj.cover.id")
                                      .cont
                                          h5 {{ jj.title }}
                                          p  {{ jj.description }}   

.div5
  .container-fluid
    div(v-for="i in data11" )
      div(v-if="i.slug === namee" )
        div(v-for="item in i.translations")
          div(v-if="item.languages_code.code.includes(lang)")
            h2(style="text-align:center") {{ item.title }} {{$t('products')}}
      Swiper(
        v-if="i.slug === namee"
        :slides-per-view="'auto'"
        :space-between="16"
        :navigation="true"
        :modules="modules"
        :breakpoints="{1080:{slidesPerView: '3'}, 992:{slidesPerView: '3'},640:{slidesPerView: '2'}, 400:{slidesPerView: '1.5'}}"  
        )
        SwiperSlide(v-for="item in i.a" )
          NuxtLink.lin(:to="localePath('/products/' + item.slug)")
            .card(:style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
              div(v-for="j in item.translations" )
                div(v-if="j.languages_code.code.includes(lang)")
                  .image(v-for="jj in j.cover") 
                    img(loading="lazy" :src="'https://board.rockal.org/assets/' + jj")
                  .cont()
                    h5 {{ j.title }}
                    p {{ j.description}}

</template>

<!--  
div(v-for="i in data11")
div(v-if="i.slug === namee")
    div(v-for="item in i.products")
        div(v-for="app in item.applications")
            div(v-for="j in app.applications_id.translations")
                div(v-if="j.languages_code.code.includes(lang)") 
                    p {{ j.title }}
             -->

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
  variables: { limit2: 1, a: true },
});

const data11 = data2.value?.categories.map((item) => item).flat();

</script>

<style lang="scss" scoped>
.div {
  padding-top: 13em;
  padding-bottom: 1em;
  margin-bottom: 0;

  .container-fluid {
    .image {
      height: 67vh;
      padding-bottom: 1em;
      position: relative;

      img {
        filter: brightness(35%);
      }
      .tex {
        position: absolute;
        top: 30%;
        color: white;
        width: 37vw;
        @media (max-width:992px) {
          width: 80%;
        }
        .title {
          margin-bottom: 0.5em;
        }
      }
    }
  }
  @media(max-width:992px){
    padding-top:7em;
    .container-fluid {
      .image {
        height: 37vh;
        padding-bottom: 1em;
        position: relative;
  
      }
  }
}
}
.div3 {
  margin-top: 0;
  .container-fluid {
    padding-top: 2em;
    padding-bottom: 2em;
    .html {
      margin-top: 1em;
    }
  }
}
.div5 {
  margin-top: 1em;
  padding-top: 4em;
  padding-bottom: 2em;
  .container-fluid {
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
}

</style>
