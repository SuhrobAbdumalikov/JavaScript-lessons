const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");
const hourEnter = document.querySelector("#hourEnter");
const minEnter = document.querySelector("#minEnter");
const secondEnter = document.querySelector("#secondEnter");
const startTime = document.querySelector(".start");
const ResetTime = document.querySelector(".Reset");
const PauseTime = document.querySelector(".Pause");

// const enter = prompt(`vaqt kirit`);
const currentYear = new Date();
const newYear = new Date(` ${currentYear} 00:00:00`);

// let hours = 0
// let secondss = 0
// let minutes = 0

ResetTime.addEventListener("click", () => {
  window.location.reload();
});

var hour1 = 0,
  minute1 = 0,
  seconds1 = 0;

hourEnter.addEventListener("change", (e) => {
  hour1 = e.target.value * 1;
  hour.innerHTML = hour1 < 10 ? "0" + hour1 : hour1;
});

minEnter.addEventListener("change", (e) => {
  minute1 = e.target.value * 1;
  minute.innerHTML = minute1 < 10 ? "0" + minute1 : minute1;
});

secondEnter.addEventListener("change", (e) => {
  seconds1 = e.target.value * 1;
  seconds.innerHTML = seconds1 < 10 ? "0" + seconds1 : seconds1;
});

function CountTime() {
  function aaa() {
    let FullTime = hour1 * 3600 + minute1 * 60 + seconds1;
    FullTime--;
    if (FullTime === 0) {
      clearInterval(Interval);
    }
    console.log(FullTime);
    hour1 = Math.floor(FullTime / 3600);
    minute1 = Math.floor(FullTime / 60) % 60;
    seconds1 = Math.floor(FullTime % 60);
    hour.innerHTML = hour1 < 10 ? "0" + hour1 : hour1;
    minute.innerHTML = minute1 < 10 ? "0" + minute1 : minute1;
    seconds.innerHTML = seconds1 < 10 ? "0" + seconds1 : seconds1;
  }
  let Interval = setInterval(aaa, 1000);
}

startTime.addEventListener("click", (e) => {
  // const result = setInterval(CountTime)
  // console.log(result);
  CountTime();
});
