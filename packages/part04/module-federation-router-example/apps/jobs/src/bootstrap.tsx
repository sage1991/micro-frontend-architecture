import "./index.css"

import { inject } from "./inject"

const rootElement = document.querySelector<HTMLDivElement>("#app")

if (rootElement) {
  inject({
    routerType: "browser",
    rootElement
  })
}
