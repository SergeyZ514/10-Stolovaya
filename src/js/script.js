'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //HEADER DESKTOP
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

  // POPUP
  let phoneLink = header.querySelector('.header__phone-link');
  let overlay = document.querySelector('.overlay');
  let popupContacts = document.querySelector('.contacts');
  let popupClose = popupContacts.querySelector('.contacts__close');
  let headerTop = header.querySelector('.header__top');
  let headerMiddle = header.querySelector('.header__middle');

  phoneLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    let width = document.documentElement.clientWidth;
    if (width > 767) {
      popupContacts.style.display = 'flex';
      overlay.style.display = 'block';
      headerTop.style.position = 'absolute';
      headerTop.style.width = '100%';
      headerMiddle.style.paddingTop = '48px';
    } else {
      popupContacts.style.display = 'flex';
      overlay.style.display = 'block';
    }
  });

  popupClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    popupContacts.removeAttribute('style');
    overlay.removeAttribute('style');
    headerTop.removeAttribute('style');
    headerMiddle.removeAttribute('style');
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
  });

  // ADAPTIVE HEADER
  window.addEventListener('resize', () => {
    adaptive_function();
  });

  let searchButton = header.querySelector('.search-form__search-button'),
    searchButtonImage = header.querySelector(
      '.search-form__search-button > img',
    ),
    phoneLinkImage = header.querySelector('.header__phone-link > img'),
    middleColumn1 = header.querySelector('.header__middle-column:first-child'),
    middleColumn2 = header.querySelector('.header__middle-column:nth-child(2)'),
    meddleColumn3 = header.querySelector('.header__middle-column:last-child'),
    searchForm = header.querySelector('.search-form'),
    phoneLinkParent = header.querySelector(
      '.header__top-column:last-child > li:last-child',
    ),
    headerLogo = document.querySelector(
      '.header__middle-column:first-child > a',
    );

  function adaptive_function() {
    let width = document.documentElement.clientWidth;
    if (width <= 767) {
      searchButtonImage.setAttribute('src', 'img/header/glass_mobile.png');
      middleColumn2.append(searchButton);
      phoneLinkImage.setAttribute('src', 'img/header/phone_mobile.png');
      middleColumn2.append(phoneLink);
    } else {
      searchForm.append(searchButton);
      searchButtonImage.setAttribute('src', 'img/header/glass.png');
      phoneLinkImage.setAttribute('src', 'img/header/phone.png');
      phoneLinkParent.append(phoneLink);
      headerTop.classList.remove('active');
      searchForm.classList.remove('active');
    }
    if (width <= 576) {
      headerTop.prepend(headerLogo);
    } else {
      middleColumn1.append(headerLogo);
    }
  }

  adaptive_function();

  // HEADER MENU
  let hambuger = header.querySelector('.header__hamburger');
  hambuger.addEventListener('click', () => {
    let width = document.documentElement.clientWidth;
    let closeBtn = document.createElement('div');
    closeBtn.innerHTML = '&times;';
    closeBtn.classList.add('close_button');
    header.append(closeBtn);
    if (!headerTop.classList.contains('active') && width <= 767) {
      headerTop.classList.add('active');
      overlay.style.display = 'block';
      closeBtn.addEventListener('click', () => {
        if (width <= 767) {
          closeBtn.remove();
          headerTop.classList.remove('active');
          overlay.style.display = 'none';
        }
      });
    } else {
      headerTop.classList.remove('active');
      overlay.style.display = 'none';
    }
  });

  // SEARCH MENU
  searchButton.addEventListener('click', () => {
    let width = document.documentElement.clientWidth;
    if (width <= 767 && !searchForm.classList.contains('active')) {
      searchForm.classList.add('active');
    } else {
      searchForm.classList.remove('active');
    }
  });
});
