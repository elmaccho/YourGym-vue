<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faClock, faChildReaching, faTag } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <div class="tickets-container">
        <div class="section-title" data-aos="zoom-in">
            KARNETY
        </div>
        <div class="tickets-wrapper">
            <div class="ticket-box" data-aos="zoom-in-up" data-aos-delay="300">
                <div class="background-highlight"></div>
                <FontAwesomeIcon :icon="faClock" class="ticket-icon mb-3"/>
                <div class="ticket-price mb-2">
                    <span><b class="h3">129,00 zł</b><span>/ miesiąc</span></span>
                </div>
                <div class="ticket-title mb-2">
                    <span>Karnet <b>RANO</b></span>
                </div>
                <div class="ticket-description mb-5">
                    <p>
                        Karnet uprawnia do korzystania z oferty klubu od poniedziałku do piątku w godzinach
                        6:00 - 15:00, a także przez cały weekend o dowolnej porze.
                    </p>
                </div>
                <router-link to="/karnety/karnetRano" class="btn yg-btn">Szczegóły</router-link>
            </div>
            <div class="ticket-box" data-aos="zoom-in-up" data-aos-delay="400">
                <FontAwesomeIcon :icon="faChildReaching" class="ticket-icon mb-3"/>
                <div class="ticket-price mb-2">
                    <span><b class="h3">159,00 zł</b><span>/ miesiąc</span></span>
                </div>
                <div class="ticket-title mb-2">
                    <span>Karnet <b>OPEN</b></span>
                </div>
                <div class="ticket-description mb-5">
                    <p>
                        Członkostwo pozwala na korzystanie z usług dostępnych w godzinach otwarcia klubu, 
                        bez limitów. Możesz przebywać w klubie codziennie, w dowolnie wybranym przez Ciebie czasie.
                    </p>
                </div>
                <router-link to="/karnety/karnetOpen" class="btn yg-btn">Szczegóły</router-link>
                <div class="background-highlight"></div>
            </div>
            <div class="ticket-box" data-aos="zoom-in-up" data-aos-delay="500">
                <div class="background-highlight"></div>
                    <FontAwesomeIcon :icon="faTag" class="ticket-icon mb-3"/>
                <div class="ticket-price mb-2">
                    <span><b class="h3">0,00 zł</b><span>/ 7 dni</span></span>
                </div>
                <div class="ticket-title mb-2">
                    <span><b>Wypróbuj siłownie!</b></span>
                </div>
                <div class="ticket-description mb-5">
                    <p>
                        Członkostwo upoważnia Cię do skorzystania z obiektu przez 7 dni GRATIS!
                    </p>
                </div>
                <router-link to="/karnety/karnetFree" class="btn yg-btn">Szczegóły</router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .tickets-container{
        background: rgb(1,9,10);
        background: linear-gradient(180deg, rgba(1,9,10,1) 0%, rgba(29,35,37,1) 100%);
        
        background-image: url('@/assets/img/tickets/css-pattern-by-magicpattern.webp');
        background-repeat: no-repeat;
        background-size: cover;

        position: relative;
        padding: 45px 30px;
        box-sizing: border-box;
    }
    .tickets-container > .section-title{
        position: relative;
        font-family: Venite Adoremus Straight Regular;
        color: white;
        font-size: 70px;
        text-align: center;
    }
    .tickets-wrapper{
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
    }
    .ticket-box{
        width: 500px;
        padding: 30px;

        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .ticket-icon{
        font-size: 120px;
        color: white;
        z-index: 1;
    }
    .ticket-price, .ticket-title, .ticket-description{
        color: white;
        text-align: center;
        z-index: 1;
    }
    .ticket-price, .ticket-title{
        font-size: 30px;
    }
    .ticket-description{
        min-height: 100px;
    }
    .background-highlight{
        position: absolute;
        background-color: #F35B00;
        width: 90%;
        height: 80%;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        opacity: 0;
        transition: 0.3s;
        border-radius: 22px;
    }
    .ticket-box:hover .background-highlight{
        opacity: 1;
    }
    .ticket-box > .yg-btn{
        width: 200px;
    }
    .ticket-box:hover > .yg-btn::before{
        background-color: #232323;
    }
    .ticket-box:hover > .yg-btn::after{
        border: 2px solid #232323;
    }

    @media screen and (max-width: 1075px){
        .tickets-container > .section-title{
            font-size: 50px;
        }
    }
</style>