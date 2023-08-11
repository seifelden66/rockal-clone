<template lang="pug">
.div
    .container-fluid
        .path(style="margin-bottom:1em" :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
            NuxtLink.lin(:to="localePath('/')" style="color:#fbc30c") {{$t('home')}}     
            span(style="color:white")  / 
            h6(style="display:inline-block; color:white") {{$t('products')}}
        .image
            img(src="/products.png")
.div5
    .container-fluid  
            .smoothBox(@click="showfilt")
                h4(style="text-align:center") filter

.men(v-if="profilt")
    .container-fluid 
        div(v-for="i in data22")
            div(v-for="item in i.translations" )
                div(v-if="item.languages_code.code.includes(lang)")
                    div(style="display:flex; align-items:center; justify-content:space-between; width:12em")
                        p(style="margin-top:10px; ") {{ item.title }}
                        input(type="checkbox" :value="i.slug" v-model="cats")
        .smoothBox(@click="hidefilt") 
            h4 filter
    

.div3(style="background:#f8f8f8;")
    .container-fluid(:dir="$i18n.locale === 'ar' ? 'ltr' : 'rtl'")
        .g(v-if="cats.length === 0 ")
            .cards
                div(v-for="i in data3.products")
                    .left(v-for="item in i.translations")
                        nuxt-link(:to="localePath('/products/' + i.slug)").lin.card(v-if="item.languages_code.code.includes(lang)")
                            .image(v-if="item.cover")
                                img(loading="lazy" :src="'https://board.rockal.org/assets/'+item.cover.id")
                            .cont(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                                h5 {{ item.title }}
                                p(v-if="item.description") {{ item.description.substr(0, 150) + "..." }}
            .btn
                .smoothBox(@click="lim = lim + 10") {{$t('show')}}
        .g(v-else)
            .cards
                div(v-for="i in data1.products")
                    div(v-for="item in i.translations")
                        nuxt-link(:to="localePath('/products/' + i.slug)").lin.card(v-if="item.languages_code.code.includes(lang)")
                            .image(v-if="item.cover")
                                img(loading="lazy" :src="'https://board.rockal.org/assets/'+item.cover.id")
                            .cont(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                                h5 {{ item.title }}
                                p(v-if="item.description")  {{ item.description.substr(0, 150) + "..." }}
            
        .right()
            div(v-for="i in data22")
                div(v-for="item in i.translations" )
                    div(v-if="item.languages_code.code.includes(lang)")
                        div(style="display:flex; align-items:center; justify-content:space-between; width:12em")
                            p(style="margin-top:10px; ") {{ item.title }}
                            input(type="checkbox" :value="i.slug" v-model="cats")
</template>

<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();

const lang = ref(locale);

const lim = ref(12)
const cats = ref([])

const { data: data1 } = await useAsyncGql({
    operation: "productsCategories",
    variables: { limit: lim, filter: cats.value},
});
async function watch() {
    const { data: data1 } = await useAsyncGql({
        operation: "productsCategories",
        variables: { limit: lim, filter: cats},
    });
    
}
watch();

const { data:data3 } = await useAsyncGql({
    operation: "allproductsCategories",
    variables: { limit: lim},
});
async function watch2(){
    const { data:data3 } = await useAsyncGql({
    operation: "allproductsCategories",
    variables: { limit: lim}
});
}
watch();


const { data:data2 } = await useAsyncGql({
    operation: "products",
    
});


const data22 = data2.value?.categories.map((item)=>item).flat()


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
.div5{
    padding-top: 3em;
    .container-fluid{
        .smoothBox{
            background: #f8f8f8;
            border: 1px green solid;
            color: green;
            display: flex;
            justify-content: center;
            cursor: pointer;
            transition:.4s ease all ;
            &:hover{
                background-color: green;
                color: white;
            }
        }
    }
    @media (min-width:992px) {
        display: none;
    }
}
.men{
    position: fixed;
    top: 0;
    z-index: 99;
    height: 100vh;
    width: 100vw;
    background: #fff;
    padding-top: 10em;
    
    .smoothBox{
        margin-top: 1em;
        background: green;
        
        color: white;
        display: flex;
        justify-content: center;
        cursor: pointer;
        width: 200px;
        float: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition:.4s ease all ;
        &:hover{
            background-color: rgb(0, 89, 0);
            
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
    .g{
        position: relative;
        .cards {
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
        .btn{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            
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
    