// function success(loc) {
//   console.log(loc);
//   const {
//     coords: { latitude, longitude },
//   } = loc;

//   var map = L.map("map").setView([latitude, longitude], 13);

//   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(map);

//   var marker =   L.marker([latitude, longitude]).addTo(map);
//   L.marker([latitude, longitude])
//     .addTo(map)
//     .bindPopup("You are here Now")
//     .openPopup();

//   // console.log(latitude,longitude);
//   // console.log(`https://www.google.com/maps/@,`);
// }

// function error() {
//   console.log("error");
// }

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(success, error);
// }
// =======================================================================================================>>

//linked list ==============>>
//navigator methods ==========>>
//leaflet ========>>
//darg and drop =======>>
//life cycle methods =========>>
//contentEditable =========>>
//formData ====>>

//share ========== but it is not working now in ch
// const button = document.querySelector('button');

// button.addEventListener('click',() => {
//     navigator.share({text: 'hello world', url: 'https://kun.uz'});
// })

//================================================================================>>
// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const p = document.querySelector('p');
// input.addEventListener('blur',(e) => {
//     if (!e.target.value.includes('@')) {
//         p.innerHTML = 'email valid emas';
//     }else{
//         p.innerHTML = '';
//     }
// })

// input.addEventListener('focus',(e) => {
//     p.innerHTML = '';
// })

// ===========================================>>
const controller = new AbortController();
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

// console.log(controller);

const fetchs = urls.map((url) => {
 return fetch(url, {
    signal: controller.signal,
  }).then((data) => {
    data.json();
  });
});
Promise.all(fetchs)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

controller.abort("Nimadir");
