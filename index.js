document.addEventListener('DOMContentLoaded', function () {
  // ========== Модальное окно регистрации ==========
  const modalSection = document.getElementById('modalSection');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const registrationForm = document.getElementById('registrationForm');
  const registerButtons = document.querySelectorAll('.register-button');

  function openModal() {
    modalSection.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalSection.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Обработчики для всех кнопок регистрации
  registerButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // closeModal();
    registrationForm.reset();
  });

  // ========== Мобильное меню ==========
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

  // ========== Модальное окно Cookie ==========
  const cookieModal = document.getElementById('cookieModal');
  const cookieAccept = document.getElementById('cookieAccept');

  function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => {
        cookieModal.classList.add('show');
      }, 1000);
    }
  }

  function hideCookieModal() {
    cookieModal.classList.remove('show');
  }

  function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieModal();
  }

  cookieAccept.addEventListener('click', acceptCookies);

  checkCookieConsent();
});
