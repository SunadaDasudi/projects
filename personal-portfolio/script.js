(function () {
    const profileImg = document.querySelector('nav>img');
    profileImg.addEventListener('click', function (e) {
        scrollToSection(e, 'profile');
    });
    console.log(profileImg);
    //adding scrolling to the correct section when clicked
    const navLinks = document.querySelectorAll('nav>ul>li>a');
    navLinks.forEach(function (a) {
        a.addEventListener('click', function (e) {
            scrollToSection(e, a.getAttribute('id'));
        })
    })


    const aboutMeAnchorTags = document.querySelectorAll('.abount-me>ul>li>a');

    aboutMeAnchorTags.forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            loadAboutMeContent(a.getAttribute('href').replace('#', '.'));
        })
    });
})();

function loadAboutMeContent(clickedContent) {
    let clickedContentDiv = document.querySelector(clickedContent);
    let allContentDivs = document.querySelectorAll('.abount-me-details .display-card');

    allContentDivs.forEach(function (div) {
        div.classList.remove('show');
        div.classList.add('hide');
    });

    clickedContentDiv.classList.remove('hide');
    clickedContentDiv.classList.add('show');
    clickedContentDiv.focus();
}

function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId + '-section');
    const offSet = section.offsetTop;

    window.scroll({
        top: offSet - 10,
        behavior: "smooth"
    });

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}



