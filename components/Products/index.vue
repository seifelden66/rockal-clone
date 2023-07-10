<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
        .navBar 
            .left 
                h2 {{$t('dproducts')}} 
            .right 
                .smoothBox 
                    h6 browse all categouries 
                .smoothBox 
                    h6 browse all products
        Swiper.cards(
          
          :slides-per-view="'auto'"
          :space-between="6"
          :navigation="true"
          :modules="modules"
          :breakpoints="{1080:{slidesPerView: '4'}, 992:{slidesPerView: '3'},640:{slidesPerView: '2'}}"
          
        )
          SwiperSlide(v-for="i in data.categories") 
            div(v-for="item in i.translations")
              div(v-if="item.cover === null")
                .card(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'" style="padding:2em")
                  h1(style="margin-bottom:1.5em") {{ item.title }}
                  h4 {{ item.description }}
              div(v-else)
                .card(v-if="item.languages_code.code.includes(lang)" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                  .image
                    img(:src="'https://board.rockal.org/assets/'+ item.cover.id")
                  .bottom
                    h5 {{ item.title }}
                    p {{ item.description.substr(0, 150) + "..." }}

</template>

<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
import { Navigation, Pagination } from "swiper";

const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);
const modules = [Navigation, Pagination];

const { data } = await useAsyncGql({
  operation: "products",
});
</script>

<style lang="scss" scoped>
.div {
  height: 600px;
  margin: 0 !important;
  background: #f8f8f8;
  padding-top: 3em;
  
  .container-fluid {

    .navBar {
      margin-bottom: 2em;
      display: flex;
      justify-content: space-between;
      .right {
        display: flex;
        gap: 10px;
        .smoothBox {
          background: white;
          color: black;
          border: 1px black solid;
          &:hover {
            color: green;
            cursor: pointer;
          }
        }
      }
    }
    .cards {
      
      .card {
        height: 330px;
        
        .image {
          height: 150px;
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

@media (min-width: 992px) {
  .right {
    display: flex;
    gap: 10px;
    .smoothBox {
      background: white;
      color: black;
      border: 1px black solid;
      &:hover {
        color: green;
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 992px) {
  .navBar {
    display: flex;
    justify-content: center !important;
    text-align: center !important;
    .right {
      display: none !important;
    }
  }
}
</style>
