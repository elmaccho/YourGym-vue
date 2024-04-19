<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faPhone, faPaperPlane, faMap } from '@fortawesome/free-solid-svg-icons';
    import { faFacebookSquare, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
</script>
<template>
    <div class="footer-container">
        <div class="footer-content">
            <div class="brand-info-wrapper">
                <span class="d-flex flex-column align-items-center">
                    <img src="@\assets\img\header\yourgymlogo-1.webp" class="mb-3 footer-brand-logo" alt="brand logo">
                    <h1 class="footer-brand-name"><strong class="yg-main">YourGym</strong> Fitness Club</h1>
                </span>
    
                <div class="contact-box">
                    <p>Kontakt:</p>
                    <span class="phone mb-4"><FontAwesomeIcon :icon="faPhone"/> +48 111-222-333</span>
                    <span class="email mb-4"><FontAwesomeIcon :icon="faPaperPlane"/> yourgym@gmail.com</span>
                    <span class="address mb-4"><FontAwesomeIcon :icon="faMap"/> ul. Jakaśtam 64, 00-001, siedziba w Warszawie</span>
                </div>
    
                <div class="social-wrapper">
                    <a href="#"><FontAwesomeIcon :icon="faFacebookSquare" /></a>
                    <a href="#"><FontAwesomeIcon :icon="faInstagram" /></a>
                    <a href="#"><FontAwesomeIcon :icon="faYoutube" /></a>
                    <a href="#"><FontAwesomeIcon :icon="faXTwitter" /></a>
                </div>
            </div>
            <div class="map-location">
                <img src="@\assets\img\footer\image-4.webp" alt="Lokalizacja siłowni">
            </div>
        </div>
        <div class="copyright-bar">
            MACIEJ CHOJNACKI COPYRIGHT 2023. ALL RIGHTS RESERVED
        </div>
    </div>
</template>
<style scoped>
    .footer-container{
        display: flex;
        flex-direction: column;

        background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(35,35,35,1) 100%);
    }
    .footer-content{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .footer-brand-logo{
        width: 350px;
    }
    .brand-info-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 35px 0 0;
        box-sizing: border-box;
    }
    .footer-brand-name{
        font-size: 45px;
        color: white;
        text-align: center;
    }
    .contact-box{
        display: flex;
        flex-direction: column;
        color: white;
        font-size: 21px;
    }
    .phone, .email, .address{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .social-wrapper{
        display: flex;
        gap: 20px;
    }
    .social-wrapper > a {
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
    .social-wrapper > a:hover{
        background-color: #c94e06;
    }
    .copyright-bar{
        height: 45px;
        background-color: #F35B00;
        color: white;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    @media screen and (max-width: 1385px) {
        .footer-content{
            flex-direction: column;
        }
        .brand-info-wrapper{
            flex-direction: row;
            justify-content: space-between;
            padding: 35px;
        }
        .contact-box{
            font-size: 18px;
        }
        .social-wrapper{
            flex-direction: column;
        }
        .footer-brand-name{
            font-size: 30px;
        }
        .footer-brand-logo{
            width: 300px;
        }
        .footer-brand-logo > img{
            width: 100%;
        }
        .map-location{
            width: 100%;
        }
        .map-location > img{
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
    }
    @media screen and (max-width: 667px) {
        .brand-info-wrapper{
            flex-direction: column;
        }
        .social-wrapper{
            flex-direction: row;
        }
    }
</style>