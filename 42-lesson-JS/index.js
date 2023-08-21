// import { isArray } from "lodash";
// import isArray from "./node_modules/lodash/isArray.js";
// console.log(isArray([1234]));

import Swiper from "./node_modules/swiper/swiper-bundle.min.mjs";
// import Swiper from "swiper";
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
