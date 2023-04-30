<template lang="pug">
.div 
    .container-fluid 
        .navBar 
            .left 
                h2 featuered products 
            .right 
                .smoothBox 
                    h6 show all 
        PressCard(:data="data" :lang="lang") 
                          
                
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
  h2{
    color: white;
  }
  .container-fluid {
    .navBar {
      margin-bottom: 1em;
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
    .fr {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      position: relative;
      gap: .5em;
      
      .card {
        // common styles for all cards
        background-color: #f2f2f2;
        border: 1px solid #ddd;
        padding: 10px;
        
        

      }
      .card-0 {
        background: #721c1c;
      }
      .card-1 {
        background: #0c8494;
      }
       
    }
  }
}
</style>
