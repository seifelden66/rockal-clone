<template lang="pug">
.div
    .container-fluid
        .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
            NuxtLink.lin(:to="localePath('/')" style="color:#fbc30c") {{$t('home')}}     
            span(style="color:white")  / 
            h6(style="display:inline-block; color:white") {{$t('store')}}
        .image
            img(src="/store.jpg")
            .tex(:style="$i18n.locale === 'ar' ? 'right:2em': 'left: 2em'")
              .title
                h2(:style="$i18n.locale === 'ar' ? 'text-align:right': 'text-align:left'") {{$t('store')}}  
              p(:style="$i18n.locale === 'ar' ? 'text-align:right': 'text-align:left'") {{$t('storedesc')}}

.div3(style="background:#f8f8f8") 
  .container-fluid
    h1(style="text-align:center") {{$t('dproducts')}}
    .fr(style="display:grid; grid-template-columns:1fr 1fr")
      div(v-for="i in data11" ) 
        div(v-for="item in i.translations" )
            .card(v-if="item.cover && item.languages_code.code.includes(lang)")
                h3 {{ item.title }}
                img(:src="'https://board.rockal.org/assets/'+ item.cover.id")
            
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
  variables: { limit2: 1, a: true },
});

const data11 = data2.value?.categories.map((item) => item).flat();
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
        filter: brightness(35%);
      }
      .tex {
        position: absolute;
        top: 30%;
        width: 30%;
        color: white;
        @media (max-width:992px) {
          width: 80%;
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
}
</style>
