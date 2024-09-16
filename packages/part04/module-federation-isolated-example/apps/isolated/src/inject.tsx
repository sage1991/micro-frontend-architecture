import { ComponentProps } from "react"
import { createRoot } from "react-dom/client"

import { App } from "./App"

export const inject = (
  rootElement: HTMLElement,
  props: ComponentProps<typeof App>
) => {
  const root = createRoot(rootElement)
  root.render(<App {...props} />)
  return () => root.unmount()
}
