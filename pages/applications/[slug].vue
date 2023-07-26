<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
        div(v-for="i in data2.applications")
            div(v-if="i.slug === namee")
                div(v-for="item in i.translations" )
                  div(v-if="item.languages_code.code.includes(lang)")
                    .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                      NuxtLink.lin(:to="localePath('/')" style="color:#fbc30c") {{$t('home')}} 
                      span  / 
                      NuxtLink.lin(:to="localePath('/applications')" style="color:#fbc30c") {{$t('applications')}}
                      span  / 
                      h6(style="display:inline-block") {{ item.title }}
                    .image()
                      img(:src="'https://board.rockal.org/assets/' + item.cover.id")


.div2(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
  .container-fluid    
    div(v-for="i in data2.applications")
      div(v-if="i.slug === namee")
        div(v-for="item in i.translations" ) 
          div(v-if="item.languages_code.code.includes(lang)")
            div(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
              h2(style="margin-bottom:.5em") {{ item.title }}
              .html(v-html="item.content" )  

.div3(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
  .container-fluid 
    h2(style="text-align:center") {{t('related')}} {{t('products')}}
    div(v-for="i in data11" )
      div(v-for="item in i.b")
        div(v-for="j in item.applications")
          Swiper.fr(
            v-if="j.applications_id.slug === namee"
            :slides-per-view="'auto'"
            :space-between="16"
            :navigation="true"
            :modules="modules"
            :breakpoints="{1080:{slidesPerView: '3'}, 992:{slidesPerView: '3'},640:{slidesPerView: '2'}, 400:{slidesPerView: '1.5'}}"
            )
            SwiperSlide(v-for="jj in j.applications_id.categories" )
              div(v-for="x in jj.categories_id.translations" )
                div(v-if="x.languages_code.code.includes(lang)")
                  div(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                    NuxtLink.lin(:to="localePath('/categories/' + jj.categories_id.slug)")
                      .card
                        .image 
                          img(:src="'https://board.rockal.org/assets/' + x.cover.id")
                        .cont
                          
                          h5 {{ x.title }}
                          p {{ x.description }}

   
      
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
  operation: "apps",
  
});
const { data: data1 } = await useAsyncGql({
  operation: "products",
  variables: { limit2: 1, a: true, limit3:1 },
});

const data11 = data1.value?.categories.map((item) => item).flat();

</script>

<style lang="scss" scoped>
.div {
  padding-top: 12rem;
  padding-bottom: 3em;
  .container-fluid {
    color: white;
    .image{
      height: 67vh;
      padding-bottom: 1em;
      position: relative;
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
.div2{
  padding-top: 5em;
  background:#f8f8f8;
}
.div3{
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
