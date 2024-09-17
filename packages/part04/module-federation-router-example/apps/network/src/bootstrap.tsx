import "./index.css"

import { inject } from "./inject"

const rootElement = document.querySelector("#app")
if (rootElement) {
  inject({
    rootElement,
    routerType: "browser"
  })
}
