<template lang="pug">
.div
    .container-fluid
        .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
            NuxtLink.lin(:to="localePath('/')" style="color:#fbc30c") {{$t('home')}}     
            span(style="color:white")  / 
            h6(style="display:inline-block; color:white") {{$t('products')}}
        .image
            img(src="/products.png")
.div3(style="background:#f8f8f8")
    .container-fluid(:dir="$i18n.locale === 'ar' ? 'ltr' : 'rtl'")
        .left
            div(v-for="i in data11")
                div(v-for="item in i.translations" )  
                    NuxtLink.lin.col(:to="localePath('/products/' + i.slug)").card(v-if="item.languages_code.code.includes(lang) && (selectedCategories.length === 0 || selectedCategories.includes(i.category.slug))" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                            .image
                                    img(loading="lazy" :src="'https://board.rockal.org/assets/'+ i.translations[0].cover.id ")
                            .cont 
                                h4 {{ item.title }}
                                p {{item.description}}
                                
        .right
            div(v-for="i in data22")
                label(style="display:flex; gap:5px" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
                    input(type="checkbox" :checked="selectedCategories.includes(i.slug)" @change="toggleCategory(i.slug)")
                    span(v-for="item in i.translations")
                        span(v-if="item.languages_code.code.includes(lang)") {{ item.title }}
                                
            div(v-for="f in filt")
                p {{ f }}
                        
    
                
    button.smoothBox(@click="lim = lim + 10" style="margin: 0 auto; margin-top:1.5em;") {{$t('show')}}

</template>

<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();

const lang = ref(locale);
const lim = ref(12)
const selectedCategories = ref([]);


const { data: data1 } = await useAsyncGql({
    operation: "productsCategories",
    variables: { limit: lim },
});
const { data:data2 } = await useAsyncGql({
    operation: "products",
    
});
const toggleCategory = (slug) => {
    const index = selectedCategories.value.indexOf(slug);
    if (index > -1) {
    selectedCategories.value.splice(index, 1); 
    } else {
    selectedCategories.value.push(slug); 
    }
};
const data11 = data1.value?.products.map((item)=>item)
const data22 = data2.value?.categories.map((item)=>item)
const filt = data2.value?.categories.filter((item)=>{
    console.log(item.slug === data11?.map((item)=>item.category?.slug)? item.slug: null)
    // return item.slug === data11?.map((i)=>i.category?,)
})

</script>

<style lang="scss" scoped>
.div {
    padding-top: 12rem;
    padding-bottom: 3em;
    .container-fluid {
    .image {
        height: 65vh;
    }
    }
    @media (max-width: 768px) {
    padding-top: 7em;
    .container-fluid {
        .image {
        height: 35vh;
        }
    }
    }
    
}
.div3 {
    padding-top: 3em;
    .container-fluid {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 2em;
    .right {
        display: grid;
        grid-template-columns: 1fr;
        height: 50vh;
    }
    .left {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: .7em;
        .card{
        height: 60vh;
        padding: .5em;
        .image{
            height: 24vh;
            border-bottom: 1px solid #000;
        }
        .cont{
            
            padding: 1.35em;
        }
        }
        @media (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
        
        .card{
            height: 62vh;
            overflow: hidden;
        }
        }
        @media (max-width: 500px) {
        grid-template-columns: 1fr;
        
        }
    }
    @media (max-width: 992px) {
        grid-template-columns:1fr;
        .right{
        display: none;
        }
    }
    }
}
</style>
    