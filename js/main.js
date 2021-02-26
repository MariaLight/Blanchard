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


    const outlineBtn = document.querySelector('.banner__btn-outline');
    const mainBtn = document.querySelector('.banner__btn');
    mainBtn.addEventListener('focus', function (){
        outlineBtn.classList.toggle('banner__btn-outline-active');
    })

    document.querySelector(".header-styles__btn").addEventListener('click', function(){
        document.querySelector(".realism").classList.toggle('is-open');
    })

    new SimpleBar(document.querySelector('.realism'));
})