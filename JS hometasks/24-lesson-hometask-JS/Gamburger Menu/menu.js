const Menu = document.getElementsByTagName("aside");
const bars = document.getElementsByTagName("i");
let OpenInfo = false;
function MenuInfo() {
  if (OpenInfo) {
    Menu[0].removeAttribute("class");
    bars[0].setAttribute("class", "fa-solid fa-bars fa-xl");
    OpenInfo = false;
  } else {
    Menu[0].setAttribute("class", "active");
    bars[0].setAttribute("class", " fa-solid fa-xmark fa-xl");
    OpenInfo = true;
    // bars[0].setAttribute("fa-solid fa-xmark",'class');
  }
}
// const btn = document.getElementById('btn').addEventListener('click',MenuInfo)
