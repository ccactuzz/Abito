
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 5,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 5,
 
  thumbs: {
    swiper: swiper,
  },
});
