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
            ul.list
                li.listItem
                    nuxt-link(:to="localePath('/')" class="lin" ) {{$t('home')}}
               
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
      padding: 1em;
      .social{
        margin-top: 30px;
        display: flex;
        gap: 5px;
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
        font-size:30px;
        border: none;
        background: #000;
        color: #fff;
        transform: translatex(180px);
      }
      .list {
        list-style: none;
        padding: 1em;
        text-decoration: none;
        color: #fff;
        .listItem {
          color: #fff;
          margin-top: 1em;
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