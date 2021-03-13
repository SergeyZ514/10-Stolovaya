// HAMBURGER
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sideMenu.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// MENU CLOSE
let menuLink = document.querySelectorAll('.main-screen__link');
menuLink.forEach((element) => {
  element.addEventListener('click', () => {
    if (sideMenu.classList.contains('active')) {
      sideMenu.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});
