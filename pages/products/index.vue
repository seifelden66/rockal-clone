<template lang="pug">
.div
    .container-fluid
        .image
            img(src="/products.png")
.div3(style="background:#f8f8f8")
    .container-fluid 
        .left
            div(v-for="i in data1.products")
                div(v-for="item in i.translations" )  
                    .card(v-if="item.languages_code.code.includes(lang) && (selectedCategories.length === 0 || selectedCategories.includes(i.category.slug))" :style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                            .image
                                    img(loading="lazy" :src="'https://board.rockal.org/assets/'+ i.translations[0].cover.id ")
                            .cont 
                                h4 {{ item.title }}
                                p {{item.description}}
                                
        .right
           
                div(v-for="i in data2.categories")
                    label
                        input(type="checkbox" :checked="selectedCategories.includes(i.slug)" @change="toggleCategory(i.slug)")
                        span(v-for="item in i.translations")
                            span(v-if="item.languages_code.code.includes(lang)") {{ item.title }}
                                
                        
                        
  
                
    button.smoothBox(@click="lim = lim + 10" style="margin: 0 auto; margin-top:1.5em;") show more

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
        height: 30vh;
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
        height: 58vh;
        padding: 1em;
        .image{
            height: 24vh;
            border-bottom: 1px solid #000;
        }
        .cont{
            
            padding: 1.35em;
        }
      }
    }
  }
}
</style>
