const timer = document.querySelector("#timer");
const mainText = document.querySelector("#mainText");
const textareaUser = document.querySelector("#textareaUser");
const btnStart = document.querySelector("#btnStart");
const result = document.querySelector("#result");
const btnChangeText = document.querySelector("#btnChangeText");
const accuracy = document.querySelector(".Accuracy span");
const mistakes = document.querySelector(".Mistakes span");
const correct = document.querySelector(".correct span");
const typingBox = document.querySelector(".typingBox");
const start = document.querySelector("#start");
const main = document.querySelector("main");
const selectTime = document.querySelector("#selectTime");

let currentText = 1
const allTexts = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sapiente inventore aperiam nesciunt voluptatibus ducimus perferendis quis, numquam impedit harum.",
  },
  {
    id: 2,
    text: "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued distances show us how mother-in-laws can be charleses. Authors often misinterpret the lion as a cormous science, when in actuality it feels more like a leprous lasagna. Recent controversy aside",
  },
  {
    id: 3,
    text:   "Those cowbells are nothing more than elements. This could be, or perhaps before stockings, thoughts were only opinions. A coil of the exclamation is assumed to be a hurtless toy. A board is the cast of a religion. In ancient times the first stinko sailboat is, in its own way, an exchange. Few can name a tutti channel that isn't a footless operation. Extending this logic, an oatmeal is the rooster of a shake. Those step-sons are nothing more than matches.",
  },
];

//textni ozgartirish funksiyasi
function StopText() {}
btnChangeText.addEventListener("click", () => {});

// text ning xar bit xarifini olish uchun
let text = "";
text = allTexts[currentText].text;
let arr = text.split("").map((value) => {
  return "<span class='text-chars'>" + value + "</span>";
});
mainText.innerHTML += arr.join("");

let incorrectLetters = 0;
//sozlarni hioblovchi funksiya
textareaUser.addEventListener("input", () => {
  let textChars = document.querySelectorAll(".text-chars");
  textChars = Array.from(textChars);
  let userInputChars = textareaUser.value.split("");

  textChars.forEach((char, index) => {
    if (userInputChars[index] == null) {
      char.classList.remove("success");
      char.classList.remove("fail");
    } else if (char.textContent === userInputChars[index]) {
      char.classList.add("success");
      char.classList.remove("fail");
    } else {
      char.classList.add("fail");
      char.classList.remove("success");
    }
  });
});

//start tugmasi bosilgnda timer boshlanishi va 0 da toxtashi.
var count = 20;
timer.textContent = `${count}s`;
selectTime.addEventListener("change", (e) => {
  count = e.target.value * 1 * 60;
  // console.log(count);
  
  timer.textContent = `${count}s`;
});



function CountTime() {
  function intervalOwn() {
    if (count > 0) {
      count--;
    } else if (count === 0) {
      let texta =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sapiente inventore aperiam nesciunt voluptatibus ducimus perferendis quis, numquam impedit harum.";
      let counterr = 0;

      for (let i = 0; i < typetext.length; i++) {
        if (texta[i] !== typetext[i]) counterr++;
      }
      result.style.display = "initial";
      accuracy.innerHTML = `(${Math.floor((counterr / 169) * 100)})%`;
      mistakes.innerHTML = `${counterr} ta`;
      correct.innerHTML = `${169 - counterr} ta`;

      console.log(counterr);
      clearInterval(inter);
      textareaUser.setAttribute("disabled", "");
    }
    timer.textContent = `${count}s`;
  }
  let inter = setInterval(intervalOwn, 1000);
}
btnStart.addEventListener("click", () => {
  CountTime();
  textareaUser.removeAttribute("disabled");
});

var typetext = "";
textareaUser.addEventListener("input", (e) => {
  typetext = e.target.value;
  if (typetext.length === 169) {
    textareaUser.setAttribute("disabled", "");
  }
});

//=======================================================================================>>

start.addEventListener("click", () => {
  main.style.display = "none";
  typingBox.style.opacity = 1;
  typingBox.style.pointerEvents = "auto";
});
