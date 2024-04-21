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
                    Indoor Cycling
                </h1>
                <p>
                    Odkryj energetyzujące zajęcia indoor cycling w YourGym! Dołącz do nas na rowerze stacjonarnym i poczuj
                    niezwykłą energię, intensywność i radość. Nie ma miejsca, gdzie atmosfera jest tak ekscytująca, a jednocześnie
                    pełna potężnej energii i radości jak podczas jazdy w grupie po realistycznie zwizualizowanych trasach rowerowych.
                </p>
                <p>
                    Czy wiesz, że podczas jednej sesji indoor cycling możesz spalić nawet do 800 kalorii? To więcej niż niektóre Twoje 
                    ulubione dania. To świetne wieści dla wszystkich tych, którzy dążą do redukcji wagi i pozbycia się zbędnego tłuszczu. 
                    Ale to nie wszystko! Zajęcia na rowerze pomagają również wyrzeźbić mięśnie pośladków i nóg, co sprawia, że czujesz się 
                    pewniej. Nasze zajęcia indoor cycling są dostosowane do wszystkich poziomów umiejętności.
                </p>
                <strong>
                    Dołącz do nas na zajęciach i przekonaj się, że warto!
                </strong>
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