<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
      div(v-for="i in data.Home_files_1")
        div(v-for="item in i.Home_id.translations") 
            .card(v-if="item.languages_code.code.includes(lang)" )
                .left
                    h1(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{ item.slider[0].title }}
                    h5(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{ item.slider[0].description }}
                .image
                    img(:src="'https://board.rockal.org/assets/' + item.slider[0].cover_id")


.div3(style="background:#f8f8f8") 
  .container-fluid() 
    h1(style="font-weight:bold; text-align:center; margin-bottom:1em" ) {{t('our story')}}
    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
      .cont 
        h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") 1997      
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('story1')}}
      .line
      .image 
        img(src="/story1.jpg")
      
    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
      .image
        img(src="/story2.png")
      .line
      .cont 
        h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") 2003
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('story2')}}
    
    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
      .cont 
        h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") 2015
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('story3')}}
      .line
      .image
        img(src="/story3.png")

    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400")  
      .image
        img(src="/story5.png")
      .line
      .cont 
        h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") 2017
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('story5')}}
    
    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
      .cont 
        h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") 2020
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('story6')}}
      .line
      .image
        img(src="/story6.png")

    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400")  
      .image
        img(src="/story7.png")
      .line
      .cont 
        h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") 2022
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('story7')}}



.secmid(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'") 
  .container-fluid( data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400")
    .it
      .image(:style="$i18n.locale === 'ar' ? 'display:flex;align-items:right' : 'display:flex;align-items:left'")  
        LogosEye/
      .con 
        h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('our vision')}}
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('visioncont')}}
    .it
      .image(:style="$i18n.locale === 'ar' ? 'display:flex;align-items:right' : 'display:flex;align-items:left'") 
        LogosFlag/
      .con 
        h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('our message')}}
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('messagecont')}}

.div3(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" style="background: #262c27; color:#fff; padding-bottom:2em")
  .container-fluid 
    h1(style="text-align:center; margin-bottom:1em; margin-top:1em"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") {{t('our values')}}
    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
      .cont 
        h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('experience')}}
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('experiencestory')}}
      .line
      .image
        img(src="/experience.jpg")
    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400")  
      .image
        img(src="/quality.jpg")
      .line
      .cont 
        h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('quality')}}
        p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('qualitystory')}}
    .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400"  ) 
        .cont 
          h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('trust')}}
          p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('truststory')}}
        .line
        .image
          img(src="/trust.jpg")

.div3(style="background:#f8f8f8") 
  .container-fluid( data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400")
    h1(style="text-align:center; margin-bottom:1em; margin-top:1em") {{t('ourteam')}}
    .image 
      img(src="/team.png")
    h1(style="text-align:center; margin-bottom:1em; margin-top:2em") {{t('Our Business Partners')}}
    .image 
      img(src="/world.png")

</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);

const { data } = await useAsyncGql({
  operation: "home",
  variables: { limit1: 1 },
});
</script>

<style lang="scss" scoped>
.div {
  padding-top: 12em;
  padding-bottom: 5em;
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



.secmid{
  background: #f8f8f8;
  padding-top: 5em;
  padding-bottom: 5em;
  .container-fluid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
    .it{
      
      background: #ffffff;
      padding: 1em;
      .image{
        width: 50px;
        margin-bottom: 1em;
        
      }
    }
  }
}

@media (max-width:768px) {
 .div{
  .container-fluid{
    .card{
      display: grid;
      grid-template-columns: 1fr;
      height: 570px;
      .image{
        height: 300px;
      }
      
    }
  }
 } 
}

 
</style>
