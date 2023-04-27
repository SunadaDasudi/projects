
const side_menu = document.querySelectorAll('.side-menu>img');
const header_menu = document.getElementById('header-menu');
const nav_links = document.querySelectorAll('header>nav>ul>li>a');
(function () {

    side_menu[0].addEventListener('click', () => {
        header_menu.classList.toggle('show');
    })

    nav_links.forEach(nav => {
        const sectionId = nav.getAttribute('href').replace('#', '');
        const section = document.getElementById(sectionId);
        nav.addEventListener('click', function (event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
            header_menu.classList.toggle('show');
            ScrollReveal().reveal('.header-menu', slideDown);
        });
    })
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', sendContactFrom);
}

function sendContactFrom(event) {
    emailjs.init('eaQ24HoGrtEEJKPkr');
    event.preventDefault();

    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phonenumber').value,
        message: document.getElementById('message').value
    };
    let service_id = 'service_irh46al';
    let template_id = 'template_ohlgw3k';
    emailjs.send(service_id, template_id, templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}


var slideRight = {
    distance: '10%',
    origin: 'left',
    opacity: null
};

var slideLeft = {
    distance: '10%',
    origin: 'right',
    opacity: null
}

var slideDown = {
    distance: '10%',
    origin: 'top',
    opacity: null
}

var slideUp = {
    distance: '10%',
    origin: 'bottom',
    opacity: null
}

ScrollReveal().reveal('.header-menu', slideDown);
ScrollReveal().reveal('.intro', slideRight);
ScrollReveal().reveal('#about-me .two-col .description', slideLeft);
ScrollReveal().reveal('.employment-history', slideUp);

ScrollReveal().reveal('#portfolio .container', slideLeft);
ScrollReveal().reveal('.skill-set', slideDown);
ScrollReveal().reveal('#skills .card', slideUp);





