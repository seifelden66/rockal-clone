<template lang="pug">
div(v-for="i in data.categories")
    div(v-for="item in i.translations")
        .fr(v-if="item.languages_code.code.includes(lang)")
            h4 {{ item.title }}
            
        
                
</template>

<script setup lang="ts">
const props = defineProps(["data", "lang"]);
</script>

