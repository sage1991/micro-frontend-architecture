class HomeComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })

    const template = document.createElement("template")
    template.innerHTML = `
      <style>
        h2 {
          color: red;
        }
        button {
          background-color: blue;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 4px;
        }
      </style>
      <h2>Home</h2>
      <button>Click</button>
    `
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", this.onClick.bind(this))
  }

  onClick() {
    alert("Hello from home!")
  }
}

customElements.define("mfa-home", HomeComponent)
