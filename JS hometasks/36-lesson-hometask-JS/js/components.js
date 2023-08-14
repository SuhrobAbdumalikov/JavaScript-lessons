export const currency = (currencyList, from, fromBase, handleClick) => {
  // const res =  `<div class="currency-container">
  //     <div class="currency-list">
  //     ${currencyList
  //       .map(
  //         (currency) =>
  //           `<span class="${
  //             fromBase === currency ? "active" : ""
  //           }">${currency}</span>`
  //       )
  //       .join("")}
  //     </div>
  //     <input type="number" value="${from}" id="from"/>
  //   </div>`;
  //   // console.log(res);
  //   return res
  //   // console.log();

  //create element section
   const divC_container = document.createElement("div");
   const divC_list = document.createElement("div");
   const input = document.createElement("input");


   //set attribute section
   divC_list.setAttribute("class", "currency-list");
   input.setAttribute("type", "number");
   input.setAttribute("value", from);
   input.setAttribute("id", "from");
   divC_container.setAttribute("class", "currency-container");


   //foreach currency list and click span section
   currencyList.forEach((currency) => {
     const span = document.createElement("span");
     span.textContent = currency;
     span.className = fromBase === currency ? "active" : "";
     span.addEventListener("click", () => handleClick(currency));
     divC_list.appendChild(span);
   });

   //finally append child section
   divC_container.appendChild(divC_list);
   divC_container.appendChild(input);

   return divC_container;
};