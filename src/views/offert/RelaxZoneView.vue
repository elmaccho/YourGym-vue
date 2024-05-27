<script setup>
import ReturnNavbar from '@/components/ReturnNavbar.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <ReturnNavbar />
  <div class="p-3">
    <div class="main-content">
    <div class="title-row">
        <h2>Strefa Relaksu</h2>
        <p>Zapewniamy również strefę relaksu w YourGym, gdzie możesz zregenerować ciało i umysł po intensywnym treningu.</p>
    </div>
      <div class="offert-row" data-aos="fade-up" data-aos-delay="100">
        <div class="image-container">
          <img
            class="offert-img"
            src="@\assets\img\offert\subpage\pexels-heyho-8092430.webp"
            alt=""
          />
          <div class="waves-background">
            <img src="@\assets\img\about\waves_dark.svg" alt="" />
          </div>
        </div>
        <div class="text-container">
          <h3>Sauna Sucha</h3>
          <p>
            Zapewniającą głębokie odprężenie poprzez suchą ciepło. Sauna sucha wspomaga eliminację
            toksyn i przynosi ulgę dla mięśni.
          </p>
        </div>
      </div>
      <div class="offert-row" data-aos="fade-up" data-aos-delay="100">
        <div class="image-container">
          <img
            class="offert-img"
            src="@\assets\img\offert\subpage\pexels-ron-lach-9165662.webp"
            alt=""
          />
          <div class="waves-background">
            <img src="@\assets\img\about\waves_dark.svg" alt="" />
          </div>
        </div>
        <div class="text-container">
          <h3>Sauna Sucha</h3>
          <p>
            Zapewniającą głębokie odprężenie poprzez suchą ciepło. Sauna sucha wspomaga eliminację
            toksyn i przynosi ulgę dla mięśni.
          </p>
        </div>
      </div>
      <div class="offert-row" data-aos="fade-up" data-aos-delay="100">
        <div class="image-container">
          <img
            class="offert-img"
            src="@\assets\img\offert\subpage\pexels-anete-lusina-5240640.webp"
            alt=""
          />
          <div class="waves-background">
            <img src="@\assets\img\about\waves_dark.svg" alt="" />
          </div>
        </div>
        <div class="text-container">
          <h3>Sauna Sucha</h3>
          <p>
            Zapewniającą głębokie odprężenie poprzez suchą ciepło. Sauna sucha wspomaga eliminację
            toksyn i przynosi ulgę dla mięśni.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style scoped>
    .main-content{
        display: flex;
        flex-direction: column;
        gap: 45px;   
        padding: 0 35px;
    }
    .title-row{
        color: white
    }
    .title-row h2{
        font-size: 80px;
        font-weight: 700;
    }
    .title-row p{
        font-size: 25px;
        width: 80%;
    }
    .offert-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .offert-row:nth-child(2n+1){
        flex-direction: row-reverse;
    }
    .image-container,
    .waves-background {
        width: 500px;
        height: 300px;
        position: relative;
    }
    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .waves-background {
        position: absolute;
        top: 30px;
        left: 30px;
        z-index: -1;
    }
    .text-container{
        color: white;
    }
    .text-container p{
        max-width: 400px;
    }
    .footer-container{
        padding-top: unset;
        margin-top: 100px;
    }
    @media screen and (max-width: 1015px){
        .image-container,
        .waves-background {
            width: 400px;
            height: 300px;
            position: relative;
        }
        .waves-background {
            position: absolute;
            top: 20px;
            left: 20px;
        }
        .text-container p{
            max-width: 350px;
        }
    }
    @media screen and (max-width: 805px){
        .offert-row:nth-child(2n+1){
            flex-direction: column;
        }
        .offert-row{
            flex-direction: column;
            align-items: center;
            gap: 45px;
        }
    }
    @media screen and (max-width: 665px) {
        .title-row h2{
            font-size: 52px;
            font-weight: 700;
        }
    }
    @media screen and (max-width: 490px){
        .title-row{
            margin-top: 45px;
        }
        .title-row h2{
            font-size: 32px;
            text-align: center;
        }
        .title-row p{
            font-size: 20px;
            text-align: justify;
            width: 100%;
        }
        .text-container p{
            max-width: 330px;
        }
        .image-container,
        .waves-background {
            width: 80%;
            min-width: 330px;
            height: 200px;
            position: relative;
        }
        .waves-background {
            position: absolute;
            left: 10px;
            top: 10px;
        }
    }
</style>
