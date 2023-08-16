const arr = [2, 3, 4, 1, 5]; //result => [[3,2,4,1],[2,4,5,1]];
let r = {};
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    r[arr[i] + arr[j]] = r[arr[i] + arr[j]]
      ? r[arr[i] + arr[i + 1]]
      : r[arr[i] + arr[i + 1]];
  }
}
console.log(r);

