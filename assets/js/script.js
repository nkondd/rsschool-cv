'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.burger-button');
    const menu = document.querySelector('.header-menu');

    menuBtn.addEventListener('click', togleClasses);

    function togleClasses() {
        menuBtn.classList.toggle('burger-button_active');
        menu.classList.toggle('header-menu_active');
        menuBtn.classList.toggle('burger-button_rotate');
    }

    window.addEventListener('click', (e) => {
        const isOverflow = e.target.classList;
        if (!isOverflow.contains('header-menu-list') && !isOverflow.contains('burger-line') &&
        !isOverflow.contains('burger-button') && menu.classList.contains('header-menu_active')) {
            togleClasses();
        }
    });
});