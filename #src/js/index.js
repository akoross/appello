import testWebP from './modules/testWebP.js';
testWebP();
import isMobile from './modules/isMobile.js';
isMobile();

if (document.body.classList.values('_touch')) {
  const menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    menuArrows.forEach((e) => {
      e.addEventListener('click', () => {
        e.parentElement.classList.toggle('_active');
      });
    });
  }
}

//---- прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
        const gotoBlock = document.querySelector(link.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageXOffset -
          document.querySelector('header').offsetHeight;

        if (menuIcon.classList.contains('_active')) {
          document.body.classList.remove('_lock');
          menuIcon.classList.remove('_active');
          menuBody.classList.remove('_active');
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth',
        });
        e.preventDefault();
      }
    });
  });
}

//------burger---

const menuIcon = document.querySelector('#menu-icon');
const menuBody = document.querySelector('#menu-body');
if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    console.log('menuBody', menuBody);
    document.body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

//-----------Swiper---------------
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 13,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 13,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 13,
    },
    960: {
      slidesPerView: 5,
      spaceBetween: 13,
    },
    1070: {
      slidesPerView: 7,
      spaceBetween: 13,
    },
  },
});
