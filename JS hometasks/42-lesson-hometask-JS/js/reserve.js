const reserveBox = document.querySelector(".reserveBox");
const reserveBtn = document.querySelector("#reserveBtn");
const confirmedText = document.querySelector(".confirmedText");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const guest = document.querySelector("#guest");
const occasion = document.querySelector("#occasion");

reserveBtn.addEventListener("click", () => {
  //   e.preventDefault();
  //   foo();
  if (occasion.value === 'Birthday' || occasion.value === 'Anniversary' || occasion.value === 'Party') {
    reserveBox.style.display = "none";
    confirmedText.style.display = "block";
  }
});
