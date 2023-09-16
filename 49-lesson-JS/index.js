const container = document.querySelector("#container");
const pagination = document.querySelector("#pagination");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

// const perPageItems = 10;
// const currentPage = 1;

// (async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/comments");
//   const data = await res.json();
//   const paginationListItemsCount = Math.ceil(data.length / perPageItems);

//   function render() {
//     container.innerHTML = "";
//     const slicedData = data.slice(
//       (currentPage - 1) * 10,
//       (currentPage - 1) * 10 + perPageItems
//     );
//     slicedData.forEach((data) => {
//       const p = document.createElement("p");
//       p.textContent = `${data.id}.${data.title || data.body}`;
//       container.appendChild(p);
//     });
//   }

//   for (let i = 1; i <= paginationListItemsCount; i++) {
//     const li = document.createElement("li");
//     li.textContent = i;
//     currentPage === i && li.classList.add("active");
//     li.addEventListener("click", (el) => {
//       currentPage = +el.target.textContent;
//       document.querySelectorAll("li").forEach((li) => {
//         li.classList.remove("active");
//       });
//       render();
//       li.classList.add("active");
//     });

//     pagination.appendChild(li);
//   }
//   render();

//   next.addEventListener('click',() => {
//     currentPage++;
//     render()
//   })
// })();

// const container = document.querySelector("#container");
// const pagination = document.querySelector("#pagination");

// const previous = document.querySelector(".previous");
// const next = document.querySelector(".next");

const perPageItems = 10;
let correntPage = 1;

(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  const paginationListItemsCount = Math.ceil(data.length / perPageItems);

  function render() {
    container.innerHTML = "";
    const sliceData = data.slice(
      (correntPage - 1) * 10,
      (correntPage - 1) * 10 + perPageItems
    );
    sliceData.forEach((data) => {
      const p = document.createElement("p");
      p.textContent = `${data.id}. ${data.title || data.body}`;
      container.appendChild(p);
    });
  }

  for (let i = 1; i <= paginationListItemsCount; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    correntPage === i && li.classList.add("active");
    li.addEventListener("click", (el) => {
      correntPage = +el.target.textContent;
      document.querySelectorAll("li").forEach((li) => {
        li.classList.remove("active");
      });
      render();
      li.classList.add("active");
    });

    pagination.appendChild(li);
  }
  render();

  next.addEventListener("click", () => {
    if (correntPage < paginationListItemsCount) {
      correntPage++;
      //   render();
      document.querySelectorAll("li").forEach((li, idx) => {
        idx + 1 !== correntPage
          ? li.classList.remove("active")
          : li.classList.add("active");
      });
      render();
      pagination.scrollBy(80, 0);
    }
  });

  prev.addEventListener("click", () => {
    if (1 < correntPage) {
      correntPage--;
      document.querySelectorAll("li").forEach((li, idx) => {
        idx + 1 !== correntPage
          ? li.classList.remove("active")
          : li.classList.add("active");
      });
      render();
      pagination.scrollBy(-80, 0);
    }
  });
})();
