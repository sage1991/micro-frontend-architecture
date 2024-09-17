import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"

import { router } from "./router"

interface Config {
  rootElement: Element
  routerType?: "browser" | "memory"
  basename?: string
  initial?: string
}

export const inject = ({
  rootElement,
  routerType = "browser",
  basename,
  initial
}: Config) => {
  const root = createRoot(rootElement)
  root.render(
    <RouterProvider
      router={router({
        type: routerType,
        options: { basename, initialEntries: initial ? [initial] : undefined }
      })}
    />
  )

  return () => queueMicrotask(() => root.unmount())
}
