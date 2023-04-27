
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

// ScrollReveal().reveal('#home>p');

var slideRight = {
    distance: '20%',
    origin: 'left',
    opacity: null
};

var slideLeft = {
    distance: '40%',
    origin: 'right',
    opacity: null
}

var slideDown = {
    distance: '50%',
    origin: 'top',
    opacity: null
}

var slideUp = {
    distance: '50%',
    origin: 'bottom',
    opacity: null
}

ScrollReveal().reveal('.header-menu', slideDown);
ScrollReveal().reveal('.intro', slideRight);
ScrollReveal().reveal('.image-container', slideLeft);
ScrollReveal().reveal('#about-me .two-col .description', slideLeft);
ScrollReveal().reveal('#portfolio .container', slideLeft);
ScrollReveal().reveal('.skill-set', slideDown);
ScrollReveal().reveal('#skills .card', slideUp);
ScrollReveal().reveal('#contact', slideRight);

function downloadFile() {
    var link = document.createElement('a');
    var filename = './trial2/sunada_dasudi_resume.docx';
    link.href = './';
    link.download = filename;

    console.log(link);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const download_resume = document.getElementById('download-resume');
download_resume.addEventListener('click', downloadFile)



