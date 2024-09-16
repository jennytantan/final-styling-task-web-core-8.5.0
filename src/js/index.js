import { initMobileMenus } from './mobileMenu';
import { initSwiper } from './swiper';
import { initBrandSelectors } from './brandSelectors';
import { initTextExpander } from './textExpander.js';
import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenus();
  initSwiper();
  initBrandSelectors();
  initTextExpander();
});