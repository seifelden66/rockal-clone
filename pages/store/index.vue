<template lang="pug">
.div
    .container-fluid
        .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
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
    h1(style="text-align:center") {{$t('popular')}} {{$t('categories')}} 
    Swiper(style="margin-top:1em").cards(
          :slides-per-view="'auto'"
          :space-between="6"
          :navigation="true"
          :modules="modules"
          :breakpoints="{1080:{slidesPerView: '3'}, 992:{slidesPerView: '2'},640:{slidesPerView: '1.5'}}"
          data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400"
        )
          SwiperSlide(v-for="i in data11") 
            div(v-for="item in i.translations")
              div(v-if="item.cover === null")
                nuxt-link(:to="localePath('/categories/' + i.slug)").lin.card(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'" style="padding:2em")
                  h1(style="margin-bottom:1.5em") {{ item.title }}
                  h4 {{ item.description }}
              div(v-else)
                nuxt-link(:to="localePath('/categories/' + i.slug)").lin.card(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                  .image
                    img(loading="lazy" :src="'https://board.rockal.org/assets/'+ item.cover.id")
                  .cont
                    h5 {{ item.title }}
                    p {{ item.description.substr(0, 250) + "..." }}



.div3(style="background:#f8f8f8") 
    .container-fluid( data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400")
      h1(style="text-align:center") {{$t('dproducts')}} 
      Swiper.cards(
          :slides-per-view="'auto'"
          :space-between="6"
          :navigation="true"
          :modules="modules"
          :breakpoints="{1080:{slidesPerView: '3'}, 992:{slidesPerView: '2'},640:{slidesPerView: '1.5'}}"
          
        )
        SwiperSlide(v-for="i in data1.products")
          div(v-for="item in i.translations")
            nuxt-link(:to="localePath('/products/' + i.slug)").lin.card(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'" style="padding:2em")
              .image(v-if="item.cover")
                img(loading="lazy" :src="'https://board.rockal.org/assets/'+ item.cover.id")
              .cont 
                h5 {{ item.title }}
                p(v-if="item.description") {{ item.description.substr(0, 250) + "..."}}

.div4(style="background:#f8f8f8") 
  .container-fluid( data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400")
    h1(style="text-align:center") {{$t('shopbybrand')}}
    .cards
      .brands(v-for="i in data3.brands") 
        div(v-for="item in i.translations")
          .lin.card(v-if="item.languages_code.code.includes(lang)" )
            .card(v-if="item.cover")
              img(loading="lazy" :src="'https://board.rockal.org/assets/'+ item.cover.id")



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
const { data: data3 } = await useAsyncGql({
  operation: "spons",
});
const { data: data1 } = await useAsyncGql({
  operation: "allproductsCategories",
  variables: { limit: 5 }
});

const data11 = data2.value?.categories.map((item) => item).flat()
// const data22 = data2.value?.categories.map((item) => item.translations).flat()
// const data23 = data2.value?.categories.map((item) => item.translations?.flatMap(i=>i?.cover && i.languages_code?.code.includes(lang.value)?item :null)).filter(Boolean)
// const data3 = data11?.map(item => item?.translations?.map(i=>i?.cover ? item : null).filter(Boolean) )


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
  .cards {
    margin-top: 1em;
    .card {
      height: 330px;

      .image {
        height: 150px;
      }
      .cont {
        margin-top: 5px;
        align-items: center;
        padding: 0.5em;
        p {
          font-size: 14px;
        }
      }
    }
  }
}
.div4{
  padding-top: 4em;
  .container-fluid{
    .cards{
      margin-top: 1em;
      display: grid;
      gap: 1em;
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
