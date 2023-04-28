const express = require("express")
const path = require("path")
const app = express()
const port = process.env.NODE_PORT || 8080
var conf = require("./config.json")

app.use(conf.PUBLIC_URL, express.static(path.join(__dirname, "build")))

app.get("/ping", function (req, res) {
  res.json({ status: 200 })
})

// Custom API endpoints to be declared here
// app.get("*/api-endpoint", (req, res) => { })

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(port, (err) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(`Server listening at port ${port}`)
})
