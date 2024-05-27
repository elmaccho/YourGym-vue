<script setup>
    import ReturnNavbar from '@/components/ReturnNavbar.vue';
    import Footer from '@/components/Footer.vue';

</script>
<template>
    <ReturnNavbar/>
    <div class="list-container">
        <h2 class="title">Nasze Kluby</h2>
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 13"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="13" aria-label="Slide 14"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="14" aria-label="Slide 15"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="@\assets\img\clubs\gdansk-1044857_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Gdansk</h5>
                    <router-link to="/kluby/gdansk" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\olsztyn-35.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Olsztyn</h5>
                    <router-link to="/kluby/olsztyn" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\szczecin-456750_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Szczecin</h5>
                    <router-link to="/kluby/szczecin" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\bydgoszcz-904093_1280.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Bydgoszcz</h5>
                    <router-link to="/kluby/bydgoszcz" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\torun-419209_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Torun</h5>
                    <router-link to="/kluby/torun" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\krasnoyarsk-6921747_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Bialystok</h5>
                    <router-link to="/kluby/bialystok" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\poznan-1670738_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Poznan</h5>
                    <router-link to="/kluby/poznan" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\warsaw-996626_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Warszawa</h5>
                    <router-link to="/kluby/warszawa" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\pollution-4796858_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Lodz</h5>
                    <router-link to="/kluby/lodz" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\view-of-the-city-994220_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Lublin</h5>
                    <router-link to="/kluby/lublin" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\old-town-5062333_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Wroclaw</h5>
                    <router-link to="/kluby/wroclaw" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\kielce-3776754_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Kielce</h5>
                    <router-link to="/kluby/kielce" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\katowice-2632551_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Katowice</h5>
                    <router-link to="/kluby/katowice" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\city-3669040_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Rzeszow</h5>
                    <router-link to="/kluby/rzeszow" class="yg-btn">Informacje</router-link>
                </div>
                </div>
                <div class="carousel-item">
                <img src="@\assets\img\clubs\church-5541729_1920.webp" class="d-block w-100 carousel-image" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Krakow</h5>
                    <router-link to="/kluby/krakow" class="yg-btn">Informacje</router-link>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <Footer/>
</template>
<style scoped>
    .title{
        font-size: 42px;
        margin: 25px 0;
        font-family: Venite Adoremus Straight Regular;
        color: white;
        text-align: center;
    }
    .carousel-item{
        height: 550px;
    }
    .carousel-caption{
        display: flex !important;
        flex-direction: column !important;
        align-items: center;
        gap: 20px;
        bottom: 50px;
    }
    .carousel-caption > h5{
        font-family: Venite Adoremus Straight Regular;
        font-size: 25px !important;
    }
    .carousel-image{
        filter: brightness(70%) grayscale(50%);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>