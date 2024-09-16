import "./index.css"

import ReactDOM from "react-dom/client"

import { Button } from "./components/Button"

const App = () => (
  <div className="container">
    <div>Name: component-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>Primary</Button>
    <Button variant="warning">Warning</Button>
  </div>
)

const rootElement = document.querySelector<HTMLDivElement>("#app")
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
