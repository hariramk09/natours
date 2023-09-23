import '@babel/polyfill';
import { doLogin, doLogout } from "./login";

const email = document.querySelector('#email');
const pwd = document.querySelector('#password');
const loginForm = document.querySelector('.form--login');
const logoutBtn = document.querySelector('.nav__el--logout');

if (loginForm)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        doLogin(email.value, pwd.value);
    })

if (logoutBtn)
    logoutBtn.addEventListener('click', doLogout);