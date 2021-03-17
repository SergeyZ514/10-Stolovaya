'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //HEADER DESKTOP
  const header = document.querySelector('.header'),
    mailLink = header.querySelector('.header__mail-link'),
    mailLinkCopy = header.querySelector('.header__mail-link-copy');

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

  const dropdownForm = document.querySelector('.search-form__dropdown'),
    dropdownButton = dropdownForm.querySelector(
      '.search-form__dropdown-button',
    ),
    dropdownContent = dropdownForm.querySelector(
      '.search-form__dropdown-content',
    ),
    dropdownLinks = dropdownForm.querySelectorAll(
      '.search-form__dropdown-link',
    );

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

  // CONTACTS POPUP
  const phoneLink = header.querySelector('.header__phone-link'),
    overlay = document.querySelector('.overlay'),
    popupContacts = document.querySelector('.contacts'),
    popupClose = popupContacts.querySelector('.contacts__close'),
    headerTop = header.querySelector('.header__top'),
    headerMiddle = header.querySelector('.header__middle');

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
    spaceBetween: 5,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.main-catalog__slider-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // ADAPTIVE
  window.addEventListener('resize', () => {
    adaptive_function();
  });

  const searchButton = header.querySelector('.search-form__search-button'),
    searchButtonImage = header.querySelector(
      '.search-form__search-button > img',
    ),
    phoneLinkImage = header.querySelector('.header__phone-link > img'),
    middleColumn1 = header.querySelector('.header__middle-column:first-child'),
    middleColumn2 = header.querySelector('.header__middle-column:nth-child(2)'),
    searchForm = header.querySelector('.search-form'),
    phoneLinkParent = header.querySelector(
      '.header__top-column:last-child > li:last-child',
    ),
    headerLogo = document.querySelector(
      '.header__middle-column:first-child > a',
    ),
    catalogAccordion = document.querySelector('.main-catalog__title'),
    giftboxImage = document.querySelector('.main-catalog__gift-img > img'),
    recommendImage1 = document.querySelector('.recommend__item_vertical > img'),
    recommendImage2 = document.querySelector('.recommend__item_top > img'),
    recommendImage3 = document.querySelector('.recommend__item_bot > img');

  function adaptive_function() {
    let width = document.documentElement.clientWidth;
    if (width <= 767) {
      searchButtonImage.setAttribute('src', 'img/header/glass_mobile.png');
      middleColumn2.append(searchButton);
      phoneLinkImage.setAttribute('src', 'img/header/phone_mobile.png');
      middleColumn2.append(phoneLink);
      catalogAccordion.textContent = 'Оборудование';
      giftboxImage.setAttribute('src', 'img/main-catalog/giftbox_mobile.png');
      recommendImage1.setAttribute('src', 'img/recommend/1_mobile.png');
      recommendImage2.setAttribute('src', 'img/recommend/2_mobile.png');
      recommendImage3.setAttribute('src', 'img/recommend/3_mobile.png');
    } else {
      searchForm.append(searchButton);
      searchButtonImage.setAttribute('src', 'img/header/glass.png');
      phoneLinkImage.setAttribute('src', 'img/header/phone.png');
      phoneLinkParent.append(phoneLink);
      headerTop.classList.remove('active');
      searchForm.classList.remove('active');
      catalogAccordion.textContent = 'Целевые предложения';
      giftboxImage.setAttribute('src', 'img/main-catalog/giftbox.png');
      recommendImage1.setAttribute('src', 'img/recommend/1.png');
      recommendImage2.setAttribute('src', 'img/recommend/2.png');
      recommendImage3.setAttribute('src', 'img/recommend/3.png');
    }
    if (width <= 576) {
      headerTop.prepend(headerLogo);
    } else {
      middleColumn1.append(headerLogo);
    }
  }

  adaptive_function();

  // HEADER MENU
  const hambuger = header.querySelector('.header__hamburger');
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

  // ACCORDIONS

  function accordion767(accordionName) {
    accordionName.addEventListener('click', function () {
      let width = document.documentElement.clientWidth;
      if (width <= 767) {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      }
    });
  }

  accordion767(catalogAccordion);
});
