class MyFirstCustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const userId = this.getAttribute("userId");
    (async () => {
      this.shadowRoot.innerHTML = `
                <style>
                .container{
                    display: block;
                }
                .lds-ripple {
                    display: inline-block;
                    position: relative;
                    width: 80px;
                    height: 80px;
                  }
                  .lds-ripple div {
                    position: absolute;
                    border: 4px solid #fff;
                    opacity: 1;
                    border-radius: 50%;
                    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
                  }
                  .lds-ripple div:nth-child(2) {
                    animation-delay: -0.5s;
                  }
                  @keyframes lds-ripple {
                    0% {
                      top: 36px;
                      left: 36px;
                      width: 0;
                      height: 0;
                      opacity: 0;
                    }
                    4.9% {
                      top: 36px;
                      left: 36px;
                      width: 0;
                      height: 0;
                      opacity: 0;
                    }
                    5% {
                      top: 36px;
                      left: 36px;
                      width: 0;
                      height: 0;
                      opacity: 1;
                    }
                    100% {
                      top: 0px;
                      left: 0px;
                      width: 72px;
                      height: 72px;
                      opacity: 0;
                    }
                  }                  
                </style>
                <div class="lds-ripple"><div></div><div></div></div>
            `;

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos/" + userId
      );
      const data = await response.json();
      this.shadowRoot.innerHTML = `<div class "container" >
                  <img src="${data.thumbnailUrl}" alt = "${data.title}"
            </div>`;
    })();
  }
}

customElements.define("user-card", MyFirstCustomElement);

// for (let i = 1; i < 100; i++) {
//   const el = document.createElement("user-card");
//   el.setAttribute("userId", i);
//   setTimeout(() => {
//     document.body.appendChild(el);
//   }, i * 1000);
// }

for (let i = 1; i < 30; i++) {
  const el = document.createElement("user-card");
  el.setAttribute("userId", i);
  document.body.appendChild(el);
}

window.addEventListener('scroll',() => {
  if (window.innerHeight+window.screenY>= document.body.offsetHeight-100) {
   for (let i = 1; i < 100; i++) {
  const el = document.createElement("user-card");
  el.setAttribute("userId", i);
  setTimeout(() => {
    document.body.appendChild(el);
  }, i * 1000);
}
  }else{

  }
})