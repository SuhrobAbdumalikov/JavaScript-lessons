const Menu = document.getElementsByTagName('aside');

let OpenInfo = false
function MenuInfo() {
    if (OpenInfo) {
        Menu[0].removeAttribute('class');
        OpenInfo = false;
    }else{
        Menu[0].setAttribute('class','active');
        OpenInfo = true;
    }
}
// const btn = document.getElementById('btn').addEventListener('click',MenuInfo)