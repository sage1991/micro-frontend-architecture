export const loadFragment = async (root: HTMLElement) => {
  const { fragment = "http://localhost:3001/jobs/fragments/404" } = root.dataset
  try {
    root.innerHTML = await fetch(fragment).then((response) => response.text())
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = `${fragment}/index.css`
    const script = document.createElement("script")
    script.src = `${fragment}/index.js`
    root.appendChild(link)
    root.appendChild(script)
  } catch (e) {
    // TODO: error handling
    console.log(e)
  }
}
