const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/chapter-1", (req, res) => {
  res.sendFile(__dirname + "/chapter1.index")
})


app.listen(3000, () => {
  console.log("Server started on port 3000")
})