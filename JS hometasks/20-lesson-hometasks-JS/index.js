//20-lesson-Js-Homeworks

// [ '<div>hell</div>', '<p>o w</p>', '<span>or</span>', 'ld' ]  result:=====================>>
let n1=2,n2=4,p1=4,p2=7,s1=7,s2=9;
const arr = [
  [n1, n2, "div"],
  [p1, p2, "p"],
  [s1, s2, "span"],
];

let str = "hello world", newArr = [],newArr2 = [],newArr3 = []; 
let a = str.slice(s2);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][0]) {
                newArr =  `<${arr[0][2]}>${str.slice(n1,n2)}</${arr[0][2]}>` 
            }
            if (arr[i][1]) {
                newArr2 = `<${arr[1][2]}>${str.slice(p1,p2)}</${arr[1][2]}>` 
            }
            if (arr[i][2]) {
                newArr3 = `<${arr[2][2]}>${str.slice(s1,s2)}</${arr[2][2]}>` 
            }  
        }       
    }
let result = [newArr,newArr2,newArr3,a].join(",") 
console.log(`<button> ${result} </button>`);




