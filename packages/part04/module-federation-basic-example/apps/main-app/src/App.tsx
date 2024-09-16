import "./index.css"

import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { ErrorBoundary } from "react-error-boundary"
import { NameProvider } from "shared-library"

const Button = React.lazy(() =>
  import("component_app/Button").then(({ Button }) => ({ default: Button }))
)

const App = () => (
  <NameProvider name="hello">
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <ErrorBoundary fallback={<div>error</div>}>
        <Suspense fallback="loading...">
          <Button variant="primary">Primary</Button>
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>error</div>}>
        <Suspense fallback="loading...">
          <Button variant="warning">Warning</Button>
        </Suspense>
      </ErrorBoundary>
    </div>
  </NameProvider>
)

const rootElement = document.querySelector<HTMLDivElement>("#app")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
