<script setup>
import { onMounted, ref } from 'vue';
const isActive = ref(false);
const scrolledDown = ref(false);
const activeSection = ref('');

const toggleMenu = () => {
    isActive.value = !isActive.value;
}
const handleClickOutside = (e) => {
    const navbar = document.querySelector('.yg-navbar');
    const openNavbarBtn = document.querySelector('.open-navbar-btn');
    const closeItems = document.querySelectorAll('.close-item');

    if (navbar && !navbar.contains(e.target) && !openNavbarBtn.contains(e.target)) {
        isActive.value = false;
    }

    for (const closeItem of closeItems) {
        if (closeItem.contains(e.target)) {
            isActive.value = false;
        }
    }
}
const handleScroll = () => {
    if (window.scrollY > 50) {
        scrolledDown.value = true;
    } else {
        scrolledDown.value = false;
    }
}
const handleScrollHighlight = () => {
    const sections = ['about', 'offert', 'tickets', 'contact'];

    const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
    });

    if (currentSection !== activeSection.value) {
        activeSection.value = currentSection;
    }
};


onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleScrollHighlight)
})

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <button class="open-navbar-btn" @click="toggleMenu" aria-label="Otwórz menu">
        <FontAwesomeIcon :icon="faBars" />
    </button>

    <nav class="yg-navbar" :class="{ 'navbar-toggle': isActive, 'sticky': scrolledDown }">
        <div class="navbar-content">
            <button class="close-navbar-btn" @click="toggleMenu" aria-label="Zamknij menu">
                <FontAwesomeIcon :icon="faXmark" />
            </button>
            <a class="navbar-brand" href="#header">
                <h1 class="brand-name">YourGym</h1>
            </a>
            <ul class="navbar-links">
                <li class="dropdown">
                    <button class="nav-link dropdown-toggle text-light" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Nasze Kluby
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><router-link to="/kluby/gdansk" class="dropdown-item">Gdańsk</router-link></li>
                        <li><router-link to="/kluby/olsztyn" class="dropdown-item">Olsztyn</router-link></li>
                        <li><router-link to="/kluby/szczecin" class="dropdown-item">Szczecin</router-link></li>
                        <li><router-link to="/kluby/bydgoszcz" class="dropdown-item">Bydgoszcz</router-link></li>
                        <li><router-link to="/kluby/torun" class="dropdown-item">Toruń</router-link></li>
                        <li><router-link to="/kluby/bialystok" class="dropdown-item">Białystok</router-link></li>
                        <li><router-link to="/kluby/poznan" class="dropdown-item">Poznań</router-link></li>
                        <li><router-link to="/kluby/warszawa" class="dropdown-item">Warszawa</router-link></li>
                        <li><router-link to="/kluby/lodz" class="dropdown-item">Łódź</router-link></li>
                        <li><router-link to="/kluby/lublin" class="dropdown-item">Lublin</router-link></li>
                        <li><router-link to="/kluby/wroclaw" class="dropdown-item">Wrocław</router-link></li>
                        <li><router-link to="/kluby/kielce" class="dropdown-item">Kielce</router-link></li>
                        <li><router-link to="/kluby/katowice" class="dropdown-item">Katowice</router-link></li>
                        <li><router-link to="/kluby/rzeszow" class="dropdown-item">Rzeszów</router-link></li>
                        <li><router-link to="/kluby/krakow" class="dropdown-item">Kraków</router-link></li>
                    </ul>
                </li>
                <li class="nav-item close-item">
                    <a class="nav-link" :class="{ active: activeSection === 'about' }" href="#about">O nas</a>
                </li>
                <li class="nav-item close-item">
                    <a class="nav-link" :class="{ active: activeSection === 'offert' }" href="#offert">Oferta</a>
                </li>
                <li class="nav-item close-item">
                    <a class="nav-link" :class="{ active: activeSection === 'tickets' }" href="#tickets">Karnety</a>
                </li>
                <li class="nav-item close-item">
                    <a class="nav-link" :class="{ active: activeSection === 'contact' }" href="#contact">Kontakt</a>
                </li>
                <li class="nav-link">
                    <router-link class="yg-btn" to="/logowanie">Logowanie</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
<style scoped>
.close-navbar-btn,
.open-navbar-btn {
    display: none;
    border: none;
    background-color: transparent;
    transition: 0.3s;
    font-size: 40px;
}

.close-navbar-btn:hover,
.open-navbar-btn:hover {
    opacity: 75%;
}

.close-navbar-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
}

.open-navbar-btn {
    position: fixed;
    top: 20px;
    left: 20px;

    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    z-index: 2;
}

.dropdown-item:active {
    background-color: #F35B00 !important;
}

.fa-bars {
    pointer-events: none;
}

.yg-navbar {
    padding: 15px 35px;
    box-sizing: border-box;
    transform: unset;
    transition: 0.3s;
    z-index: 3;
    position: sticky;
    top: 0;
    background-color: #232323;
}

.sticky {
    background-color: #232323c7;
    backdrop-filter: blur(5px);
}

.nav-item>a {
    color: white;
    position: relative;
}

.nav-item>a:hover {
    color: #c94e06;
}

.navbar-links .nav-item a::after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 0;
    background-color: #F35B00;
    height: 2px;
    transition: width 0.3s ease-in-out;
}

.navbar-links a.active::after {
    width: 100%;
}

.sticky .navbar-links a.active::after {
    width: 100%;
}

.navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-links {
    display: flex;
    align-items: center;
    gap: 35px;
    margin: unset;
}

li {
    list-style-type: none !important;
}

.brand-name {
    font-weight: 600;
    color: white;
}

.yg-btn {
    text-decoration: none;
    color: white !important;
    padding: 8px 20px;
    transition: 0.3s;
    position: relative;
    z-index: 1;
}

.yg-btn::before {
    background-color: #F35B00;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5px;
    right: 5px;
    z-index: -1;
    transition: 0.3s;
}

.yg-btn::after {
    content: '';
    border: 2px solid #c94e06;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    right: 0px;
    transition: 0.3s;
    z-index: -2;
}

.yg-btn:hover::after {
    top: 5px;
    right: 5px;
}

.yg-btn:hover::before {
    top: 0px;
    right: 0px;
}

@media screen and (max-width: 850px) {

    .close-navbar-btn,
    .open-navbar-btn {
        display: block;
    }

    .yg-navbar {
        position: fixed;
        width: 50%;
        height: 100%;
        min-width: 270px;
        transform: translateX(-100%);
    }

    .sticky {
        background-color: #232323;
    }

    .brand-name {
        font-size: 35px;
    }

    .navbar-toggle {
        transform: translateX(0%);
    }

    .navbar-content {
        flex-direction: column;
        align-items: unset;
    }

    .dropdown-menu {
        position: relative !important;
    }

    .navbar-links {
        flex-direction: column;
        margin-top: 75px;
        align-items: unset;
    }
}
</style>