const btnNav = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbarLogo = document.querySelector('#navbar__logo');


btnNav.addEventListener('click', function() {
    btnNav.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.querySelectorAll('li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const hideMenu = () => {
    const menuBars = document.querySelector('.is-active');
    
    if(window.innerWidth < 960 && menuBars) {
        btnNav.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMenu);
navbarLogo.addEventListener('click', hideMenu);