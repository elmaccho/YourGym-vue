<template>
    <div class="brand-logo-wrapper" data-aos="fade">
        <img src="@/assets/img/header/yourgymlogo-1.webp" alt="Brand Logo">
    </div>
    <div class="brand-slogan-wrapper" data-aos="fade-left" data-aos-once="true">
        <h2 class="slogan">Nie bój się być początkującym!</h2>
        <a href="#tickets" class="btn yg-btn">Zapisz się</a>
    </div>
</template>
<style scoped>
    .slogan{
        font-size: 80px;
        width: 650px;

        text-align: center;
        color: white;
    }
    .brand-slogan-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
    .brand-slogan-wrapper > a {
        font-size: 35px;
        width: 300px;
    }
    @media screen and (max-width: 1075px) {
        .slogan{
            font-size: 50px;
            max-width: 400px;
        }
        .brand-slogan-wrapper > button {
            font-size: 25px;
            width: 200px;
        }
        .brand-logo-wrapper > img{
            width: 80%;
        }
        .tickets > .section-title{
            font-size: 70px;
        }
    }
    @media screen and (max-width: 850px) {
        .brand-logo-wrapper > img{
            width: 100%;
        }
    }
</style>