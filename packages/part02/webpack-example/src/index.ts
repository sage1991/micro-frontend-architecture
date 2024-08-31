import { join } from "lodash-es"

const component = () => {
  const element = document.createElement("div")
  element.innerText = join(["Hello", "Webpack!"], " ")
  return element
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const main = async () => {
  await sleep(1000)
  const root = document.querySelector<HTMLDivElement>("#root")
  root?.appendChild(component())
}

void main()

console.log("sourcemap")
