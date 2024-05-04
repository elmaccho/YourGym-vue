<script setup>
    import ReturnNavbar from '@/components/ReturnNavbar.vue'
    import Footer from '@/components/Footer.vue'

    import { Field, Form, ErrorMessage } from 'vee-validate'
    import { ref } from 'vue';
    import * as yup from 'yup';
    import router from '@/router';

    const form = ref(null);
    const formValues = ref();
    const schema = yup.object({
        name: yup.string().required('To pole jest wymagane!'),
        surname: yup.string().required('To pole jest wymagane!'),
        email: yup.string().email('Podaj poprawny adres email').required('Podaj adres email'),
        password: yup.string().required('To pole jest wymagane!'),
        rpassword: yup.string().oneOf([yup.ref('password'), null], 'Hasła muszą się zgadzać!')
    });
    const onSubmit = () => {
        router.push('/logowanie')
    }
</script>
<template>
    <ReturnNavbar/>
    <div class="register-wrapper">
        <div class="brand-wrapper">
            <img src="@\assets\img\header\yourgymlogo-1.webp" alt="YourGym logo">
        </div>
        <div class="form-wrapper">
            <h2 class="title mb-4">Rejestracja</h2>
            <Form :validation-schema="schema" @submit="onSubmit" :initial-values="formValues">
                <Field class="form-control" type="text" name="name" placeholder="Imię" />
                <ErrorMessage class="text-danger error-message" name="name" />
                
                <Field class="form-control" type="text" name="surname" placeholder="Nazwisko" />
                <ErrorMessage class="text-danger error-message" name="surname" />
                
                <Field class="form-control" type="email" name="email" placeholder="E-mail" />
                <ErrorMessage class="text-danger error-message" name="email" />
                
                <Field class="form-control" type="password" name="password" placeholder="Hasło" />
                <ErrorMessage class="text-danger error-message" name="password" />
                
                <Field class="form-control" type="password" name="rpassword" placeholder="Powtórz hasło" />
                <ErrorMessage class="text-danger error-message" name="rpassword" />

                <span class="form-info mb-3">Masz już konto? <router-link to="/logowanie" class="yg-main text-decoration-none">Zaloguj się</router-link></span>
                <button class="yg-btn btn" type="submit">Zarejestruj się</button>
            </Form>
        </div>
    </div>
    <Footer class="pt-0"/>
</template>
<style scoped>
    .register-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-around;
        min-height: 90vh;

        background-image: url('@/assets/img/register/headerbackground.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
    .title{
        color: white;
        text-align: center;
        font-size: 40px;
    }
    .form-wrapper > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        width: 350px;
    }
    form > input{
        height: 40px;
    }
    form > button{
        width: 150px;
    }
    form > .form-info{
        color: white;
        width: 100%;
        text-align: right;
    }
    .form-control:focus{
        border-color: #F35B00;
        box-shadow: 0px 0px 8px #F35B00;
    }
    .error-message{
        width: 100%;
        text-align: left;
    }

    @media screen and (max-width: 820px) {
        .register-wrapper{
            flex-direction: column;
            justify-content: center;
            min-height: 100vh;
        }
        .brand-wrapper > img{
            display: none;
        }
    }
    @media screen and (max-width: 380px) {
        .form-wrapper, .form-wrapper > form {
            width: 100%;
        }
        form > input{
            width: 95% !important;
        }
    }
</style>