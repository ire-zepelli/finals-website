const loginForm = document.querySelector(".loginform");
const registerForm = document.querySelector(".registerform");
const loginBtn = document.getElementById("login-btn")

document.getElementById('signup').addEventListener('click', function () {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    });
document.getElementById('login').addEventListener('click', function () {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    });

const eye1 = document.getElementById('eye1');
const eye2 = document.getElementById('eye2');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');
   eye1.addEventListener('click', function () {
        togglePasswordVisibility(password1, eye1);
    });
    eye2.addEventListener('click', function () {
        togglePasswordVisibility(password2, eye2);
    });
    function togglePasswordVisibility(inputField, eyeIcon) {
        const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
        inputField.setAttribute('type', type);
        eyeIcon.classList.toggle('fa-eye');
        eyeIcon.classList.toggle('fa-eye-slash');
    }

loginBtn.addEventListener('click', ()=>{
    window.location.href = "home.html";
});