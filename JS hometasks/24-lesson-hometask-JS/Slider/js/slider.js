const image = document.getElementById('img1');
const text = document.getElementById('h1')
const images = [
    {
        img:`/JS hometasks/24-lesson-hometask-JS/Slider/images/slider-im-1.jpg`,
        txt: 'Picture 1',
    },
    {
        img:`/JS hometasks/24-lesson-hometask-JS/Slider/images/slider-im-2.webp`,
        txt: 'Picture 2',
    },
    {
        img:`/JS hometasks/24-lesson-hometask-JS/Slider/images/slider-im-3.webp`,
        txt: 'Picture 3',
    },
]
let currentImg = 0;

function sliderImg() {
    currentImg++;
    if (currentImg > images.length-1) {
        currentImg = 0
    }
    image.src = images[currentImg].img;
    text.textContent = images[currentImg].txt
}