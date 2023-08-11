<template lang="pug">
.div
    .container-fluid
        .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
            NuxtLink.lin(:to="localePath('/')" style="color:#fbc30c") {{$t('home')}}     
            span(style="color:white")  / 
            p(style="display:inline-block; color:white") {{$t('press')}}
        .cont
            h1(style="margin:.5em 0") {{ $t('press center') }}
            h3(style="margin:.5em 0") {{ $t('We Are Proud to participate in the largest projects in egypt') }}
            .projectscats(:dir="$i18n.locale === 'ar' ? 'ltr' : 'rtl'")
              div(v-for="i in alldata.press_categories")
                  label(:for="'radio-' + i.slug" @click="selectCategory(i.slug)")
                    div(v-for="item in i.translations")
                      .smoothBoxWhite(style="inline-block" v-if="item.languages_code.code.includes(lang)" :class="{ active: typee === i.slug }") 
                        p {{ item.title }} 
                      input(:id="'radi o-' + i.slug" type="radio" :value="i.slug" v-model="typee", class="category-radio")
              label(for="radio-other", @click="selectCategory('other')")
                .smoothBoxWhite(style="inline-block" :class="{ active: typee === 'other' }") {{ $t('all') }}
                    input#radio-other(type="radio", value="other", v-model="typee", class="category-radio")

.div2(v-if="typee === 'other'")
    .container-fluid  
        .fr
            div(v-for="i in data2.press_center")
                div(v-for="item in i.translations")
                    nuxt-link(:to="localePath('/press/' + i.slug)").lin.card(v-if="item.languages_code.code.includes(lang)")
                        .image(v-if="item.cover")
                            img(loading="lazy" :src="'https://board.rockal.org/assets/'+item.cover.id")
                        .cont(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                            h5 {{ item.title }}
                            p {{ item.description }}
.div2(v-else) 
    .container-fluid 
        .fr(v-for="i in filtered.press_categories")
            div(v-for="item in i.press_center")
                div(v-for="j in item.translations")
                    nuxt-link(:to="localePath('/press/' + item.slug)").lin.card(v-if="j.languages_code.code.includes(lang)")
                        .image(v-if="j.cover")
                            img(loading="lazy" :src="'https://board.rockal.org/assets/'+j.cover.id")
                        .cont(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                            h5 {{ j.title }}
                            p {{ j.description }}

</template>

<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);
const typee = ref("other");

const selectCategory = (slug) => {
  typee.value = slug;
};
const { data: data2 } = await useAsyncGql({
  operation: "press",
});
const { data: alldata } = await useAsyncGql({
  operation: "allpress",
});
const { data: filtered } = await useAsyncGql({
  operation: "pressfilt",
  variables: { filter: typee },
});
async function watch2() {
  const { data: filtered } = await useAsyncGql({
    operation: "pressfilt",
    variables: { filter: typee.value },
  });
}
watch();
</script>

<style scoped lang="scss">
.div {
    padding-top: 12em;
    padding-bottom: 1em;
    margin-bottom: 0;
  
    .container-fluid {
      .cont {
        color: white;
        text-align: center;
        gap: 2em;
        .smoothBox {
          width: 17em;
          padding: 0.6em;
          display: grid;
          place-items: center;
          background-color: #fbc30c;
          color: black;
          margin: 1em auto;
        }
        .projectscats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2em;
          .smoothBoxWhite {
            background-color: inherit;
            color: white;
            border: none;
            width: 150px;
            display: grid;
            place-items: center;
            &:hover {
              color: green;
            }
          }
          .active {
            background-color: #ccc;
            color: black;
            &:hover {
              color: black;
              background-color: #9f9e9e;
            }
          }
          .category-radio {
            display: none;
          }
          @media (max-width:768px) {
            gap: 1em;
            .smoothBoxWhite{
              width: 90px;
            }
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
  .div2 {
    padding-top: 3em;
    .container-fluid {
      display: grid;
      .fr {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
        .card{
          height: 67vh;
          
          .image{
              height: 30vh;
              border-bottom: 1px solid #000;
          }
          .cont{
            display: flex;
            flex-direction: column;
              gap: 1em;
              padding: 1.5em;
          }
          }
          @media (max-width:768px) {
            grid-template-columns: repeat(2, 1fr);
          }
          @media (max-width:430px) {
            grid-template-columns: 1fr;
          }
      }
    }
  }
</style>