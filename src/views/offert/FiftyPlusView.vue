<script setup>
    import ReturnNavbar from '@/components/ReturnNavbar.vue';
</script>
<template>
    <ReturnNavbar />
    <div class="p-3">
        <div class="main-content">
            <div class="image-container">
                <img class="offert-img" src="@\assets\img\offert\5d4ac0ab914e9.webp" alt="">
            </div>
            <div class="text-container">
                <h1 class="title-page">
                    50+
                </h1>
                <p>
                    Regularna aktywność fizyczna, starannie dobrane zestawy ćwiczeń oraz wsparcie doświadczonego trenera to klucz do 
                    Twojego zdrowia i lepszej jakości życia!
                    W YourGym znajdziesz wszystko, czego potrzebujesz, aby Twoje życie stało się znacznie lepsze i bardziej komfortowe!
                </p>
                <p>
                    Poznaj korzyści, jakie czekają na Ciebie po 50. roku życia dzięki regularnym wizytom w YourGym:
                </p>
                <ul>
                    <li class="mb-3">
                        Poprawiasz się fizycznie i psychicznie.
                    </li>
                    <li class="mb-3">
                        Minimalizujesz dolegliwości bólowe.
                    </li>
                    <li class="mb-3">
                        Zapobiegasz cukrzycy, miażdżycy, otyłości oraz chorobom stawów.
                    </li>
                    <li class="mb-3">
                        Poprawiasz jakość snu, gdyż regularne ćwiczenia pomagają zasnąć szybciej.
                    </li>
                    <li>
                        Zmniejszasz poziom stresu, lęku, obaw i depresji, dbając o zdrowie psychiczne.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .main-content{
        display: flex;
        gap: 20px;
    }
    .offert-img{
        width: 550px;
        height: 450px;
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
        .main-content{
            flex-direction: column;
        }
        .offert-img{
            max-width: unset;
            max-height: unset;
            object-position: top;
            width: 100%;
            height: 400px;
            object-fit: cover
        }
    }
</style>