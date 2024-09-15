export function initMobileMenu() {
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
}