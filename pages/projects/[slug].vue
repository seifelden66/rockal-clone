<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
        div(v-for="i in alldata.projects_categories")
            div(v-for="item in i.projects")
                div(v-if="item.slug === namee")
                    div(v-for="j in item.translations")
                        div(v-if="j.languages_code.code.includes(lang)")
                            .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
                                NuxtLink.lin(:to="localePath('/')" style="color:#fbc30c") {{$t('home')}}     
                                span(style="color:white")  / 
                                NuxtLink.lin(:to="localePath('/projects')" style="color:#fbc30c") {{$t('projects')}}
                                span(style="color:white")  / 
                                p(style="display:inline-block; color:white") {{ j.title }}
                            .image
                                img(loading="lazy" :src="'https://board.rockal.org/assets/' + j.cover.id")
               
.div2(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
  .container-fluid   
    div(v-for="i in alldata.projects_categories") 
        div(v-for="item in i.projects")
            div(v-if="item.slug === namee")
                div(v-for="j in item.translations") 
                    div(v-if="j.languages_code.code.includes(lang)")
                        div(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                            h2(style="margin-bottom:.5em; text-align:center") {{ j.title }}
                            .html(v-html="j.content" )  
</template>

<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
import { Navigation, Pagination } from "swiper";
const modules = [Navigation, Pagination];
const lang = ref(locale);
const route = useRoute();
const namee = route.params.slug;

const { data: alldata } = await useAsyncGql({
  operation: "allprojects",
});
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
}
</style>
