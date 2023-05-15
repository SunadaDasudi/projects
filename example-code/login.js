document.querySelector('.login-button').addEventListener('click', showLoginForm);

function showLoginForm() {
    document.querySelector('.login-message').classList.toggle('hide');
}