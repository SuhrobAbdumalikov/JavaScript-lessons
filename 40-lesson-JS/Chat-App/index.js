const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

localStorage.setItem("fullName", prompt("Enter your Name: "));

const socket = new WebSocket("ws://206.189.88.251:8080");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const message = input.value;
  const data = JSON.stringify({
    eventType: "NewMessage",
    from: localStorage.getItem("fullName"),
    message,
  });
  socket.send(data);
  input.value = "";
});

socket.onmessage = (msg) => {
  const parsedData = JSON.parse(msg.data);
  if (parsedData?.data?.eventType === "NewUser") {
    const systemMessage = document.createElement("p");
    systemMessage.textContent = `${parsedData.data.userName} guruhga qo'shildi.`;
    ul.appendChild(systemMessage);
  } else if (parsedData.eventType === "NewMessage") {
    const li = document.createElement("li");
    li.classList.add(
      "chatroom_history_list_item",
      `chatroom_history_list_item--${
        localStorage.getItem("fullName") === parsedData.from ? "right" : "left"
      }`,
      `chatroom_history_list_item--${
        localStorage.getItem("fullName") === parsedData.from ? "blue" : "grey"
      }`
    );
    li.innerHTML = `<b class="userContent">${parsedData.from}</b> <b>${parsedData.message}</b>`;
    ul.appendChild(li);
  }
};

socket.onopen = () => {
  const data = {
    fullName: localStorage.getItem("fullName"),
    eventType: "NewUser",
  };
  socket.send(JSON.stringify(data));
};
