import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function initSwiper() {
  new Swiper(".mySwiper", {
    modules: [Pagination],
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // When window width is >= 768px
      768: {
        enabled: false,
      },
    },
  });
}