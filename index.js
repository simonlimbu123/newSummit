var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});
var swiper = new Swiper(".mySwiperOne", {
    loop: true,
    pagination: {
        el: ".mySwiperOne .swiper-paginationOne",
        type: "bullets",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const textReveal = gsap.timeline();

textReveal.from(".hero-heading", 1.8, {
    y: 200,
    ease: "power4.out",
    overwrite:false,
    delay: 0.5,
    skewY: 5,
    stagger: {
        amount: 0.4,
    },
});


function isInViewport(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        rect.top <= windowHeight * 0.7 &&
        rect.bottom >= 0
    );
}

function handleScrollReveal() {
    const imageContainers = document.querySelectorAll('.crt-container');

    imageContainers.forEach(container => {
        if (isInViewport(container)) {
            container.classList.add('revealed');
        }
    });
}

function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
const throttledScrollHandler = throttle(handleScrollReveal, 50);
window.addEventListener('scroll', throttledScrollHandler);

handleScrollReveal();


gsap.registerPlugin(ScrollTrigger);
const svg = document.querySelector('.line-container svg');
let path = svg.querySelector("path");

const pathLen = path.getTotalLength();
console.log(pathLen);

gsap.set(path,{strokeDasharray: pathLen});

gsap.fromTo(
    path,
    {
        strokeDashoffset: pathLen,
    },
    {
        strokeDashoffset:0,
        duration:10,
        ease:"none",
        scrollTrigger: {
            trigger: ".line-container",
            start: "top bottom",
            end:"bottom bottom",
            scrub: 1
        },
    }
)


const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');
        const overlay = document.getElementById('overlay');
        const navLinks = document.querySelectorAll('.nav a');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                overlay.classList.remove('active');
            });
        });