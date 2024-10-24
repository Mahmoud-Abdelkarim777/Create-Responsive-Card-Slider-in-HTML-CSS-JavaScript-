// Initialize Swiper without autoplay
let swiperOptions = {
    loop: true,
    spaceBetween: 30,
    speed: 2500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
};

// Function to initialize Swiper
function initSwiper() {
    // Check screen width and enable autoplay for small screens
    if (window.innerWidth < 768) {
        swiperOptions.autoplay = {
            delay: 0,
            disableOnInteraction: false,
        };
    } else {
        // Remove autoplay for larger screens
        swiperOptions.autoplay = false;
    }

    // Initialize Swiper with the final options
    return new Swiper('.card-wrapper', swiperOptions);
}

// Initialize Swiper
let mySwiper = initSwiper();

// Handle resize event
window.addEventListener('resize', () => {
    // Destroy the previous Swiper instance
    if (mySwiper) {
        mySwiper.destroy(true, true); // Destroy swiper completely
    }
    
    // Reinitialize Swiper with new settings after resizing
    mySwiper = initSwiper();
});
