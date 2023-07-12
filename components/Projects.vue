<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
        .navBar  
                h1 {{$t('our projects')}} 
        Swiper.cards(
                :effect="'coverflow'"
                :grabCursor="true"
                :coverflowEffect='{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }'
                :slides-per-view="'auto'"
                :space-between="7"
                :navigation="true"
                :centeredSlides="true"
                :active-class="'active-card'"
                :modules="modules"
                :breakpoints="{1080:{slidesPerView: '3'}, 992:{slidesPerView: '3'},640:{slidesPerView: '2'}}"   
                class="swiper_container"
            )
            SwiperSlide(v-for="(i, index) in data.projects") 
                div(v-for="item in i.translations")
                        div(v-if="item.cover === null")
                            .card(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'" )
                                h1(style="margin-bottom:1.5em") {{ item.title }}
                                h4 {{ item.description }}
                        div(v-else)
                            .card(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                                .image
                                    img(:src="'https://board.rockal.org/assets/'+ item.cover.id")
                                .bottom
                                    h5 {{ item.title }}
                                    p {{ item.description.substr(0, 150) + "..." }}

        .btmbtm
          .smoothBoxWhite 
            NuxtLink.lin.col(:to="localePath('/projectss')")
              h6 {{$t('browse all')}} {{$t('projects')}}
</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";
import { Navigation, Pagination, EffectCoverflow } from "swiper";

const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);
const modules = [Navigation, Pagination, EffectCoverflow];

const { data } = await useAsyncGql({
  operation: "projects",
});
</script>

<style lang="scss" scoped>
.div {
  margin: 0 !important;
  background: #f8f8f8;
  padding-top: 7em;
  padding-bottom: 1em;
  .container-fluid {
    .navBar {
      margin-bottom: 2em;
      text-align: center;
    }
    .cards {
      .card {
        height: 55vh;

        .image {
          height: 30vh;
        }
        .bottom {
          margin-top: 5px;
          align-items: center;
          padding: 0.5em;
          p {
            font-size: 14px;
          }
        }
      }
    }
    .btmbtm{
      display: flex;
      justify-content: center;
      margin-top: 1em;
      
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
