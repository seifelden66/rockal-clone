<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
        .card
            .left 
                h1(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('Research & Development')}}
                h5(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('Research & Development body')}}
            .image
                img(src="/rnd.jpg")
        
.div3(style="background:#f8f8f8") 
    .container-fluid 
        .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'") 
            .cont 
                p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('rnd 1')}}
            .line
            .image 
                img(src="/rnd1.jpg")
            
        .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'") 
            .image
                img(src="/rnd2.jpg")
            .line
            .cont 
                p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('rnd 2')}}

       

.div3(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" style="background: #262c27; color:#fff; padding-bottom:2em")
  .container-fluid 
    h1(style="text-align:center; margin-bottom:1em; margin-top:1em") {{t('Here are few examples of the research and development applications inside our labs:')}}
    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'") 
      .cont 
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('The artificial climate chamber is used to study the aging process of materials. The method gives the possibility to predict waterproofing materials performance after many years of exploitation on the roof in just two or three months of testing.')}}
      .line
      .image
        img(src="/rnd3.jpg")
    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")  
      .image
        img(src="/rnd4.jpg")
      .line
      .cont 
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('Bitumen and synthetic membranes are capable of resisting flames and correspond to E class. Roofing systems are tested to evaluate the fire performance and meet the criteria for the Proof classification.')}}
    
</template>

<script setup lang="ts">
import { useI18nUtils } from "../../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);

</script>

<style scoped lang="scss">
.div {
    padding-top: 12em;
    padding-bottom: 3em;
    .container-fluid {
      .card {
        padding: 0;
        border: none;
        background: #fbc30c;
        color: black;
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 450px;
  
        .image {
          width: 100%;
          height: 450px;
        }
        .left {
          padding: 1em;
          .but {
            width: 120px;
            margin-top: 1em;
            .lin {
              width: 120px;
              .smoothBox {
                width: 120px;
                display: flex;
                text-align: center;
                align-items: center;
                justify-content: center;
              }
            }
          }
  
          h5 {
            font-weight: 400 !important;
          }
          width: 80%;
          display: flex;
          flex-direction: column;
          margin: 1em;
          justify-content: center;
        }
      }
    }
  }

  .div3 {
    padding-top: 2em;
  padding-bottom: 2em;
    .ittem {
      margin-top: 1em;
      place-items: center;
      display: grid;
      grid-template-columns: 1fr 50px  1fr;
      .cont{
        padding: 2em;
        padding-right: 2em;
        display: flex;
        flex-direction: column;
        gap: 0.7em;
      }
      .line {
        
        transform: translateY(7px);
        background-color: #00000000;
        border-left: rgb(156, 156, 156) 1px dashed;
        width: .1px;
        height: 105%;
          }
      .image{
        
        padding: 2em;
        border: rgb(156, 156, 156) 1px dashed;
      }
      
    }
    @media (max-width:768px) {
      .container-fluid{
        .ittem{
          justify-content: center;
          display: flex;
          flex-direction: column;
          .cont{
            text-align: center ;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            p{
              text-align: center !important;
            }
          }
          &:nth-child(odd) {
            flex-direction: column-reverse;
          }
        }
      
    }
    }
  }
  
</style>