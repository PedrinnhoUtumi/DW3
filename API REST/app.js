// const express = require("express")
import express from "express"
const app = express()
const port = 8086

app.get("/", (req, res) => {
    res.send("Hello Sara")
})

app.listen(port, ()=> {
    console.log("Server ON");
})