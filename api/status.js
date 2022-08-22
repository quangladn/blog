const express = require("express")
const path = require("path")
/*
{ user:string, date:Date, title:string, depscription: string }
*/

const data = []

const status_ = express.Router()

status_.get("/database", (rep,res) => {
    res.send(data)
})

status_.post("/database", (rep,res) => {
    console.log(rep.body)
    data.unshift(rep.body)
    res.sendFile(path.join(__dirname, '../client/home.html'))
})

status_.get("/database/:user", (rep,res) => {
    const { user } = rep.params

    const foundData = data.find((data_) => data_.user === user)

    res.send(foundData)
})

module.exports = status_
