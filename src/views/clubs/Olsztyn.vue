<script setup>
    import ReturnNavbar from '@/components/ReturnNavbar.vue';
    import Footer from '@/components/Footer.vue';
</script>
<template>
    <ReturnNavbar/>
    <div class="city-container">
        <div class="city-gym-data">
            <div class="city-info">
                <h2>Olsztyn</h2>
                <h2>Bałtycka</h2>
            </div>
            <div class="city-address">
                <p>Bałtycka 15</p>
                <p>10-001 Olsztyn</p>
                <p>tel. +48 111 222 333</p>
            </div>
        </div>
        <div class="background-photo">
            <img class="main-image" src="@\assets\img\clubs\olsztyn-35.webp" alt="">
            <img class="bg-image" src="@\assets\img\clubs\waves_dark.svg" alt="">
        </div>
    </div>
    <Footer class="pt-5"/>
</template>
<style scoped>
    .city-container{
        width: 100%;
        padding: 50px;        

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgb(20, 20, 20) 100%);
    }
    .background-photo{
        position: relative;
        width: max-content;
    }
    .main-image{
        width: 100%;
        max-width: 1100px;
        height: 70vh;
        object-fit: cover;

        position: relative;

        filter: brightness(50%);
        z-index: 1;
    }
    .bg-image{
        position: absolute;
        left: -70px;
        bottom: -70px;

        width: 100%;
        max-width: 1100px;
        height: 70vh;
        object-fit: cover;
        z-index: 0;
    }
    .city-gym-data{
        height: 60%;
        position: absolute;
        left: 50px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: 2;
    }
    .city-info > h2{
        color: white;
        font-size: 80px;
        font-weight: 800;
        letter-spacing: 5px;

        text-shadow: 5px 5px 0px #888888;
    }
    .city-address > p{
        color: white;
        font-size: 40px;
        margin: 0;
    }

    @media screen and (max-width: 1064px) {
        .city-container{
            padding: 20px;
        }
        .background-photo{
            width: 100%;
        }
    }
    @media screen and (max-width: 550px) {
        .city-gym-data{
            left: 50%;
            top: 50px;
            transform: translateX(-50%);
            height: auto;
        }
        .city-info > h2{
            font-size: 50px;
        }
        .city-address > p{
            font-size: 20px;
        }

        .bg-image{
            left: -10px;
            bottom: -10px;
        }
    }
</style>