// Promise============>>

//===masala====>>
// const numbers = [7, 3, 2, 4, 5];
// const target = 9;

// function foo(numbers,target) {
//     // numbers.forEach(el => {
//     //     el.map((item) =>{
//     //        return item+1;
//     //     })
//     // });
//     for (let i = 0; i < numbers.length; i++) {
//         numbers.forEach(element => {
//             element.map((item) => console.log(item+1))
//         });
//     }

// }
// console.log(foo(numbers,target));

//====== masala 2 =======>>
// const numbers1 = [7, 1, 6, 2, 4, 5];
// const target1 = 9;

// function foo(numbers,target) {
//     const r = {}
//     for (let i = 0; i < numbers.length; i++) {
//         const n = target - numbers[i]
//         r[numbers[i]] = i
//         if (r[n]) {
//             return [r[n]+1,i+1]
//         }
//     }
// }
// console.log(foo(numbers1,target1));

//===================================>> homework <<===============================

const APi = fetch("https://jsonplaceholder.typicode.com/posts");
const ul = document.querySelector("#ul");

const res1 = (data) => {
  if (!data.ok) {
    throw new Error(`HTTP error! Status: ${data.status}`);
  }
  return data.json();
};

const res2 = (data) => {
  ul.innerHTML = ""; 
  data.forEach((data2) => {
    const li = document.createElement("li");
    li.textContent = data2.title;
    ul.appendChild(li);
  });
};

const reject = (res) => {
  console.error(res);
};

APi.then(res1).then(res2).catch(reject);