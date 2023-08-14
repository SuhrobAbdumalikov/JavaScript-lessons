import { APi } from "./js/data.js";
import { currency } from "./js/components.js";
let from = 0;
let fromBase = "AUD";
let to = 0;
let toBase = "AUD";
let result = {};

// (async () => {
//   const response = await fetch(APi);
//   const data = await response.json();
//   result = data;
//   render();
// })();

// function render() {
//   const root = document.querySelector("#root");

//   root.innerHTML = currency(Object.keys(result?.data), from, fromBase);
//   root.innerHTML += currency(Object.keys(result?.data), to, toBase);
//   const spans = document.querySelectorAll("span");
//   spans.forEach((span) =>
//     span.addEventListener("click", () => {
//       fromBase = span.textContent;
//       render();
//     })
//   );
//   const fromInputValue = document.querySelector("#from");
//   fromInputValue.addEventListener("input", (e) => {
//     console.log(result.data[toBase] * e.target.value);
//   });
// }


(async () => {
  const response = await fetch(APi);
  const data = await response.json();
  result = data;
  render();
})();

const root = document.querySelector("#root");
function render() {
  root.innerHTML = "";

  const handleCurrencyClick = (currency) => {
    fromBase = currency;
    toBase = currency;
    render();
  };

  const fromCurrencyElement = currency(
    Object.keys(result.data),
    from,
    fromBase,
    handleCurrencyClick
  );
  fromCurrencyElement.addEventListener("input", (e) => {
    from = e.target.value;
    render();
  });
  root.appendChild(fromCurrencyElement);

  const toCurrencyElement = currency(
    Object.keys(result.data),
    to,
    toBase,
    handleCurrencyClick
  );
  toCurrencyElement.addEventListener("input", (e) => {
    to = e.target.value;
    render();
  });
  root.appendChild(toCurrencyElement);

  const fromInputValue = document.querySelector("#from");
    fromInputValue.addEventListener("input", (e) => {
      console.log(Math.floor(result.data[toBase] * e.target.value));
      Math.floor(result.data[toBase] * e.target.value)
      render()
    });
}