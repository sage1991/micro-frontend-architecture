import "./styles.css"

import { loadFragment } from "./fragment.ts"

const root = document.querySelector<HTMLDivElement>("#app")
if (root) {
  root.innerHTML = `
    <div id="main">Main</div>
    <div id="team-jobs-recommendation" data-fragment="http://localhost:3001/jobs/fragments/recommendation"></div>
  `
}

const recommendation = document.querySelector<HTMLDivElement>(
  "#team-jobs-recommendation"
)
if (recommendation) {
  void loadFragment(recommendation)
}
