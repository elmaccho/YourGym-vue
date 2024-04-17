<script setup>
    
</script>
<template>
    <div class="offerts-wrapper">
        <div class="yg-card">
            <div class="yg-card-background">
                <img src="@/assets/img/offert/fitness-3502830_1920.webp" class="yg-background" alt="Siłownia">
            </div>
            <div class="yg-card-content">
                <i class="fa-solid fa-dumbbell"></i>
                <h3 class="yg-card-title">Siłownia</h3>
                <p class="yg-card-description">Najnowocześniejszy sprzęt i fachowi trenerzy</p>

                <!-- <a href="#" class="text-decoration-none read-more">Czytaj więcej</a> -->
                <router-link to="/oferta/silownia" class="text-decoration-none read-more">Czytaj więcej</router-link>
            </div>
        </div>
        <div class="yg-card">
            <div class="yg-card-background">
                <img src="@/assets/img/offert/yoga-3772674_1920.webp" class="yg-background" alt="Fitness">
            </div>
            <div class="yg-card-content">
                <i class="fa-solid fa-child-reaching"></i>
                <h3 class="yg-card-title">Fitness</h3>
                <p class="yg-card-description">Wdzięk i delikatność Zumba, Joga, Pilates, Step i inne zajęcia</p>

                <router-link to="/oferta/fitness" class="text-decoration-none read-more">Czytaj więcej</router-link>
            </div>
        </div>
        <div class="yg-card">
            <div class="yg-card-background">
                <img src="@/assets/img/offert/shutterstock_644248165-1024x684.webp" class="yg-background" alt="Squash">
            </div>
            <div class="yg-card-content">
                <i class="fa-solid fa-baseball"></i>
                <h3 class="yg-card-title">Squash</h3>
                <p class="yg-card-description">Tenis innaczej. Ekskluzywny sport na wyciągnięcie rakiety!</p>

                <a href="#" class="text-decoration-none read-more">Czytaj więcej</a>
            </div>
        </div>
        <div class="yg-card">
            <div class="yg-card-background">
                <img src="@/assets/img/offert/sports-1962574_1920.webp" class="yg-background" alt="Indoor cycling">
            </div>
            <div class="yg-card-content">
                <i class="fa-solid fa-bicycle"></i>
                <h3 class="yg-card-title">Indoor cycling</h3>
                <p class="yg-card-description">Czyli jazda na specjalnym rowerze stacjonarnym lub trenażerze</p>

                <a href="#" class="text-decoration-none read-more">Czytaj więcej</a>
            </div>
        </div>
        <div class="yg-card">
            <div class="yg-card-background">
                <img src="@/assets/img/offert/woman-936549_1920.webp" class="yg-background" alt="Strefa Relaksu">
            </div>
            <div class="yg-card-content">
                <i class="fa-solid fa-bed"></i>
                <h3 class="yg-card-title">Strefa Relaksu</h3>
                <p class="yg-card-description">Odpoczynek połączony z relaksem w świetnej aranżacji</p>

                <a href="#" class="text-decoration-none read-more">Czytaj więcej</a>
            </div>
        </div>
        <div class="yg-card">
            <div class="yg-card-background">
                <img src="@/assets/img/offert/5d4ac0ab914e9.webp" class="yg-background" alt="Aktywność 50+">
            </div>
            <div class="yg-card-content">
                <i class="fa-solid fa-plus"></i>
                <h3 class="yg-card-title">50+</h3>
                <p class="yg-card-description">Bądź aktywny i szczęśliwy po 50-tce!</p>

                <a href="#" class="text-decoration-none read-more">Czytaj więcej</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @keyframes imagePulse {
        0%{
            background-color: #232323;
        }
        50%{
            background-color: #232323d0;
        }
        100%{
            background-color: #232323;
        }
    }
    
    .offerts-wrapper{
        display: grid;
        grid-template-columns: auto auto auto;
    }
    .yg-card{
        display: flex;
        position: relative;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        height: 380px;
        background-color: #232323;
        transition: background-color 0.3s;
        animation-name: imagePulse;
        animation-duration: 5s;
        animation-iteration-count: infinite;
    }
    .yg-card:hover{
        animation-name: none;
        background-color: #2323237a;
        transition: 0.3s;
    }
    .yg-card:nth-child(1){
        animation-delay: 300ms;
    }
    .yg-card:nth-child(2){
        animation-delay: 600ms;
    }
    .yg-card:nth-child(3){
        animation-delay: 900ms;
    }
    .yg-card:nth-child(4){
        animation-delay: 1200ms;
    }
    .yg-card:nth-child(5){
        animation-delay: 1500ms;
    }
    .yg-card:nth-child(6){
        animation-delay: 1800ms;
    }
    .yg-card-background{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .yg-background{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .yg-card-content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .yg-card-content > i {
        font-size: 56px;
        color: white;
    }
    .yg-card-title{
        color: #F35B00;
        font-weight: 600;
        font-size: 38px;
    }
    .yg-card-description{
        color: white;
        font-size: 22px;
        max-width: 360px;
        min-height: 130px;
        text-align: center;
    }
    .read-more{
        background-color: #F35B00;
        color: white;
        border: none;
        padding: 8px 40px;
        border-radius: 12px;
        cursor: pointer;
        transition: 0.3s;
    }
    .read-more:hover{
        background-color: #c94e06;
    }

    @media screen and (max-width: 1141px) {
        .offerts-wrapper{
            grid-template-columns: auto auto;
        }
    }
    @media screen and (max-width: 850px) {
        .offerts-wrapper{
            grid-template-columns: auto;
        }
    }
</style>