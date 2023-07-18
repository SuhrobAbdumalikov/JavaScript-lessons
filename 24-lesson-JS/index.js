//24-lesson-JS DOM
// const li = document.getElementsByTagName('li')//tagname boyicha olish
const getEyeIcon = document.getElementById('eye-icon');
const getInput = document.getElementById('input');
const image = document.getElementById('images')

//chhuqur uyquu

function foo() {
    const currentType = getInput.getAttribute('type')

    if (currentType === 'password') {
        document.getElementById('input').setAttribute('type','text')
        getEyeIcon.setAttribute('class','fa-solid fa-eye')
    }else{
        document.getElementById('input').setAttribute('type', 'password')
        getEyeIcon.setAttribute('class','fa-solid fa-eye-slash')
    }
    changeImg()
}

function changeImg() {
    if (getEyeIcon.getAttribute('class') === 'fa-solid fa-eye-slash') {
       image.setAttribute('src','https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg') 
    }else{
        image.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdEBT_VAPNK9KgAij7Kb5ItMnEDhdFSlcrBCtuuv-oY6MfauRPRM9bmZsmTDGvsDF8Ow&usqp=CAU')
    }
}