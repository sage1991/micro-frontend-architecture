import "./style.css"

const app = document.querySelector("#app")
if (app) {
  app.innerHTML = `
    <div id="main"></div>
    <div id="team-jobs-recommendation">
      <iframe src="http://localhost:3002/jobs/fragments/recommendation"></iframe>
    </div>
  `
}
