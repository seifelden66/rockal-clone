<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
      .all
        .upper
            .loh(:style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
              logosLogo/ 
              p(style="margin-top:.7em; font-size:12px") {{$t('by seif')}} 
            .srch
                input(type="search", placeholder="search ")
                .srchicon(:style="$i18n.locale === 'ar' ? 'float:right' : 'float:left'")
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
            NuxtLink.lin.col(:to="localePath('/products')" @mouseover="showDropdown" @mouseleave="hideDropdown")
              h6 {{$t('products')}}
              transition(name="animate__animated" enter-active-class=" animate__fadeIn" leave-active-class="animate__fadeOut")
                .dropdown(v-if="dropDown" @mouseover="showDropdown")
                  div(v-for="i in products.categories")
                    NuxtLink.lin.col(:to="localePath('/categories/' + i.slug)")
                      .dropitems(v-for="item in i.translations")
                        p(v-if="item.languages_code.code.includes(lang)") {{ item.title }}
                  .smoothBoxWhite(style="background:#4d614f; border:none; padding:0 ") 
                    NuxtLink.lin.col(:to="localePath('/products')")
                      p {{$t('browse all')}} {{$t('products')}}
            NuxtLink.lin.col(:to="localePath('/store')")
              h6 {{$t('store')}}
            NuxtLink.lin.col(:to="localePath('/applications')")
              h6 {{$t('applications')}}
            NuxtLink.lin.col(:to="localePath('/projects')")
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
const lang = ref(locale);
const limit = ref(6);
const { data:products } = await useAsyncGql({
  operation: "products",
  variables: { limit }
});
const dropDown = ref(false)
function showDropdown() {
  dropDown.value = true
}
function hideDropdown(){
  dropDown.value = false
}
</script>

<style lang="scss" scoped>
.div {
  height: 180px;
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
            margin: auto -25px;
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
@media (min-width: 1180px) {
  .div{
    
  .right {
    .menu {
      display: none !important;
    }
  }
}}
@media (max-width: 1180px) {
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
