<template lang="pug">
.div
    .container-fluid
        div(v-for="i in data2.press_center")
                div(v-if="i.slug === namee")
                   div(v-for="item in i.translations")
                    div(v-if="item.languages_code.code.includes(lang)")
                        .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
                            NuxtLink.lin(:to="localePath('/')" style="color:#fbc30c") {{$t('home')}}     
                            span(style="color:white")  / 
                            NuxtLink.lin(:to="localePath('/projects')" style="color:#fbc30c") {{$t('press')}}
                            span(style="color:white")  / 
                            p(style="display:inline-block; color:white") {{ item.title }}
                        .image
                            img(loading="lazy" :src="'https://board.rockal.org/assets/' + item.cover.id")
.div2(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
  .container-fluid   
    div(v-for="i in data2.press_center") 
        div(v-if="i.slug === namee")
            div(v-for="item in i.translations") 
                div(v-if="item.languages_code.code.includes(lang)")
                    div(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                        h2(style="margin-bottom:.5em; text-align:center") {{ item.title }}
                        .html(v-html="item.content" )  

</template>   

<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);
const route = useRoute();
const namee = route.params.slug;
const { data: data2 } = await useAsyncGql({
  operation: "press",
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
    .contaai {
        display: grid;
        grid-template-columns: 1.75fr 1.7fr;
        gap: 3em;
        align-items: center;
        
        @media (max-width:768px) {
        display: grid;
        grid-template-columns: 1fr;
        }
    }
    }
    @media(max-width:992px){
    padding-top:7em;
    .container-fluid {
        .image {
        height: 47vh;
        padding-bottom: 1em;
        position: relative;
    
        }
    }
}
}
.div2{
    padding-top: 5em;
    background:#f8f8f8;
    .card {
        
        margin-top: 2em;
        height: 59vh;
        .image {      
        height: 26vh;
        border-bottom: .6px solid rgb(172, 172, 172);
        
        }
        .cont {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: .75em;
        }
    }
}
</style>
