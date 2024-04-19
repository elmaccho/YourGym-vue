<script setup>
    import ReturnNavbar from '@/components/ReturnNavbar.vue';

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faClock } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <ReturnNavbar />
    <div class="ticket-container">
        <div class="ticket-name mb-5">
            <FontAwesomeIcon :icon="faClock" class="ticket-icon mb-3"/>
            <div class="ticket-price mb-2">
                <span><strong>129,00 zł</strong><span class="length">/ miesiąc</span></span>
            </div>
            <div class="ticket-title">
                Karnet <strong>RANO</strong>
            </div>
            <div class="background-highlight"></div>
        </div>
        <div class="ticket-info">
            <div class="ticket-row">
                <span class="ticket-description"><p>Opłata wpisowa:</p><strong>39 PLN</strong></span>
                <hr>
            </div>
            <div class="ticket-row">
                <span class="ticket-description"><p>Nielimitowany dostęp 24h:</p><strong>NIE</strong></span>
                <hr>
            </div>
            <div class="ticket-row">
                <span class="ticket-description"><p>Zajęcia grupowe w cenie:</p><strong>TAK</strong></span>
                <hr>
            </div>
            <div class="ticket-row mb-3">
                <span class="ticket-description"><p>Możliwość zamrożenia karnetu:</p><strong>TAK</strong></span>
                <hr>
            </div>

            <router-link to="/zakup" class="yg-btn">Kup Karnet</router-link>
        </div>
    </div>
</template>
<style scoped>
    .ticket-container{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100vh;

        background-image: url('@/assets/img/tickets/css-pattern-by-magicpattern.webp');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .ticket-name{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 20px 35px;
    }
    .background-highlight{
        display: block;
        background-color: #FF6B00;
        border-radius: 23px;

        width: 100%;
        height: 70%;

        position: absolute;
        bottom: 0;
    }
    .ticket-icon, .ticket-price, .ticket-title{
        color: white;
        z-index: 1;
    }
    .ticket-icon{
        font-size: 140px;
    }
    .ticket-price{
        font-size: 45px;
    }
    .ticket-title{
        font-size: 50px;
    }
    .length{
        font-size: 30px;
    }

    .ticket-info{
        background-color: #FF6B00;
        border-radius: 23px;
        padding: 35px 25px;
        min-width: 450px;

        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .ticket-row{
        width: 100%;
    }
    .ticket-description{
        display: flex;
        justify-content: space-between;
    }
    .ticket-description > p,strong{
        margin: 0;
        color: white;
    }

    .yg-btn::before{
        background-color: #232323;
    }
    .yg-btn::after{
        border-color: #232323;
    }
    @media screen and (max-width: 900px) {
        .ticket-container{
            flex-direction: column;
        }
        .ticket-price{
            font-size: 40px;
        }
        .ticket-info{
            min-width: unset;
            width: 90%;
        }
        .ticket-title{
            font-size: 40px;
        }
    }
    @media screen and (max-width: 666px) {
        .ticket-name{
            min-width: unset;
            width: 90%;
        }
        .ticket-price{
            font-size: 30px;
        }
    }
</style>