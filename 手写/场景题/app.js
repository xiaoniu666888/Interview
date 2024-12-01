const express = require("express")

const app = express()

app.get("/api/jsonp", (req, res) => {
  const { callback } = req.query
  console.log("callback=>", callback)
  res.send(`${callback}("hello jsonp")`)
})

app.listen(3000, () => {
  console.log("running 3000")
})
