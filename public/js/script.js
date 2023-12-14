let tl = gsap.timeline();

function serviceSlider() {
    const swiper = new Swiper('.swiper', {
        speed: 2000,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        slidesPerView: 3,
        breakpoints: {
            '@0.25': {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            '@0.50': {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            '@0.75': {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            '@1.00': {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            '@1.50': {
                slidesPerView: 1,
                spaceBetween: 50,
            },
        },

    });
}

function animateContent() {
    tl.fromTo("img", {opacity: 0}, {opacity: 1, ease: "slow", duration: 2})
    .fromTo(".sticky-side-container", {x:"-100%",opacity: 0}, {x:"0%",opacity: 1,ease: "power4.out", ease: "sine.out", duration: 2}, "-=2")
    .fromTo(".orchid-img-container ", {x:"100%",opacity: 0}, {x:"0%",opacity: 1,ease: "power4.out", ease: "sine.out", duration: 2})
    .fromTo(".title", {x:"-100%", opacity:0}, {x:"0%", opacity: 1, duration: 1}, "-=1")
    .fromTo(".name", {x:"100%", opacity:0}, {x:"0%", opacity: 1, duration: 1},"-=1")
    .fromTo(".button", {x:"100%", opacity:0}, {x:"0%", opacity: 1, duration: 1},"-=2")
    .fromTo(".navigation-container", {x:"100%", opacity:0}, {x:"0%", opacity: 1, duration: 1})
}


function showMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuTitle     = document.querySelector('.menu-title');
    const listMenu      = document.querySelector('.navigation-content');

    hamburgerMenu.addEventListener('click', () => {
        menuTitle.classList.toggle('active');
        listMenu.classList.toggle('active');

        if (menuTitle.classList.contains('active')) {
            tl.fromTo('.circle-background', {'scale': 0}, {'scale': 20, duration:1})
            .fromTo(menuTitle, {opacity: 0}, {opacity:1, display:'block', duration: 1}, '-=1')
            .fromTo(listMenu, {opacity: 0}, {opacity:1, display:'block', duration: 1}, '-=1')

        } else {
            tl.fromTo('.circle-background', {'scale': 20}, {'scale': 0, duration:1})
            .fromTo(menuTitle, {opacity: 1}, {opacity:0, display:'none' , duration: 1}, '-=1')
            .fromTo(listMenu, {opacity: 1}, {opacity:0, display:'none' , duration: 1}, '-=1')
        }
    });
}

function showListTaskService() {
    const content_list_task = document.querySelectorAll('.content-list-task');
   

    for(var i = 0; i < content_list_task.length; i++) {
        content_list_task[i].addEventListener('mouseenter', (e) => {
            e.preventDefault();
            const field     = e.currentTarget
            const list_task = field.querySelector('.list-task');
            tl.fromTo(list_task,{display: 'none', y: "100%", opacity: 0}, {display: 'block', y:"0%", opacity: 1, duration: 0.2})
        });
    
        content_list_task[i].addEventListener('mouseleave', (e) => {
            e.preventDefault();
            const field     = e.currentTarget
            const list_task = field.querySelector('.list-task');
            tl.fromTo(list_task,{y: "0%", opacity: 1}, {y:"100%", opacity: 0, display: "none", duration: 0.2})
        });
    }
}

animateContent();
serviceSlider();
showMenu();
showListTaskService();