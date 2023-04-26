(function () {
    const nav_links = document.querySelectorAll('header>nav>ul>li>a');
    nav_links.forEach(nav => {
        console.log(nav.getAttribute('href').replace('#', ''));
        const sectionId = nav.getAttribute('href').replace('#', '');
        const section = document.querySelector(nav.getAttribute('href'));
        const link = document.getElementById(sectionId);
        console.log(link);
        link.addEventListener('click', function (event) {
            event.preventDefault(); // prevent the default link behavior
            section.scrollIntoView({ behavior: 'smooth' }); // scroll to the section
        });
    })
})();