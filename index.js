const express = require("express")
const app = express()
const port = process.env.port || 3000
const bodyParser = require("body-parser")
const path = require("path")
const urlPath = require("url")
const status_ = require("./api/status.js")

//const __filename = urlPath(import.meta.url);
//const __dirname = path.dirname(__filename);
app.use(express.urlencoded())
app.use(bodyParser.json())


app.use("/", status_)

app.get("/home", (rep,res) => {
    res.sendFile(path.join(__dirname, 'client/home.html'))
})

app.get("/create", (rep,res) => {
    res.sendFile(path.join(__dirname, 'client/create.html'))
})


app.listen(port, () => console.log(`server running on port ${port}`))
