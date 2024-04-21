<script setup></script>
<template>
    <div class="about-container">
        <div class="image-container">
            <img class="about-image" src="@\assets\img\about\pexels-andres-ayrton-6551074-_1_.webp" alt="about us image">
            <img class="about-waves" src="@\assets\img\about\waves_dark.svg" alt="waves svg">
        </div>
        <div class="text-container">
            <div class="title">
                <h2>O nas</h2>
            </div>
            <div class="description">
                <p>
                    <strong class="yg-main">YourGym</strong> to największa sieć siłowni w Polsce, oferująca różnorodne usługi fitnessowe
                    dla wszystkich. Dzięki profesjonalnemu podejściu, innowacjom i przyjaznej atmosferze, przyciąga zarówno doświadczonych 
                    sportowców, jak i początkujących.
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .about-container{
        padding: 80px 15px;
        display: flex;
        justify-content: center;
        gap: 65px;
    }
    .image-container{
        position: relative;
        width: 600px;
    }
    .about-image{
        width: 600px;
        position: relative;
    }
    .about-waves{
        width: 600px;
        height: 300px;
        position: absolute;
        right: -50px;
        bottom: -50px;
        z-index: -1;
    }
    .text-container{
        max-width: 550px;
    }
    .title > h2{
        font-size: 70px;
        color: white;
        font-family: Venite Adoremus Regular;
    }
    .description > p {
        color: white;
        font-size: 20px;
    }
    @media screen and (max-width: 1200px) {
        .image-container, .about-image, .about-waves{
            width: 450px;
        }
    }
    @media screen and (max-width: 960px) {
        .about-container{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        } 
        .text-container{
            max-width: unset;
            width: 90%;
        }
        .image-container{
            width: 75%;
            max-width: 550px;
        }
        .about-image{
            width: 100%;
            max-width: 550px;
        }
        .about-waves{
            width: 100%;
            max-width: 550px;
            height: 100%;
        }
    }
    @media screen and (max-width: 470px) {
        .about-container{
            gap: 20px;
        }
        .image-container{
            width: 90%;
            max-width: unset;
        }
        .about-image{
            max-width: unset;
        }
        .about-waves{
            max-width: unset;
            bottom: -20px;
            right: -20px;
        }
        .title > h2{
            font-size: 60px;
        }
    }
</style>