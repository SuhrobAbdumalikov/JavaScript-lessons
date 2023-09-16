const app = document.querySelector('#app');
let count = 0;
const render = (count = 0) =>{
    return `
    <button onclick="inc()">+</button>
    <h1>${count}</h1>
    <p>${count>=10 ? 'lorem ipsum dolor ipsum  hello world' : ''}</p>
    `
}

app.innerHTML = render();
//korish kerak=======>>
//conditional rendering

const inc = () => {
    count++;
    
    const virtualDom = render(count);
    const currentDom = document.querySelector('#app').querySelectorAll('*');

    const range = document.createRange();// bu bitta dom yaratab beradi..;

    const parsedVirtualDomElements = range.createContextualFragment(virtualDom); // bu parse qilib beradi html oki exemelga..;
    const virtualDomElements = parsedVirtualDomElements.querySelectorAll('*');
    virtualDomElements.forEach((el,idx) => {
        if (!el.isEqualNode(currentDom[idx],el)) {
            currentDom[idx].textContent = el.textContent;
        }
    })

    // diff => difference
}


// const inc = () => {
//     count++;
//     app.innerHTML = render(count);
// }