'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //HEADER
  let header = document.querySelector('.header');
  let mailLink = header.querySelector('.header__mail-link');
  let mailLinkCopy = header.querySelector('.header__mail-link-copy');

  mailLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!mailLinkCopy.classList.contains('active')) {
      mailLinkCopy.classList.add('active');
      mailLinkCopy.addEventListener('click', (evt) => {
        evt.preventDefault();
        mailLinkCopy.classList.remove('active');
      });
    } else {
      mailLinkCopy.classList.remove('active');
    }
  });

  let dropdownButton = document.querySelector('.search-form__dropdown-button');
  let dropdownContent = document.querySelector(
    '.search-form__dropdown-content',
  );
  let dropdownLinks = document.querySelectorAll('.search-form__dropdown-link');
  let dropdownForm = document.querySelector('.search-form__dropdown');

  dropdownButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!dropdownContent.classList.contains('active')) {
      dropdownContent.classList.add('active');
      dropdownLinks.forEach((element) => {
        element.addEventListener('click', (evt) => {
          evt.preventDefault();
          dropdownButton.textContent = element.textContent;
          dropdownContent.classList.remove('active');
        });
      });
    } else {
      dropdownContent.classList.remove('active');
    }
  });

  document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target == dropdownForm || dropdownForm.contains(target);
    const its_button = target == dropdownButton;
    const its_content = target == dropdownContent;
    if (!its_menu && !its_button && !its_content) {
      dropdownContent.classList.remove('active');
    }
  });

  //POPUP
  let phoneLink = header.querySelector('.header__phone-link');
  let overlay = document.querySelector('.overlay');
  let popupContacts = document.querySelector('.contacts');
  let popupClose = popupContacts.querySelector('.contacts__close');
  let headerTop = header.querySelector('.header__top');
  let headerMiddle = header.querySelector('.header__middle');

  phoneLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupContacts.style.display = 'flex';
    overlay.style.display = 'block';
    headerTop.style.position = 'absolute';
    headerTop.style.width = '100%';
    headerMiddle.style.paddingTop = '48px';
  });
  popupClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupContacts.style.display = 'none';
    overlay.style.display = 'none';
    headerTop.style.position = 'static';
    headerMiddle.style.paddingTop = '0';
  });
});

// SWIPER

const swiper = new Swiper('.main-catalog__slider-container', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.main-catalog__slider-pagination',
    clickable: true,
  },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //freemod - для категорий
});
