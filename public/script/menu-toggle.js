const menuSection = document.querySelector('.header-navigation');
const ul = document.querySelector('ul');
const menuToggle = menuSection.querySelector('.menu-toggle');
let show = true;

menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? "hidden" : "initial";

    menuSection.classList.toggle('on', show);
    show = !show;
});