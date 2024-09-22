import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function initSwiper() {
  const swiperConfig = {
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
  };

  // Initialize all Swiper instances
  const swiperInstances = Array.from(document.querySelectorAll('.mySwiper')).map((element, index) => {
    // Create a unique class for each Swiper instance
    const uniqueClass = `mySwiper-${index}`;
    element.classList.add(uniqueClass);

    // Create a copy of the config and update the pagination element
    const config = { ...swiperConfig };
    config.pagination.el = `.${uniqueClass} .swiper-pagination`;

    // Initialize Swiper
    return new Swiper(`.${uniqueClass}`, {
      ...config,
      on: {
        init: function () {
          this.pagination.render();
          this.pagination.update();
        },
        slideChange: function () {
          this.pagination.render();
          this.pagination.update();
        },
      },
    });
  });

  return swiperInstances;
}