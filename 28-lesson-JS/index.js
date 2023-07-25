// const contextMenu = document.querySelector('#custom-menu');

// document.addEventListener('contextmenu',(event) =>{
//     event.preventDefault()
//     if (contextMenu.hasAttribute('hidden')) {
//         contextMenu.removeAttribute('hidden')
//     }else{
//         contextMenu.setAttribute('hidden','')
//     }
// })

// ===================================================

const container = document.querySelector("#container");
const context = document.querySelector("#context");

const characters = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

characters.forEach((item) => {
  const row = document.createElement("div");
  row.classList.add("row");

  item.forEach((char) => {
    const span = document.createElement("span");
    span.addEventListener("click", () => {
      handleSpanClick(char);
    });

    span.textContent = char;
    span.setAttribute("key", char);
    row.appendChild(span);
  });
  container.appendChild(row);
});

function toggleActive(e) {
  const el = document.querySelector(`[key = '${e}']`); 
  el.classList.toggle("active");
  setTimeout(() => {
    el.classList.remove("active");
  }, 500);
  context.textContent += e;
  return el;
}

document.addEventListener("keydown", (e) => {
  toggleActive(e.key);
});

function handleSpanClick(param) {
  toggleActive(param);
}
