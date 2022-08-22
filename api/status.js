const express = require("express")

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
    res.send("suscess")
})

status_.get("/database/:user", (rep,res) => {
    const { user } = rep.params

    const foundData = data.find((data_) => data_.user === user)

    res.send(foundData)
})

module.exports = status_
