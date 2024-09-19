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

  function closeAllMenus() {
    document.querySelectorAll('.mobile-menu, .mobile-menu-2, .mobile-menu-3').forEach(menu => {
      menu.classList.remove('active');
    });
    mainContent.classList.remove('menu-active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuData.forEach(({ btnIds, menuClass }) => {
    const mobileMenu = document.querySelector(menuClass);
    const closeBtn = mobileMenu ? mobileMenu.querySelector('.mobile-menu__close-btn, .feedback__close-btn') : null;

    function toggleMenu(e) {
      e.stopPropagation(); // Prevent event from bubbling up
      closeAllMenus(); // Close any open menus first
      mobileMenu.classList.add('active');
      mainContent.classList.add('menu-active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
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
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeAllMenus();
      });
    }

    if (mobileMenu) {
      mobileMenu.addEventListener('transitionend', () => {
        if (!mobileMenu.classList.contains('active')) {
          mobileMenu.style.transform = '';
        }
      });
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const activeMenu = document.querySelector('.mobile-menu.active, .mobile-menu-2.active, .mobile-menu-3.active');
    if (activeMenu && !activeMenu.contains(e.target) && !e.target.closest('[id^="btn"]')) {
      closeAllMenus();
    }
  });

  backdrop.addEventListener('click', closeAllMenus);
}