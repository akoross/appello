import testWebP from"./modules/testWebP.js";testWebP();import isMobile from"./modules/isMobile.js";if(isMobile(),document.body.classList.values("_touch")){const e=document.querySelectorAll(".menu__arrow");e.length>0&&e.forEach((e=>{e.addEventListener("click",(()=>{e.parentElement.classList.toggle("_active")}))}))}const menuLinks=document.querySelectorAll(".menu__link[data-goto]");menuLinks.length>0&&menuLinks.forEach((e=>{e.addEventListener("click",(t=>{if(e.dataset.goto&&document.querySelector(e.dataset.goto)){const o=document.querySelector(e.dataset.goto).getBoundingClientRect().top+pageXOffset-document.querySelector("header").offsetHeight;menuIcon.classList.contains("_active")&&(document.body.classList.remove("_lock"),menuIcon.classList.remove("_active"),menuBody.classList.remove("_active")),window.scrollTo({top:o,behavior:"smooth"}),t.preventDefault()}}))}));const menuIcon=document.querySelector("#menu-icon"),menuBody=document.querySelector("#menu-body");menuIcon&&menuIcon.addEventListener("click",(()=>{console.log("menuBody",menuBody),document.body.classList.toggle("_lock"),menuIcon.classList.toggle("_active"),menuBody.classList.toggle("_active")}));import Swiper from"https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},spaceBetween:10,breakpoints:{320:{slidesPerView:2,spaceBetween:13},480:{slidesPerView:3,spaceBetween:13},640:{slidesPerView:4,spaceBetween:13},960:{slidesPerView:5,spaceBetween:13},1070:{slidesPerView:7,spaceBetween:13}}});