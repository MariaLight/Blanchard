document.addEventListener("DOMContentLoaded", function () {

    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,

        autoplay: {
            delay: 2000,
        },
    });

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', function () {
        menu.classList.toggle('is-active');
    })
})