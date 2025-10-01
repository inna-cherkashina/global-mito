document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('burgerMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('mobile-burger-menu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    burgerMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  burgerMenu.addEventListener('click', function () {
    if (mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  closeMenu.addEventListener('click', closeMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);

  mobileDropdowns.forEach((dropdown) => {
    const btnDropdown = dropdown.querySelector('.mobile-dropdown-toggle');
    btnDropdown.addEventListener('click', function (e) {
      e.preventDefault();
      dropdown.classList.toggle('active');
    });
  });
});
