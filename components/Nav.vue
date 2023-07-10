<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
      .all
        .upper
            logosLogo/
            .srch
                input(type="search", placeholder="search ")
                .srchicon
                    LogosSearch/
            
            .right
                .whats
                    LogosWhats/
                    h6 +20 1012230000
                .menu(@click="open") 
                  LogosMenu/
                button.circle(@click="changeLanguageEN") 
                    p {{$t('translate')}}
        .lower 
          .links.row
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
            

</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();

</script>

<style lang="scss" scoped>
.div {
  height: 200px;
  .container-fluid {
    color: white !important;
    padding: 1.75em 1em;
    
    .all {
      
      .upper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .srch {
          align-items: center;
          display: flex;
          position: relative;
          input {
            background: #00000000;
            border-radius: 5px;
            border: rgb(255, 255, 255) solid 1px;
            width: 550px;
            height: 35px;
            padding-left: 5px;
          }
          .srchicon {
            position: absolute;
            right: 10px;
            transition: 250ms;
            &:hover {
              color: #4d614f;
            }
          }
        }
        .right {
          display: flex;
          gap: 1.5em;
          align-items: center;
          .whats {
            display: flex;
            gap: 0.35em;
            align-items: center;
          }
        }
      }
      .lower {
        border-top: 1px rgba(92, 92, 92, 0.486) solid;
        margin-top: 2.1em;
        .links {
          margin-top: 1em;
          display: flex;
          gap: 1.5em;
          .lin {
            &:hover {
              color: #fbc30c;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 992px) {
  .div{
    
  .right {
    .menu {
      display: none !important;
    }
  }
}}
@media (max-width: 992px) {
  .div{
    height: 100px !important;
    .upper {
      .srch {
        display: none !important;
      }
      .right {
        gap: 1em !important;
        .whats {
          display: none !important;
        }
      }
    }
    .lower {
      display: none;
    }
  }
  
}
</style>
