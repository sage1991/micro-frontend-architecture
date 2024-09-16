import "./index.css"

import { FC } from "react"

interface Props {
  name: string
}

export const App: FC<Props> = ({ name }) => (
  <div className="container">
    <div>Name: isolated</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <div>{name}</div>
  </div>
)
