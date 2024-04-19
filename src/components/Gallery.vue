<template>
    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="carousel-image d-block w-100" src="@\assets\img\gallery\pexels-bruno-bueno-2204196.webp" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="carousel-image d-block w-100" src="@\assets\img\gallery\pexels-andrea-piacquadio-903171.webp" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="carousel-image d-block w-100" src="@\assets\img\gallery\pexels-photo-3253501.webp" alt="Third slide">
            </div>
            <div class="carousel-item">
                <img class="carousel-image d-block w-100" src="@\assets\img\gallery\pexels-pixabay-414029.webp" alt="Third slide">
            </div>
            <div class="carousel-item">
                <img class="carousel-image d-block w-100" src="@\assets\img\gallery\pexels-victor-freitas-703012.webp" alt="Third slide">
            </div>
            <div class="carousel-item">
                <img class="carousel-image d-block w-100" src="@\assets\img\gallery\pexels-victor-freitas-703016.webp" alt="Third slide">
            </div>
            <div class="carousel-item">
                <img class="carousel-image d-block w-100" src="@\assets\img\gallery\pexels-victor-freitas-2261485.webp" alt="Third slide">
            </div>
            <div class="carousel-item">
                <img class="carousel-image d-block w-100" src="@\assets\img\gallery\pexels-william-choquette-1954524.webp" alt="Third slide">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<style scoped>
    .carousel-image{
        height: 500px;
        object-fit: cover;
    }
    @media screen and (max-width: 460px) {
        .carousel-image{
            height: 300px;
        }   
    }
</style>