export function initTextExpander() {
  const textContainer = document.querySelector('.main-section__main-text');
  const paragraphs = textContainer.querySelectorAll('p');
  const expanderButton = textContainer.querySelector('.main-section__read-more-button');
  const expanderImage = expanderButton.querySelector('img');
  const expanderText = document.createElement('span'); // New element for button text
  expanderButton.appendChild(expanderText); // Add text element to button

  function getVisibleParagraphsCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      return 2; // Tablet and Desktop
    } else {
      return 1; // Mobile
    }
  }

  function toggleVisibility(show) {
    const maxVisible = getVisibleParagraphsCount();
    const visibleCount = show ? paragraphs.length : maxVisible;
    
    paragraphs.forEach((paragraph, index) => {
      if (index < visibleCount) {
        paragraph.classList.remove('hidden');
        paragraph.classList.add('visible');
      } else {
        paragraph.classList.remove('visible');
        paragraph.classList.add('hidden');
      }
    });

    expanderImage.src = show ? './img/expand_hide.svg' : './img/expand_show_all.svg';
    expanderImage.alt = show ? 'Hide' : 'Show All';
    expanderText.textContent = show ? 'Hide' : 'Show All'; // Update button text
    expanderButton.setAttribute('data-expanded', show.toString());

    expanderButton.style.display = (maxVisible >= paragraphs.length) ? 'none' : 'flex';
  }

  function initializeLayout() {
    toggleVisibility(false);
  }

  initializeLayout();

  expanderButton.addEventListener('click', function() {
    const isExpanded = expanderButton.getAttribute('data-expanded') === 'true';
    toggleVisibility(!isExpanded);
  });

  window.addEventListener('resize', () => {
    const isExpanded = expanderButton.getAttribute('data-expanded') === 'true';
    if (!isExpanded) {
      toggleVisibility(false);
    }
  });
}