<template lang="pug">
.div
  .container-fluid
    div(v-for="i in data.Home_files_1")
      div(v-for="item in i.Home_id.translations") 
        Swiper.fr(
          v-if="item.languages_code.code.includes(lang)"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="modules"
        )
          SwiperSlide(v-for="i in item.slider" ref="swiperSlideRef")
            .card
              .left
                h1 {{ i.title }}
                h5 {{ i.description }}
                .but
                  NuxtLink(:to="localePath('/about')" class="lin") 
                    .smoothBox
                      h6 {{ $t('about') }}
              .image
                img(:src="'https://board.rockal.org/assets/' + i.cover_id")
              
</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";
import { Navigation, Pagination } from "swiper";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);

const modules = [Navigation, Pagination];

const { data } = await useAsyncGql({
  operation: "home",
  variables: { limit1: 1 },
});
</script>

<style lang="scss" scoped>
.div {
  height: 500px;
  .container-fluid {
    .fr {
      display: grid;
      gap: 1em;
      grid-template-columns: 1fr;
      
      .card {
        padding: 0;
        border: none;
        background: #fbc30c;
        color: black;
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 450px;

        .image {
          width: 100%;
          height: 450px;
        }
        .left {
          .but {
            width: 120px;
            margin-top: 1em;
            .lin {
              width: 120px;
              .smoothBox {
                width: 120px;
                display: flex;
                text-align: center;
                align-items: center;
                justify-content: center;
              }
            }
          }
          h1 {
            font-size: 32px !important;
          }
          h5 {
            font-weight: 400 !important;
          }
          width: 80%;
          display: flex;
          flex-direction: column;
          margin: 1em;
          justify-content: center;
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .div {
    height: 650px;
    .card {
      height: 620px !important;
      display: grid;
      grid-template-columns: 1fr !important;
      .left {
        height: 250px;
        h1 {
          font-size: 32px !important;
        }
        h5 {
          font-size: 17px !important;
          font-weight: 400 !important;
        }
      }

      .image {
        height: 370px !important;
      }
    }
  }
}
@media (max-width: 600px) {
  .card {
    height: 620px !important;
    .left {
      height: 310px;
    }
    .image {
      height: 310px !important;
    }
  }
}
</style>
