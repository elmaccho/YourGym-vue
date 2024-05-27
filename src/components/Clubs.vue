<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <div class="position-relative clubs-wrapper">
        <div class="map-wrapper m-5">
            <img class="map" src="@\assets\img\about\poland 1.svg" alt="Mapa polski">
            <img class="map-mobile" src="@\assets\img\about\poland 2.svg" alt="Mapa polski mobile">
            
            <div class="warsaw-location location-dot" data-aos="fade-up" data-aos-delay="300">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="warsaw-tag tag">Warszawa</span>
            </div>
            <div class="gdansk-location location-dot" data-aos="fade-up" data-aos-delay="50">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="gdansk-tag tag">Gdańsk</span>
            </div>
            <div class="olsztyn-location location-dot" data-aos="fade-up" data-aos-delay="100">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="olsztyn-tag tag">Olsztyn</span>
            </div>
            <div class="bialystok-location location-dot" data-aos="fade-up" data-aos-delay="200">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="bialystok-tag tag">Białystok</span>
            </div>
            <div class="lublin-location location-dot" data-aos="fade-up" data-aos-delay="400">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="lublin-tag tag">Lublin</span>
            </div>
            <div class="rzeszow-location location-dot" data-aos="fade-up" data-aos-delay="550">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="rzeszow-tag tag">Rzeszów</span>
            </div>
            <div class="krakow-location location-dot" data-aos="fade-up" data-aos-delay="600">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="krakow-tag tag">Kraków</span>
            </div>
            <div class="kielce-location location-dot" data-aos="fade-up" data-aos-delay="500">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="kielce-tag tag">Kielce</span>
            </div>
            <div class="lodz-location location-dot" data-aos="fade-up" data-aos-delay="350">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="lodz-tag tag">Łódź</span>
            </div>
            <div class="poznan-location location-dot" data-aos="fade-up" data-aos-delay="250">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="poznan-tag tag">Poznań</span>
            </div>
            <div class="szczecin-location location-dot" data-aos="fade-up" data-aos-delay="150">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="szczecin-tag tag">Szczecin</span>
            </div>
            <div class="wroclaw-location location-dot" data-aos="fade-up" data-aos-delay="450">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="wroclaw-tag tag">Wrocław</span>
            </div>
            <div class="bydgoszcz-location location-dot" data-aos="fade-up" data-aos-delay="200">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="bydgoszcz-tag tag">Bydgoszcz</span>
            </div>
            <div class="torun-location location-dot" data-aos="fade-up" data-aos-delay="200">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="torun-tag tag">Toruń</span>
            </div>
            <div class="katowice-location location-dot" data-aos="fade-up" data-aos-delay="550">
                <FontAwesomeIcon :icon="faLocationDot" class="location-dot-icon" />
                <span class="katowice-tag tag">Katowice</span>
            </div>
    
            
        </div>
        <div class="box">
            <h2>Nasze Kluby</h2>
            <img class="background-image" src="@\assets\img\about\waves_dark.svg" alt="">
            <router-link to="/kluby" class="yg-btn">Zobacz wszystkie</router-link>
        </div>
        <img class="gymgirl" src="@\assets\img\about\girlgym.png" alt="gym girl">
    </div>
