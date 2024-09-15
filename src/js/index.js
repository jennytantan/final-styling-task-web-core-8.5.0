import { initMobileMenus } from './mobileMenu';
import { initSwiper } from './swiper';
import { initBrandSelectors } from './brandSelectors';
import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenus();
  initSwiper();
  initBrandSelectors();
});