<script setup>
    import ReturnNavbar from '@/components/ReturnNavbar.vue';
    import Footer from '@/components/Footer.vue';
</script>
<template>
    <ReturnNavbar />
    <div class="p-3">
        <div class="main-content">
            <div class="image-container">
                <img class="offert-img" src="@\assets\img\offert\subpage\pexels-olly-863977.webp" alt="">
            </div>
            <div class="text-container">
                <h1 class="title-page">
                    Fitness
                </h1>
                <p>
                    Zajęcia fitness to doskonały sposób na poprawę kondycji fizycznej, utrzymanie zdrowia oraz 
                    osiągnięcie swoich fitnessowych celów. Nasza siłownia oferuje różnorodne zajęcia fitness, 
                    które są dostępne dla osób o różnym poziomie zaawansowania i zainteresowaniach.
                </p>
                <p>
                    Podczas zajęć fitness skupiamy się na różnych aspektach treningu, takich jak:
                </p>
                <ul>
                    <li class="mb-3">
                        <strong>Aerobik i cardio:</strong> Zajęcia oparte na dynamicznych ruchach, które poprawiają wytrzymałość sercowo-naczyniową i spalają kalorie. Może to obejmować choreografię, kroki taneczne lub interwały na przyrządach cardio.
                    </li>
                    <li class="mb-3">
                        <strong>Trening siłowy:</strong> Zajęcia koncentrujące się na wzmacnianiu mięśni za pomocą obciążeń takich jak hantle, sztangi, gumowe opaski czy waga ciała. Celem jest zwiększenie siły, wytrzymałości oraz kształtowanie sylwetki.
                    </li>
                    <li class="mb-3">
                        <strong>Pilates i stretching:</strong> Zajęcia skupiające się na poprawie elastyczności, równowagi i siły mięśni głębokich, wzmacniając przy tym mięśnie rdzenia.
                    </li>
                    <li class="mb-3">
                        <strong>Zajęcia interwałowe:</strong> Trening oparty na intensywnych okresach wysiłku z krótkimi przerwami, mający na celu poprawę wydolności fizycznej i spalanie tkanki tłuszczowej.
                    </li>
                    <li>
                        <strong>Zajęcia funkcjonalne:</strong> Ćwiczenia angażujące całe ciało, które poprawiają kondycję ogólną, siłę i sprawność funkcjonalną.
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <Footer />
</template>
<style scoped>
    .main-content{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .offert-img{
        width: 100%;
        height: 400px;
        object-fit: cover;
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
    @media screen and (max-width: 1025px) {
        .offert-img{
            max-width: unset;
            max-height: unset;
            width: 100%;
            height: 400px;
            object-fit: cover
        }
    }
</style>