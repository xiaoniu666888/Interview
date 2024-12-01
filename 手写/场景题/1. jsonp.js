function addScript(url) {
  const script = document.createElement("script")
  script.src = url
  document.body.appendChild(script)
}

addScript("http://localhost:3000/api/jsonp?callback=handRes")
function handRes(res) {
  console.log("res=>", res)
}
