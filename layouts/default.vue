<template >
<div class="main">
    <Nav class="fixed-nav"/>
    <SideBar />
    <slot class="main-content" />

</div>
    

</template>
<style>
.main{
    position: relative;
}

  
.fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
  }

</style>