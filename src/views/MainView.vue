<script setup>
    import Navbar from '@/components/Navbar.vue';
    import Header from '@/components/Header.vue';
    import Offert from '@/components/Offert.vue';
    import Clubs from '@/components/Clubs.vue';
    import About from '@/components/About.vue';
</script>

<template>
    <Navbar />
    <header id="header" class="header">
        <Header />
    </header>
    <main>
        <Clubs id="clubs"/>
        <About id="about"/>
        <Offert id="offert"/>
    </main>
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