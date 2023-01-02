// import { Swiper } from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';
import Swiper from "./swpier.js";
const swiper = new Swiper();
var mySwiper = new Swiper(".swiper", {
  // direction: "vertical", // 垂直切换选项
  loop: true, // 循环模式选项
  // freeMode: true, // 自由模式
  touchRatio: 0.6, //触摸变慢
  zoom: true, //开启缩放功能
  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 如果需要滚动条
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
