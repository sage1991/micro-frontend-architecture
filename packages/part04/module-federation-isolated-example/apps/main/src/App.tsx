import "./index.css"

import { useEffect, useRef } from "react"
import { createRoot } from "react-dom/client"

const App = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cleanup: undefined | (() => void)
    import("isolated/inject").then(({ inject }) => {
      if (rootRef.current) {
        cleanup = inject(rootRef.current, { name: "isolated" })
      }
    })
    return cleanup
  }, [])

  return (
    <div className="container">
      <div>Name: main</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <div ref={rootRef}></div>
    </div>
  )
}

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = createRoot(rootElement as HTMLElement)

root.render(<App />)
