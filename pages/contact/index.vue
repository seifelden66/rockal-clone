<template lang="pug">
.div2
  div(data-aos="zoom-in" :data-aos-duration="400" :data-aos-delay="400")
    Contact/
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.div2 {
    padding-top: 7em;
    .container-fluid {
      display: grid;
      .fr {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
        .card{
          height: 67vh;
          
          .image{
              height: 30vh;
              border-bottom: 1px solid #000;
          }
          .cont{
            display: flex;
            flex-direction: column;
              gap: 1em;
              padding: 1.5em;
          }
          }
          @media (max-width:768px) {
            grid-template-columns: repeat(2, 1fr);
          }
          @media (max-width:430px) {
            grid-template-columns: 1fr;
          }
      }
    }
  }
</style>