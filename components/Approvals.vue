<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
        .top
            h1 {{$t('our products approved by')}}
        .btm 
            .ddiv(v-for="i in data.brands")
                .image(v-for="item in i.translations[0]")
                    img(:src="'https://board.rockal.org/assets/'+ item.id")
                
</template>

<script setup lang="ts">
const { data } = await useAsyncGql({
  operation: "spons",
});
</script>

<style lang="scss" scoped>
.div {
  background: #f8f8f8;
  .container-fluid {
    padding-top: 2.5em;
    padding-bottom: 1.2em;
    .top {
      text-align: center;
    }
    .btm {
      display: flex;
      margin: 1.2em auto;
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
