// Initialize Swiper for Hero Filmstrip
const swiper = new Swiper(".hero-filmstrip-swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  speed: 1000,               // adjust scroll speed (lower = faster)
  loopedSlides: 7,           // match number of slides in your HTML
  autoplay: {
    delay: 0,                // continuous movement
    disableOnInteraction: false,
  },
  freeMode: {
    enabled: true,
    momentum: false,         // prevents extra acceleration
  },
  allowTouchMove: false,     // disable drag by users
  grabCursor: false,         // hides the grab cursor
  centeredSlides: false,     // no centering, smooth flow
});