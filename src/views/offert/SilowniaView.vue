<script setup>
    import ReturnNavbar from '@/components/ReturnNavbar.vue';
    import Footer from '@/components/Footer.vue';

</script>
<template>
    <ReturnNavbar />
    <div class="p-3">
        <div class="main-content">
            <div class="image-container">
                <img class="offert-img" src="@\assets\img\offert\subpage\pexels-julia-larson-6456008.webp" alt="">
            </div>
            <div class="text-container">
                <h1 class="title-page">
                    Siłownia
                </h1>
                <p>
                    Nasza siłownia to miejsce dedykowane wszystkim pasjonatom fitnessu, zarówno początkującym, jak i zaawansowanym sportowcom. 
                    Oferujemy nowoczesne wyposażenie, przyjazną atmosferę i profesjonalną obsługę, aby zapewnić naszym klientom 
                    optymalne warunki do osiągania swoich celów fitnessowych.
                </p>
                <p>
                    Nasi doświadczeni trenerzy oferują różnorodne treningi, dopasowane do indywidualnych 
                    potrzeb i poziomu kondycji każdego klienta. Oto kilka rodzajów treningów, które możemy zaoferować:
                </p>
                <b>
                    Trening siłowy
                </b>
                <b>
                    Trening funkcjonalny
                </b>
                <b>
                    Trening cardio
                </b>
                <b>
                    Zajęcia grupowe
                </b>
                <b>
                    Trening personalny
                </b>
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
        max-height: 600px;
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
        .main-content{
            flex-direction: column;
        }
        .offert-img{
            max-width: unset;
            max-height: unset;
            width: 100%;
            height: 400px;
            object-fit: cover
        }
    }
</style>