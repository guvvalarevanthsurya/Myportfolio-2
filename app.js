const hamburger = document.querySelector('.menu_bar i');
const dropdown = document.querySelector('.dropdown');

hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('bx-menu');
      hamburger.classList.toggle('bx-x');
      dropdown.classList.toggle('open');
    })