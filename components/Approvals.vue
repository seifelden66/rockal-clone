<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
        .top
            h1 {{$t('our products approved by')}}
        .btm 
            .ddiv(v-for="i in data.brands")
              div(v-for="item in i.translations")
                .lin.card(v-if="item.languages_code.code.includes(lang)" )
                  .card(v-if="item.cover")
                    img(loading="lazy" :src="'https://board.rockal.org/assets/'+ item.cover.id")
                
</template>

<script setup lang="ts">
const { data } = await useAsyncGql({
  operation: "spons",
});
import { useI18nUtils } from "../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();

const lang = ref(locale);
</script>

<style lang="scss" scoped>
.div {
  background: #f8f8f8;
  .container-fluid {
    padding-top: 7em;
    padding-bottom: 1.2em;
    .top {
      text-align: center;
    }
    .btm {
      display: flex;
      margin: 1.5em auto;
      gap: 1em;
      
    }
  }
}
@media (max-width: 992px) {
    .div{
        .container-fluid{
            .btm {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              }
        }
    }
}
</style>
