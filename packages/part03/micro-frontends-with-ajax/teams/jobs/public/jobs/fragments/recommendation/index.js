;(async () => {
  try {
    const recommendations = await fetch(
      "http://localhost:3001/jobs/api/recommendations.json"
    ).then((response) => response.json())

    const root = document.querySelector(
      "#jobs-fragment-recommendation .recommendations"
    )
    if (!root) {
      return
    }

    const fragment = document.createDocumentFragment()
    recommendations.forEach(({ name, url }) => {
      const div = document.createElement("div")
      const a = document.createElement("a")
      a.href = url
      a.textContent = name
      div.appendChild(a)
      fragment.append(div)
    })
    root.appendChild(fragment)
  } catch (e) {
    console.log(e)
    // TODO: Handle error
  }
})()
