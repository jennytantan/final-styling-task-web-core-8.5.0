export function initBrandSelectors() {
  const expanderButton = document.getElementById('expanderButton');
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
}