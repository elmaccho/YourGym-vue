<script setup>
    import ReturnNavbar from '@/components/ReturnNavbar.vue';
    import Footer from '@/components/Footer.vue';
</script>
<template>
    <ReturnNavbar />
    <div class="p-3">
        <div class="main-content">
            <div class="image-container">
                <img class="offert-img" src="@\assets\img\offert\subpage\pexels-artempodrez-7648096.webp" alt="">
            </div>
            <div class="text-container">
                <h1 class="title-page">
                    Squash
                </h1>
                <p>
                    Squash to dynamiczny i intensywny sport rakietowy, który angażuje graczy w szybkie i 
                    strategiczne wymiany piłki. Gra odbywa się na zamkniętym boisku z czterema ścianami, 
                    gdzie zawodnicy używają specjalnych rakiet do odbijania gumowej piłki. Celem jest odbijanie piłki tak, 
                    aby przeciwnik nie mógł jej zwrócić przed dwukrotnym odbiciem o ścianę lub podłogę.
                </p>
                <p>
                    Rezerwacja boiska do squash'a w naszej siłowni odbywa się telefonicznie lub osobiście na recepcji. 
                    Zapraszamy do kontaktu i korzystania z tej dynamicznej dyscypliny, która doskonale rozwija kondycję 
                    fizyczną oraz refleks!
                </p>
            </div>
        </div>
        <div class="offert-row">
            <div class="price-container">
                <h2>Cennik</h2>
                <span>
                    <span class="price-row">
                        <p class="price-row-title">Piłeczka</p>
                        <p>5 zł</p>
                    </span>
                    <span class="price-row">
                        <p class="price-row-title">Rakieta</p>
                        <p>7,50 zł</p>
                    </span>
                    <span class="price-row">
                        <p class="price-row-title">Kort</p>
                        <p>20 zł/h</p>
                    </span>
                </span>
            </div>
            <div class="more-info">
                Dla klubowiczów dostępne jest 
                2h gry miesięcznie bez opłat.
            </div>
        </div>
    </div>
    <Footer/>
</template>
<style scoped>
    .main-content{
        display: flex;
        gap: 20px;
    }
    .offert-img{
        max-width: 600px;
    }
    .text-container{
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: white;
    }
    .title-page{
        font-weight: 700;
        font-size: 80px;
    }
    .offert-row{
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;
    }
    .price-container{
        display: flex;
        flex-direction: column
    }
    .price-row{
        display: flex;
        gap: 20px;
    }
    .price-row-title{
        width: 90px;
    }
    .more-info{
        font-size: 20px;
        font-weight: 600;
    }
    @media screen and (max-width: 1025px) {
        .main-content{
            flex-direction: column;
        }
        .offert-img{
            max-width: unset;
            width: 100%;
            max-height: 400px;
            object-fit: cover;
        }
    }
    @media screen and (max-width: 773px){
        .offert-row{
            flex-direction: column-reverse;
            gap: 30px;
        }
    }
</style>