<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'") 
    .container-fluid 
        .navBar 
            .left 
                h2 {{$t('press2')}}
            .right 
              nuxt-link(:to="localePath('/press/')").lin.smoothBox 
                    h6 {{$t('show')}}
        .fr 
          nuxt-link(:to="localePath('/press/' + i.slug)").lin.card(v-for="(i, index) in data.press_center" :class="'card-' + index" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'" )
            div(v-if="i.translations[0].cover")
              div(v-for="item in i.translations" :key="index")
                .in(v-if="item.languages_code.code.includes(lang)")
                  .image
                    img(loading="lazy"  :src="'https://board.rockal.org/assets/'+ item.cover.id")
                  .right
                    h5 {{ item.title }}
                    .con
                      p {{ item.description }}
                          
                
</template>

<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
import { Navigation, Pagination } from "swiper";

const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);
const modules = [Navigation, Pagination];

const { data } = await useAsyncGql({
  operation: "press",
  variables: { limit: 4 },
});


</script>

<style lang="scss" scoped>
.div {
  padding-top: 5em;
  padding-bottom: 1em;
  h2{
    color: white;
  }
  .container-fluid {
    .navBar {
      margin-bottom: 1.5em;
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
   
  }
  .fr{
    
    display: grid;
    grid-template-areas: 
    "a a b"
    "d c b";
    gap: 1em;
    .card{
      .in{
        gap: 1em;
        .image{
          height: 30vh;
        }
        .right{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: .7em;
          
        }
      }
      
      &-0 {
        .in{
          display: grid;
          grid-template-columns: 1fr;
          .right{
            display: none;
          }
          
        }
        grid-area: a;

      }
      &-1 {
        .in{
          
          .image{
          
            height: 50vh;
          }
        }
        grid-area: b;
      }
      &-2 {
        grid-area: c;
      }
      &-3 {
        grid-area: d;
        background: #267a33;
        padding-top: 2em;
        color: white;
        .image{
          display: none;
        }
      }
    }

  }
}
@media (max-width:992px) {
  .div{
    .container-fluid {
      .navBar{
        text-align: center;
        display: flex;
        justify-content: center !important;
        .right{
          display: none;
        }
      }
      .fr{
        font-size: xx-small;
        display: grid;
        grid-template-areas: 
        "a a a a"
        "b b d d"
        "c c c c" ;
        .card{

          &-0 {
            grid-area: a;
            .in{
              display: grid;
              grid-template-columns: 1fr 1fr;
              place-items: center;
            }
          }
          &-1 {
            grid-area: b;
            .image{
              height: 150px;
            }
          }
          &-2 {
            grid-area: c;
            .in{
              display: grid;
              grid-template-columns: 1fr 1fr;
              place-items: center;
            }
          }
          &-3 {
            grid-area: d;

            .in{
              margin: 1em auto;
              display: flex;
              align-items: center;
              padding: 1em;
            }
          }
        }
      }
    }
  }
}
</style>
