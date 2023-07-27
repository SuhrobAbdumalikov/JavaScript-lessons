const timerInputsBox = document.querySelector(".timerInputs");
const hourEnter = document.querySelector("#hourEnter");
const minEnter = document.querySelector("#minEnter");
const secondEnter = document.querySelector("#secondEnter");
const btnSave = document.querySelector(".btnSave");
const timesBox = document.querySelector(".timesBox");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");
const btnStart = document.querySelector(".start");
const btnChoose = document.querySelector(".choose");
const btnReset = document.querySelector(".Reset");
const btnPause = document.querySelector(".Pause");


btnChoose.addEventListener('click',() =>{
    timerInputsBox.style.opacity = 1;
    timerInputsBox.style.pointerEvents = 'auto';
    timesBox.style.opacity = 0;
    timesBox.style.pointerEvents = 'none';
    btnChoose.style.display = 'none';
    btnStart.style.display = 'initial';
})




btnSave.addEventListener('click',() =>{
    timerInputsBox.style.opacity = 0;
    timerInputsBox.style.pointerEvents = 'none';
    timesBox.style.opacity = 1;
    timesBox.style.pointerEvents = 'auto';
    // if (hourEnter.value === 0) {
    //     btnSave.setAttribute("disabled","");
    // }
})


let hour1 = 0, minute1 = 0, seconds1 = 0;
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



btnReset.addEventListener('click',() =>{
    window.location.reload();
})


function CountTime() {
    function timerInfo() {
        let fulltime = hour1*3600 + minute1*60 + seconds1;
        fulltime--;
        if (fulltime === 0) {
            clearInterval(Interval)
        }

            hour1 = Math.floor(fulltime / 3600);
            minute1 = Math.floor(fulltime / 60) % 60;
            seconds1 = Math.floor(fulltime % 60);
            hour.innerHTML = hour1 < 10 ? "0" + hour1 : hour1;
            minute.innerHTML = minute1 < 10 ? "0" + minute1 : minute1;
            seconds.innerHTML = seconds1 < 10 ? "0" + seconds1 : seconds1;
    }

    let Interval = setInterval(timerInfo,1000);
}


btnStart.addEventListener('click',() =>{
    CountTime()
    btnStart.setAttribute("disabled","");
})


btnPause.addEventListener('click',() =>{
   clearInterval(); 
})


