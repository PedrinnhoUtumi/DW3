// const express = require("express")
import express from "express"
import contato from "./Routes/contato.route.js"
const app = express()
const port = 8086

app.use(express.json())
app.use('/contato', contato)

app.get("/", (req, res) => {
    res.send("Hello Sara")
})

app.listen(port, ()=> {
    console.log("Server ON");
})