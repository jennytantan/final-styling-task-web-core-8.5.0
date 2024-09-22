document.querySelector('.menu-backdrop').addEventListener('click', function(e) {
  console.log('click')
  if (e.target === this) {
    console.log('this function active')
      window.location.hash = '';
  }
});
