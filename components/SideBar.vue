<template lang="pug">
div
    aside
      transition(
          enter-to-class="animate__animated animate__slideInLeft",
          leave-to-class="animate__animated animate__slideOutLeft"
      )
          div.side(v-show="side")
              button(@click="close")
                  h1 x
              ul.list(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                  li.listItem
                      nuxt-link.lin.col(:to="localePath('/')" ) {{$t('home')}}
                  li.listItem
                    NuxtLink.lin.col(:to="localePath('/about')") {{$t('about')}}
                  li.listItem
                    NuxtLink.lin.col(:to="localePath('/products')") {{$t('products')}}
                  li.listItem
                    NuxtLink.lin.col(:to="localePath('/store')") {{$t('store')}}
                  li.listItem
                    NuxtLink.lin.col(:to="localePath('/applications')") {{$t('applications')}}
                  li.listItem
                    NuxtLink.lin.col(:to="localePath('/projects')") {{$t('projects')}}
                  li.listItem
                    NuxtLink.lin.col(:to="localePath('/RnD')") {{$t('R & D')}}
                  li.listItem
                    NuxtLink.lin.col(:to="localePath('/press')") {{$t('press')}}
                  li.listItem
                    NuxtLink.lin.col(:to="localePath('/contact')") {{$t('contact')}}
                  .social 
                    .it
                        LogosFacebook/
                    .it
                        LogosInsta/
                    .it
                        LogosTwitter/
                    .it
                        LogosYoutube
</template>
    <script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    </script>
    <style lang="scss" scoped>
    .animate__animated.animate__slideInLeft,
    .animate__animated.animate__slideOutLeft{
        animation-duration: 600ms;
      }
    .side {
      font-size: 26px;
      background: #000;
      color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 270px;
      z-index: 999;
      padding: .75em;
      .social{
        margin-top: 20px;
        display: flex;
        gap: 4px;
        font-size: 18px;
        .it{
          &:hover{
            text-decoration: none;
            color: rgb(221, 59, 86);
            cursor: pointer;
          }
        }
       
      }
      
      button {
        
        border: none;
        background: #000;
        color: #fff;
        transform: translatex(200px);
      }
      .list {
        list-style: none;
        text-decoration: none;
        color: #fff;
        .listItem {
          color: #fff;
          margin-top: .5em;
          .lin {
            text-decoration: none;
            color: inherit;
            
            &:hover {
              text-decoration: none;
              color: rgb(221, 59, 86);
            }
          }
        }
      }
    }
    </style>