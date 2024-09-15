export function initMobileMenus() {
  const menuData = [
    { btnIds: ['#btn1'], menuClass: '.mobile-menu-1' },
    { btnIds: ['#btn2', '#btn4'], menuClass: '.mobile-menu-2' },
    { btnIds: ['#btn3', '#btn5'], menuClass: '.mobile-menu-3' }
  ];

  const mainContent = document.querySelector('.main-content');
  const backdrop = document.createElement('div');
  backdrop.classList.add('menu-backdrop');
  document.body.appendChild(backdrop);

  menuData.forEach(({ btnIds, menuClass }) => {
    const mobileMenu = document.querySelector(menuClass);
    const closeBtn = mobileMenu ? mobileMenu.querySelector('.mobile-menu__close-btn') : null;

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

    btnIds.forEach(btnId => {
      const btn = document.querySelector(btnId);
      if (btn && mobileMenu) {
        btn.addEventListener('click', toggleMenu);
        console.log(`Added click listener to ${btnId} for menu ${menuClass}`);
      } else {
        console.warn(`Button ${btnId} or menu ${menuClass} not found`);
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    if (mobileMenu) {
      mobileMenu.addEventListener('transitionend', () => {
        if (!mobileMenu.classList.contains('active')) {
          mobileMenu.style.transform = '';
        }
      });
    }
  });

  backdrop.addEventListener('click', () => {
    document.querySelectorAll('.mobile-menu.active').forEach(menu => {
      menu.classList.remove('active');
    });
    mainContent.classList.remove('menu-active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  });
}