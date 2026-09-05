const container = document.getElementById('container');
const btnSignIn = document.getElementById('btn-sign-in');
const btnSignUp = document.getElementById('btn-sign-up');


btnSignIn.addEventListener('click', () => {
    container.classList.remove('toggle');
});


btnSignUp.addEventListener('click', () => {
    container.classList.add('toggle');
});