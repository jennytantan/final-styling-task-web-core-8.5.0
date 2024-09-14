import '../scss/style.scss'


console.log('It works!')

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu__close-btn');
  const mainContent = document.querySelector('.main-content');
  const backdrop = document.createElement('div');
  backdrop.classList.add('menu-backdrop');
  document.body.appendChild(backdrop);

  function toggleMenu() {
    mobileMenu.classList.toggle('active');
    mainContent.classList.toggle('menu-active');
    backdrop.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    mainContent.classList.remove('menu-active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (btn) {
    btn.addEventListener('click', toggleMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on the backdrop
  backdrop.addEventListener('click', closeMenu);

  // Listen for the end of the transition
  mobileMenu.addEventListener('transitionend', () => {
    if (!mobileMenu.classList.contains('active')) {
      mobileMenu.style.transform = ''; // Reset the transform after transition ends
    }
  });
});

/*
import '../scss/style.scss'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

console.log('It works!')

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const btn = document.querySelector('#btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu__close-btn');
  const mainContent = document.querySelector('.main-content');
  const backdrop = document.createElement('div');
  backdrop.classList.add('menu-backdrop');
  document.body.appendChild(backdrop);

  function toggleMenu() {
    mobileMenu.classList.toggle('active');
    mainContent.classList.toggle('menu-active');
    backdrop.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    mainContent.classList.remove('menu-active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (btn) {
    btn.addEventListener('click', toggleMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  backdrop.addEventListener('click', closeMenu);

  mobileMenu.addEventListener('transitionend', () => {
    if (!mobileMenu.classList.contains('active')) {
      mobileMenu.style.transform = '';
    }
  });

  // Swiper initialization
  new Swiper(".mySwiper", {
    modules: [Pagination],
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Brand selectors functionality
  const expanderButton = document.getElementById('expanderButton');
  const selectorWrapper = document.querySelector('.repair-brands__wrapper');
  const brandSelectors = document.querySelectorAll('.repair-brands__selector');
  const buttonText = expanderButton.querySelector('.repair-brands__expander-text');
  const buttonImage = expanderButton.querySelector('.repair-brands__expander-icon img');

  function getVisibleSelectorsCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1120) {
      return 8; // Desktop
    } else if (screenWidth >= 768) {
      return 6; // Tablet
    } else {
      return 0; // Mobile (all hidden, swiper is shown instead)
    }
  }

  function toggleVisibility(show) {
    const maxVisible = getVisibleSelectorsCount();
    const visibleCount = show ? brandSelectors.length : maxVisible;
    
    brandSelectors.forEach((selector, index) => {
      if (index < visibleCount) {
        selector.classList.remove('hidden');
        selector.classList.add('visible');
      } else {
        selector.classList.remove('visible');
        selector.classList.add('hidden');
      }
    });

    buttonText.textContent = show ? 'Hide' : 'Show All';
    buttonImage.src = show ? './img/expand_hide.svg' : './img/expand_show_all.svg';
    expanderButton.setAttribute('data-expanded', show.toString());

    expanderButton.style.display = (maxVisible >= brandSelectors.length) ? 'none' : 'flex';
  }

  function initializeLayout() {
    toggleVisibility(false);
  }

  initializeLayout();
  window.addEventListener('resize', initializeLayout);

  expanderButton.addEventListener('click', function() {
    const isExpanded = expanderButton.getAttribute('data-expanded') === 'true';
    toggleVisibility(!isExpanded);
  });
});
*/