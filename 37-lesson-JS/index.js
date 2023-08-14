// const themeBtn = document.querySelector('button');

// themeBtn.addEventListener('click',() => {
//     root.setAttribute('theme',root.getAttribute('theme') === 'light' ? 'dark' : 'light');
//     localStorage.setItem('theme',root.getAttribute('theme'));
// })


const btn = document.querySelectorAll('button');
const result = document.querySelector('h1');
let count = localStorage.getItem('count');

result.textContent = 'Result: ' + +count;
// btn[0].addEventListener('click',() => {
//     render(count++);
// })

btn[0].addEventListener('click',() => {
    // count = 0;
    render(count++);
})

btn[1].addEventListener('click',() => {
    render(count--);
})



function render(count) {
    localStorage.setItem('count',count);
    result.textContent = 'Result: ' + +count;

}



