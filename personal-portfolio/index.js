
(function () {
    emailjs.init('eaQ24HoGrtEEJKPkr');

    const toggle_bar = document.querySelector('.toggle-bar');
    toggle_bar.addEventListener('click', showMenu);
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // var templateParams = {
        //     name: 'Nagaraj',
        //     email: 'nagarajatmsrit@gmail.com',
        //     phoneNumber: 1234,
        //     message: 'Check this out!'
        // };
        // let service_id = 'service_irh46al';
        // let template_id = 'template_ohlgw3k';
        // emailjs.send(service_id, template_id, templateParams)
        //     .then(function (response) {
        //         console.log('SUCCESS!', response.status, response.text);
        //     }, function (error) {
        //         console.log('FAILED...', error);
        //     });
    });
}

function showMenu() {
    const nav_bar = document.querySelector('header>nav');
    nav_bar.classList.toggle('show');

    let start = Date.now();

    let timer = setInterval(function () {
        let timePassed = Date.now() - start;

        nav_bar.style.left = (20 + timePassed) / 5 + 'px';

        if (timePassed > 500) clearInterval(timer);

    }, 20);
}