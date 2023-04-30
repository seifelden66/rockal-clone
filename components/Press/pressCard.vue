<template lang="pug">
.cards 
  div(v-for="(i, index) in titles" :key="index")
    .card(:class="'card-' + index")
      .image
        img(:src="'https://board.rockal.org/assets/'+ i[1]")
      .right
        h5 {{ i[0] }}
        .con
          p {{ i[2] }}
  </template>
  <script setup lang="ts">
  const props = defineProps(["data", "lang"]);
  
  const titles = props.data.press_center
    .map((i) => {
      if (i.translations[0].cover) {
        return i.translations.map((item, index) => {
          if (item.languages_code.code.includes(props.lang)) {
            return [item.title, item.cover.id, item.description];
          }
        });
      }
    })
    .flat()
    .filter(Boolean);
  
  const desc = props.data.press_center
    .map((i) => {
      return i.slug;
    })
    .join("");
  </script>
  <style lang="scss" scoped>
  .cards {
    display: grid;
    
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
    
    
    .card {
      
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .image {
        width: 300px;
        height: 200px;
      }
      
     &-1{
      .image{
        width: auto !important;
        height: 260px;
      }
      flex-direction: column;
     }
     
    }   
    
    :nth-child(1){
      grid-column: span 2;
      
    }
    :nth-child(2){
     grid-row: span 2;
      
    }
   
  }
  </style>