</template>
<style scoped>
.clubs-wrapper{
    padding: 50px;
}
.map-wrapper{
    position: relative;
    z-index: 1;
    width: max-content;
    left: 55%;
    transform: translateX(-60%) scale(1.2);
}
.map{
    height: 570px;
    width: 600px;
    opacity: 80%;
}
.map-mobile{
    display: none;
    width: 100%;
    height: auto;
    opacity: 80%;
}
.location-dot-icon{
    z-index: 1;
    color: white;
    font-size: 40px;
    cursor: pointer;
}
.warsaw-location,
.gdansk-location,
.olsztyn-location,
.bialystok-location,
.lublin-location,
.rzeszow-location,
.krakow-location,
.kielce-location,
.lodz-location,
.poznan-location,
.szczecin-location,
.wroclaw-location,
.bydgoszcz-location,
.torun-location,
.katowice-location{
    position: absolute;
}
.tag{
    opacity: 0;
    position: absolute;
    background: white;
    padding: 5px 15px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.3s;
}
.bialystok-tag{
    left: 0;
}
.warsaw-location{
    top: 230px;
    right: 190px;
}
.warsaw-location:hover .tag{
    opacity: 1;
}
.gdansk-location{
    top: 15px;
    left: 230px;
}
.gdansk-location:hover .tag{
    opacity: 1;
}
.olsztyn-location{
    top: 70px;
    right: 200px;
}
.olsztyn-location:hover .tag{
    opacity: 1;
}
.bialystok-location{
    right: 40px;
    top: 140px;
}
.bialystok-location:hover .tag{
    opacity: 1;
    left: 0;
}
.lublin-location{
    right: 80px;
    bottom: 220px;
}
.lublin-location:hover .tag{
    opacity: 1;
}
.rzeszow-location{
    bottom: 100px;
    right: 120px;
}
.rzeszow-location:hover .tag{
    opacity: 1;
}
.krakow-location{
    right: 220px;
    bottom: 90px;
}
.krakow-location:hover .tag{
    opacity: 1;
}
.kielce-location{
    right: 190px;
    bottom: 160px;
}
.kielce-location:hover .tag{
    opacity: 1;
}
.lodz-location{
    right: 260px;
    bottom: 260px;
}
.lodz-location:hover .tag{
    opacity: 1;
}
.poznan-location{
    left: 140px;
    top: 210px;
}
.poznan-location:hover .tag{
    opacity: 1;
}
.szczecin-location{
    left: 20px;
    top: 110px;
}
.szczecin-location:hover .tag{
    opacity: 1;
}
.wroclaw-location{
    left: 150px;
    bottom: 190px;
}
.wroclaw-location:hover .tag{
    opacity: 1;
}
.bydgoszcz-location{
    left: 210px;
    top: 140px;
}
.bydgoszcz-location:hover .tag{
    opacity: 1;
}
.torun-location{
    top: 170px;
    left: 270px;
}
.torun-location:hover .tag{
    opacity: 1;
}
.katowice-location{
    bottom: 110px;
    left: 270px;
}
.katowice-location:hover .tag{
    opacity: 1;
}
.about-description-wrapper > p{
    width: 500px;
    font-size: 30px;
    color: white;
}
.about-description-wrapper > button{
    font-size: 30px;
}

.box{
    width: 400px;
    height: 400px;
    position: absolute;
    bottom: 0;
    left: 5%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
}
.box > h2 {
    color: white;
    width: max-content;
    text-align: center;
    font-size: 55px;    
    font-family: Venite;
    z-index: 2;
    width: 200px;
}
.background-image{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.gymgirl{
    position: absolute;
    width: 500px;
    top: 0;
    right: 35px;
}
@media screen and (max-width: 1412px) {
    .gymgirl{
        width: 400px;
    }
    .map-wrapper{
        transform: translateX(-60%);
    }
    .clubs-wrapper{
        padding: 0;
    }
}
@media screen and (max-width: 1385px){
    .map-location{
        width: 100%;
    }
    .map-location > img{
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
}
@media screen and (max-width: 1050px) {
    .clubs-wrapper{
        padding: 45px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .gymgirl{
        display: none;
    }
    .box > h2 {
        color: white;
        width: max-content;
        text-align: center;
        font-size: 70px;    
        font-family: Venite;
        z-index: 2;
        width: auto;
    }
    .map-wrapper{
        left: unset;
        transform: unset;
    }
    .box{
        position: relative;
        width: 90%;
        height: 250px;
        gap: 10px;
        left: unset;
    }
}
@media screen and (max-width: 640px){
    .location-dot{
        display: none;
    }
    .map-wrapper{
        transform: unset;
        width: 100%;
    }
    .map{
        display: none;
    }
    .map-mobile{
        display: block;
    }
}
</style>