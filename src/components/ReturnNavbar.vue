<script setup>
    import { onMounted, ref } from 'vue';
    const isActive = ref(false);
    const scrolledDown = ref(false);

    const toggleMenu = () => {
        isActive.value = !isActive.value;
    }
    const handleClickOutside = (e) => {
        const navbar = document.querySelector('.yg-navbar');
        const openNavbarBtn = document.querySelector('.open-navbar-btn');

        if(navbar && !navbar.contains(e.target) && !openNavbarBtn.contains(e.target)){
            isActive.value = false;
        }
    }

    const HandleScroll = () => {
        if(window.scrollY > 50){
            scrolledDown.value = true;
        } else {
            scrolledDown.value = false;
        }
    }

    onMounted(() => {
        document.addEventListener('click', handleClickOutside)
        document.addEventListener('scroll', HandleScroll)
    })

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
        <button class="open-navbar-btn" @click="toggleMenu">
            <FontAwesomeIcon :icon="faBars"/>
        </button>
        <nav class="yg-navbar" :class="{ 'navbar-toggle' : isActive, 'sticky' : scrolledDown }">
            <div class="navbar-content">
                <button class="close-navbar-btn" @click="toggleMenu">
                    <FontAwesomeIcon :icon="faXmark"/>
                </button>
                <router-link to="/" class="navbar-brand">
                    <h2 class="brand-name">YourGym</h2>
                </router-link>
                <ul class="navbar-links">
                    <li class="nav-item close-item">
                        <router-link to="/" class="nav-link">Wróć na stronę główną</router-link>
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
    .open-navbar-btn
    {
        display: none;
        border: none;
        background-color: transparent;
        transition: 0.3s;
        font-size: 40px;
    }
    .close-navbar-btn:hover,
    .open-navbar-btn:hover{
        opacity: 75%;
    }
    .close-navbar-btn{
        position: absolute;
        top: 10px;
        right: 10px;
        color: white;
    }
    .open-navbar-btn{
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
    .dropdown-item:active{
        background-color: #F35B00 !important;
    }
    .fa-bars{
        pointer-events: none;
    }
    .yg-navbar{
        padding: 15px 35px;
        box-sizing: border-box;
        transform: unset;
        transition: 0.3s;
        z-index: 3;
        position: sticky;
        top: 0;
        background-color: #232323;
    }
    .sticky{
        background-color: #232323c7;
        backdrop-filter: blur(5px);
    }
    .nav-item > a{
        color: white;
        position: relative;
    }
    .nav-item > a:hover{
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
    .navbar-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .navbar-links{
        display: flex;
        align-items: center;
        gap: 35px;
        margin: unset;
    }
    li{
        list-style-type: none !important;
    }
    .brand-name{
        font-weight: 600;
        color: white;
    }
    .yg-btn{
        text-decoration: none;
        color: white !important;
        padding: 8px 20px;
        transition: 0.3s;
        position: relative;
        z-index: 1;
    }
    .yg-btn::before{
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
    .yg-btn::after{
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
    .yg-btn:hover::after{
        top: 5px;
        right: 5px;
    }
    .yg-btn:hover::before{
        top: 0px;
        right: 0px;
    }
    @media screen and (max-width: 550px) {
        .close-navbar-btn,
        .open-navbar-btn
        {
            display: block;
        }
        .yg-navbar{
            position: fixed;
            width: 50%;
            height: 100%;
            min-width: 270px;
            transform: translateX(-100%);
        }
        .sticky{
            background-color: #232323;
        }
        .brand-name{
            font-size: 35px;
        }
        .navbar-toggle{
            transform: translateX(0%);
        }
        .navbar-content{
            flex-direction: column;
            align-items: unset;
        }
        .dropdown-menu{
            position: relative !important;
        }
        .navbar-links{
            flex-direction: column;
            margin-top: 75px;
            align-items: unset;
        }
    }
</style>