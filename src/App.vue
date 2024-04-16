<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Navbar/>
  <header id="header" class="header">
      <Header />
  </header>

  <RouterView />
</template>

<style scoped>
    .header{
        display: block;
        height: 90vh;
        background-image: url('@/assets/img/header/image-1.webp');
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        align-items: center;
        justify-content: space-around;
        overflow: hidden;
    }
    @media screen and (max-width: 850px) {
        .header{
            flex-direction: column;
            justify-content: center;
            align-content: center;
        }
      }
</style>
