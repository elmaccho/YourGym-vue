<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPhone, faPaperPlane, faMap } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isOnHomePage = () => {
    return route.path === '/';
};

const scrollToSection = (sectionId) => {
    if (!isOnHomePage()) {
        router.push('/');
    }

    setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300);
};
</script>

<template>
    <div class="footer-container">
        <div class="footer-content">
            <div class="map-location">
                <!-- <img src="@/assets/img/footer/das.jpg" alt="Lokalizacja siłowni"> -->
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d513.9252041375793!2d20.94971851228989!3d52.21333424667442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb572c041cc9%3A0xb72de3443923b5e8!2sal.%20Jerozolimskie%20148%2C%2002-326%20Warszawa!5e0!3m2!1spl!2spl!4v1716922933424!5m2!1spl!2spl" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="brand-info-wrapper">
                <div class="d-flex align-items-center gap-3 brand-wrapper">
                    <img src="@\assets\img\header\yourgymlogo-1.webp" class="mb-3 footer-brand-logo" alt="brand logo">
                    <div>
                        <h2 class="footer-brand-name">
                            <strong class="yg-main">YourGym</strong><br> Fitness Club
                        </h2>
                    </div>
                </div>

                <div class="contact-box">
                    <span class="phone mb-4">
                        <FontAwesomeIcon :icon="faPhone" /> +48 111-222-333
                    </span>
                    <span class="email mb-4">
                        <FontAwesomeIcon :icon="faPaperPlane" /> yourgym@gmail.com
                    </span>
                    <span class="address mb-4">
                        <FontAwesomeIcon :icon="faMap" /> ul. Jakaśtam 64, 00-001,<br> siedziba w Warszawie
                    </span>
                </div>

                <div class="section-box">
                    <router-link class="footer-link mb-4" to="/kluby/">Nasze Kluby</router-link>
                    <router-link class="footer-link mb-4" to="#about" @click="scrollToSection('about')">O
                        nas</router-link>
                    <router-link class="footer-link mb-4" to="#offert"
                        @click="scrollToSection('offert')">Oferta</router-link>
                    <router-link class="footer-link mb-4" to="#tickets"
                        @click="scrollToSection('tickets')">Karnety</router-link>
                </div>

                <div class="social-wrapper">
                    <a href="#" aria-label="Otwórz profil na facebooku">
                        <FontAwesomeIcon :icon="faFacebookSquare" />
                    </a>
                    <a href="#" aria-label="Otwórz profil na instagramie">
                        <FontAwesomeIcon :icon="faInstagram" />
                    </a>
                    <a href="#" aria-label="Otwórz profil na youtubie">
                        <FontAwesomeIcon :icon="faYoutube" />
                    </a>
                    <a href="#" aria-label="Otwórz profil na twitterze">
                        <FontAwesomeIcon :icon="faXTwitter" />
                    </a>
                </div>
            </div>
        </div>
        <div class="copyright-bar">
            © 2024 YourGym. All rights reserved. (strona fikcyjna)
        </div>
    </div>
</template>
<style scoped>
.footer-container {
    display: flex;
    flex-direction: column;
    /* padding-top: 130px; */

    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(35, 35, 35, 1) 100%);
}

.footer-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
}

.footer-brand-logo {
    width: 250px;
}

.brand-info-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 35px 0 0;
    box-sizing: border-box;
}

.footer-brand-name {
    font-size: 45px;
    color: white;
    text-align: center;
}

.contact-box {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 18px;
}

.phone,
.email,
.address {
    display: flex;
    align-items: center;
    gap: 10px;
}

.social-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.social-wrapper>a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    height: 40px;
    width: 40px;
    background-color: #F35B00;
    font-size: 30px;
    text-decoration: none;
    transition: 0.3s;
}

.social-wrapper>a:hover {
    background-color: #c94e06;
}

.copyright-bar {
    height: 45px;
    background-color: #F35B00;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.map-location {
    width: 100%;
}

.map-location>img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
}

.section-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.footer-link {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    font-size: 18px;
}

.footer-link:hover {
    color: #c94e06;
}

@media screen and (max-width: 1385px) {
    .footer-content {
        flex-direction: column;
    }

    .brand-info-wrapper {
        flex-direction: row;
        justify-content: space-between;
        padding: 35px;
    }

    .contact-box {
        font-size: 18px;
    }

    .social-wrapper {
        flex-direction: column;
    }

    .footer-brand-name {
        font-size: 30px;
    }

    .footer-brand-logo {
        width: 300px;
    }

    .footer-brand-logo>img {
        width: 100%;
    }
}

@media screen and (max-width: 1000px) {
    .footer-brand-logo {
        width: 150px;
    }
}

@media screen and (max-width: 800px) {
    .brand-info-wrapper {
        flex-direction: column;
        gap: 25px;
    }

    .social-wrapper {
        flex-direction: row;
    }

    .section-box {
        display: grid;
        grid-template-columns: auto auto;
        gap: 25px;
    }

    .footer-link {
        width: max-content;
    }

    .map-location>img {
        object-position: 25% 30px;
    }
}

@media screen and (max-width: 444px) {
    .brand-wrapper {
        display: flex;
        flex-direction: column;
        gap: unset !important;
    }

    .footer-brand-logo {
        width: 250px;
    }

    .map-location>img {
        object-position: 30% 30px;
    }
}
</style>