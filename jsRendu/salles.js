const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });

const swiper1 = document.querySelector('.swiper').swiper;
const next = document.querySelector('.swiper-button-next')
const before = document.querySelector('.swiper-button-prev')

next.addEventListener('click',() => {
    swiper1.slideNext();
})

before.addEventListener('click',() => {
    swiper1.slidePrev();
})