<script setup>
    import Swal from 'sweetalert2';

    import { Field, Form, ErrorMessage } from 'vee-validate'
    import { ref } from 'vue';
    import * as yup from 'yup'

    const form = ref(null);
    const formValues = ref();
    const schema = yup.object({
        fullname: yup.string().required('Podaj imię i nazwisko'),
        email: yup.string().email('Podaj poprawny adres email').required('Podaj adres email'),
        message: yup.string().required('Wpisz wiadomość'),
    });

    const onSubmit = (values, { resetForm }) => {
        Swal.fire({
        position: "top-end",
        icon: "success",
        iconColor: '#ff9151',
        title: "Wysłano wiadomość",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      resetForm();
    }

</script>
<template>
    <div class="contact-container">
        <div class="contact-content">
            <div class="contact-text">
                <p class="uppertext">Masz pytanie?</p>
                <p class="downtext">Chętnie na nie odpowiemy!</p>
            </div>
            <div class="icons">
                <div class="letter" data-aos="zoom-in-up">
                    <img class="letter" src="@\assets\img\contact\Group 42.svg" alt="list">
                </div>
                <div class="rectangle1 rectangle" data-aos="fade-left"></div>
                <div class="rectangle2 rectangle" data-aos="fade-left" data-aos-delay="300"></div>
                <div class="rectangle3 rectangle" data-aos="fade-right" data-aos-delay="100"></div>
                <div class="rectangle4 rectangle" data-aos="fade-right" data-aos-delay="100"></div>
                <div class="circle1 circle" data-aos="flip-up"></div>
                <div class="circle2 circle" data-aos="flip-left" data-aos-delay="100"></div>
                <div class="square" data-aos="zoom-out-left"></div>
                <div class="triangle" data-aos="zoom-out-right"></div>
                <div class="ellipse" data-aos="zoom-out-left"></div>
            </div>
        </div>
        <div class="contact-form">
            <Form :validation-schema="schema" @submit="onSubmit" :initial-values="formValues">
            <Field ref="fullnameField" class="yg-input nameSurnameInput" type="text" name="fullname" placeholder="Imię i nazwisko"/>
            <ErrorMessage class="text-danger w-100" name="fullname" />

            <Field ref="emailField" class="yg-input emailInput" type="email" name="email" placeholder="E-mail"/>
            <ErrorMessage class="text-danger w-100" name="email" />

            <Field ref="messageField" as="textarea" class="yg-input messageInput" name="message" placeholder="Wiadomość"/>
            <ErrorMessage class="text-danger w-100" name="message" />

            <button type="submit" class="btn yg-btn sendmessagebtn">Wyślij</button>
        </Form>
        </div>
    </div>
</template>
<style scoped>
    .contact-container{
        padding: 35px;

        display: flex;
        justify-content: space-around;

        background: rgb(35,35,35);
        background: linear-gradient(180deg, rgba(35,35,35,1) 0%, rgba(0,0,0,1) 100%);

        overflow: hidden;
    }

    .contact-form > form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        
        width: 500px;
    }
    .yg-input{
        width: 100%;
        height: 40px;
        outline: none;
        border: none;
        text-indent: 15px;
        transition: 0.3s;
        position: relative;
        caret-color: #ff9151;
    }
    .yg-input:invalid{
        border: 2px solid red;
    }
    .yg-input:focus{
        border: 1px solid #F35B00;
        box-shadow: 0px 0px 5px #ff9151;
    }
    .contact-form > form > textarea{
        resize:vertical;
        height: 180px;
        max-height: 300px;
        padding: 15px;
        text-indent: unset;
    }
    .contact-form > form > button{
        width: 200px;
    }

    .uppertext{
        color: #F35B00;
        font-size: 80px;
        height: 100px;
        font-weight: 600;
        margin: 0;
        z-index: 1;
    }
    .downtext{
        color: white;
        font-size: 40px;
        font-weight: 600;
        position: relative;
        top: -20px;
        left: 30px;
        z-index: 1;
    }
    .letter > img{
        width: 250px;
    }
    .rectangle, .circle{
        display: block;
        background-color: #333333;
        
    }
    .rectangle{
        height: 40px;
        width: 120px;
        border-radius: 100px;
        position: absolute;
    }
    .circle{
        height: 40px;
        width: 40px;
        border-radius: 100%;

        position: absolute;
    }
    .icons{
        position: absolute;
        left: 20%;
    }
    .rectangle1{
        top: -50px;
        right: -90px;
        width: 280px;
    }
    .rectangle2{
        top: 70%;
        transform: translateY(-100%);
        right: -160px;
        width: 200px;
    }
    .rectangle3{
        left: -194px;
        width: 178px;
        bottom: 15px;
    }
    .rectangle4{
        bottom: -77px;
        width: 205px;
    }
    .circle1{
        top: -49px;
        left: -44px;
    }
    .circle2{
        right: -126px;
        bottom: -80px;
    }
    .square{
        display: block;
        width: 40px;
        height: 40px;

        position: absolute;
        top: -45px;
        right: -139px;
        rotate: 25deg;

        border: 7px solid #F35B00;
        border-radius: 5px;

        
    }
    .triangle{
        display: block;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-bottom: 50px solid #c94e06;
        
        position: absolute;
        left: -149px;
        rotate: 15deg;

        
    }
    .ellipse{
        position: absolute;
        right: -79px;
        bottom: -144px;
        
        width: 45px;
        height: 45px;
        
        border-radius: 100%;
        border: 7px solid #ff9151;

        
    }
    .letter{
        cursor: pointer;
    }
    @media screen and (max-width: 1141px) {
        .uppertext{
            font-size: 50px;
        }
        .downtext{
            font-size: 30px;
            top: -10px;
            left: unset;
        }
    }
    @media screen and (max-width: 975px) {
        .uppertext{
            font-size: 30px;
        }
        .downtext{
            font-size: 20px;
        }
    }
    @media screen and (max-width: 850px) {
        .contact-container{
            flex-direction: column;
        }
        
        .contact-form > form{
            width: 100%;
        }
        .uppertext{
            text-align: center;
            font-size: 40px;
        }
        .downtext{
            text-align: center;
        }
        .icons{
            display: none;
        }
    }
</style>