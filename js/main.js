document.addEventListener("DOMContentLoaded", function () {

    // const swiper = new Swiper('.swiper-container', {
    //     direction: 'horizontal',
    //     loop: true,

    //     autoplay: {
    //         delay: 2000,
    //     },
    // });

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        document.querySelector('.header-nav__list').classList.toggle('container');
        document.querySelector('.burger-img-x').classList.toggle('is-open');
        document.querySelector('.burger-img').classList.toggle('closed');

    })


    const outlineBtn = document.querySelector('.banner__btn-outline');
    const mainBtn = document.querySelector('.banner__btn');
    mainBtn.addEventListener('focus', function () {
        outlineBtn.classList.toggle('banner__btn-outline-active');
    })


    const drops = document.querySelectorAll('.nav__list--dropdown');
    for (let i = 0; i < drops.length; ++i) {
        new SimpleBar(drops[i]);
    }

    const filter = document.querySelector('#galleryFilter');
    const galleryFilter = new Choices(filter, {
        searchEnabled: false,
        itemSelectText: '',
    });

    const gallerySwiper = new Swiper('.gallery__swiper', {
        direction: 'horizontal',
        slideClass: 'gallery-slide',
        wrapperClass: 'gallery-wrapper',
        autoHeight: false,
        watchOverflow: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        grid: {
            rows: 2,
        },



        pagination: {
            el: '.gallery-pagination',
            type: 'fraction',

        },

        navigation: {
            nextEl: '.gallery-button-next',
            prevEl: '.gallery-button-prev',
        },

    });
})