<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
        .left
            .image
                LogosLogob/
            .cert
                h6(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{$t('Certifications')}}
                .image
                    LogosCert/
            p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{$t('All Copyrights Reserved © Rockal 2023 Designed With ♥ by Baianat')}}

            
        .right 
            .leright
                h4 {{$t('company') }} 
                NuxtLink.lin.col(:to="localePath('/')")
                    h6 {{$t('home')}}
                NuxtLink.lin.col(:to="localePath('/about')")
                    h6 {{$t('about')}}
                NuxtLink.lin.col(:to="localePath('/products')")
                    h6 {{$t('products')}}
                NuxtLink.lin.col(:to="localePath('/store')")
                    h6 {{$t('store')}}
                NuxtLink.lin.col(:to="localePath('/applications')")
                    h6 {{$t('applications')}}
                NuxtLink.lin.col(:to="localePath('/projectss')")
                    h6 {{$t('projects')}}
                NuxtLink.lin.col(:to="localePath('/RnD')")
                    h6 {{$t('R & D')}}
                NuxtLink.lin.col(:to="localePath('/press')")
                    h6 {{$t('press')}}
                NuxtLink.lin.col(:to="localePath('/contact')")
                    h6 {{$t('contact')}}
            .meright 
                h4 {{$t('products')}}
                NuxtLink.lin.col(:to="localePath('/products')")
                    h6 {{$t('browse all')}} {{$t('products')}} 
                div(v-for="i in data1.categories")
                    NuxtLink.lin.col(:to="localePath('/categories/' + i.slug)")
                        .ddiv(v-for="item in i.translations") 
                            h6(v-if="item.languages_code.code.includes(lang)") {{item.title}}
            .riright 
                h4 {{$t('applications')}}
                NuxtLink.lin.col(:to="localePath('/applications')")
                    h6 {{$t('browse all')}} {{$t('applications')}}  
                div(v-for="i in data2.applications")
                    NuxtLink.lin.col(:to="localePath('/applications/' + i.slug)")
                        div(v-for="item in i.translations") 
                            h6(v-if="item.languages_code.code.includes(lang)") {{item.title}}
</template>

<script setup lang="ts">
const cert = 'certifications.svg'
const img1 = 'Group450142.png'
import { useI18nUtils } from "../i18n";
const limit = ref(5);
const { data:data1 } = await useAsyncGql({
  operation: "products",
  variables: { limit },
});
const { data:data2 } = await useAsyncGql({
  operation: "productsapps",
  variables: { limit },
});
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);
</script>

<style lang="scss" scoped>
.div {
    margin: 0 !important;
    background: #f8f8f8;
    padding-top: 7em;
    padding-bottom: 1em;
    .container-fluid {
        display: flex;
        gap: 12em;
        .left{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5em;
            .cert{
                display: flex;
                width: 10em;flex-direction: column;
                align-items: center;
                
                .image{
                    width: 12em;
                    transform: translateX(7px);
                }
            }

        }
        .right{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            text-align: center;
        }
    }
}
@media (max-width:768px) {
    .div{
        padding-top: 5em;
        .container-fluid{
            display: grid;
            grid-template-columns: 1fr;
            place-content: center;
            gap: 3em;
            
            .right{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 5em;
            }
        }
    }
}
</style>