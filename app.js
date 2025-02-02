const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('nav');
const mainContent = document.querySelector('.main-content');
const goToTop = document.querySelector('.go-to-top');

hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    headerContent.classList.add('menu-open');
})

nav.addEventListener('click', (e) => {
    e.stopPropagation();
})

closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open');
})

window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open');
})

goToTop.addEventListener('click', ()=>{
    mainContent.scrollTo(0,0);
})