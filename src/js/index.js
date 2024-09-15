import { initMobileMenu } from './mobileMenu';
import { initSwiper } from './swiper';
import { initBrandSelectors } from './brandSelectors';
import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSwiper();
  initBrandSelectors();
});