const btnNav = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

btnNav.addEventListener('click', function() {
    btnNav.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});