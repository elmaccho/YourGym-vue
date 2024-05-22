<script setup>
    import ReturnNavbar from '@/components/ReturnNavbar.vue';
    import Footer from '@/components/Footer.vue';
</script>
<template>
    <ReturnNavbar />
    <div class="p-3">
        <div class="main-content">
            <div class="image-container">
                <img class="offert-img" src="@\assets\img\offert\subpage\pexels-anete-lusina-5240640.webp" alt="">
                <img class="offert-img" src="@\assets\img\offert\subpage\pexels-heyho-8092430.webp" alt="">
                <img class="offert-img" src="@\assets\img\offert\subpage\pexels-ron-lach-9165662.webp" alt="">
            </div>
            <div class="text-container">
                <h1 class="title-page">
                    Strefa relaksu
                </h1>
                <p>
                    Zapewniamy również strefę relaksu w YourGym, gdzie możesz zregenerować 
                    ciało i umysł po intensywnym treningu. Nasza strefa relaksu obejmuje:
                </p>
                <p>
                    Podczas zajęć fitness skupiamy się na różnych aspektach treningu, takich jak:
                </p>
                <ul>
                    <li class="mb-3">
                        <b>Saunę parową:</b> Idealną do oczyszczenia skóry i uwalniania napięcia mięśniowego. Sauna parowa pomaga w relaksie i poprawie krążenia krwi.
                    </li>
                    <li class="mb-3">
                        <b>Saunę suchą:</b> Zapewniającą głębokie odprężenie poprzez suchą ciepło. Sauna sucha wspomaga eliminację toksyn i przynosi ulgę dla mięśni.
                    </li>
                    <li class="mb-3">
                        <b>Pokój masażu:</b> Gdzie nasi wykwalifikowani masażysci oferują różnorodne masaże, które pomagają w złagodzeniu napięcia, redukcji bólu mięśniowego i poprawie elastyczności.
                    </li>
                </ul>
                <p>
                    Poza tym, w naszej strefie relaksu znajdziesz spokojną atmosferę sprzyjającą regeneracji. 
                    To idealne miejsce, aby zadbać o swoje ciało po treningu i zregenerować się przed powrotem do codziennych zajęć.
                </p>
            </div>
        </div>
    </div>
    <Footer/>
</template>
<style scoped>
    .main-content{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .image-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .offert-img{
        width: 300px;
        height: 300px;
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
    @media screen and (max-width: 720px) {
        .image-container{
            display: flex;
            flex-wrap: unset;
            flex-direction: column;
        }
        .offert-img{
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
    }
</style>