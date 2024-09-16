import { createRoot } from "react-dom/client"

import { App } from "./App"

const rootElement = document.querySelector("#app")
if (rootElement) {
  const root = createRoot(rootElement as HTMLElement)
  root.render(<App name="isolated" />)
}
