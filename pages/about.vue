<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
      div(v-for="i in data.Home_files_1")
        div(v-for="item in i.Home_id.translations") 
            .card(v-if="item.languages_code.code.includes(lang)" )
                .left
                    h1(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{ item.slider[0].title }}
                    h5(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{ item.slider[0].description }}
                .image
                    img(:src="'https://board.rockal.org/assets/' + item.slider[0].cover_id")
                        
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
  padding-top: 15em;
  .container-fluid {
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
</style>
