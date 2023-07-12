<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .container-fluid
        .navBar(:style="$i18n.locale === 'ar' ? 'display:flex; justify-content:right' : 'direction:ltr'")  
                h1 {{$t('contact')}}
        .btm 
            .left
                .item
                    .label(:style="$i18n.locale === 'ar' ? 'display:flex; justify-content:right' : 'direction:ltr'")
                        label(for="fullname") {{$t('fullname')}}
                    .inp
                        input#fullname(type="text")
                .item 
                    .label(:style="$i18n.locale === 'ar' ? 'display:flex; justify-content:right' : 'direction:ltr'")
                        label(for="email") {{$t('email')}}
                    .inp
                        input#email(type="email")
                .item 
                    .label(:style="$i18n.locale === 'ar' ? 'display:flex; justify-content:right' : 'direction:ltr'")
                        label(for="phone") {{$t('phone')}}
                    .inp
                        input#phone(type="text")
                .item 
                    .label(:style="$i18n.locale === 'ar' ? 'display:flex; justify-content:right' : 'direction:ltr'")
                        label(for="message") {{$t('message')}}
                    .inp
                        textarea#message
                .bb
                    .smoothBoxWhite 
                        h6 {{$t('submit')}}

            .right 
                .title 
                    h1 contact
                .btmbtm
                    h6   
                        LogosPhone/
                        span  574395624656462456
                    h6   
                        LogosWhats/
                        span  57439345234563456
                    h6   
                        LogosMail/
                        span  info@rockal.org
                    h6   
                        LogosMail/
                        span  info@rockal.org
                .social
                    .circle 
                        LogosTwitter
                    .circle 
                        LogosFace/
                    .circle 
                        LogosInsta/
                        
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.div {
    margin: 0 !important;
    background: #f8f8f8;
    padding-top: 7em;
    padding-bottom: 1em;
    .container-fluid {
      .navBar {
        margin-bottom: 2em;
      }
      .btm{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        .left{
            display: flex;
            flex-direction: column;
            gap: 1em;
            .bb{
                display: flex;
                width: 10vw;
                .smoothBoxWhite{
                    background: rgb(22, 109, 22);
                    border: none;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    transition: 300ms;
                    &:hover{
                        background: rgb(8, 75, 8);
                    }
                }
            }
        .item{
            display: flex;
            flex-direction: column;
            width: 100%;
            input{
                width: 100%;
            }
            textarea{
                width: 100%; 
            }
        }
        }
        .right{
            position: relative;
            background: #262c27;
            color: white;
            padding: 1em;
            border-radius: 10px;
            .btmbtm{
                display: flex;
                flex-direction: column;
                gap: 1em;
                margin-top: 1.7em;
            }
            .social{
                position: absolute;
                bottom: 1.5em;
                left: 1.3em;
                display: flex;
                gap: 0.7em;
                .circle{
                    background:white;
                    color:#262c27;
                    transition: 300ms;
                    &:hover{
                        background: rgb(22, 109, 22);
                        border: none;
                    }
                }
            }
            
        }
      }
    }
}
@media (max-width:768px) {
    .div {
padding-top: 5em;
        .container-fluid {
        
          .btm{
            display: grid;
            grid-template-columns: 1fr ;
            
            .left{
                display: flex;
                flex-direction: column;
                gap: 1em;
            .bb{
                width: 30vw;
            }
            }
            .right{
                .social{
                    margin-top: 1em;
                    position: static;
                }
            }
          
          }
        }
    }
}
</style>