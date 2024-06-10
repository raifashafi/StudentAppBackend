const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("helloooo")

})

app.get("/contact",(req,res)=>{
res.send("welcome to my contact page")
})

app.listen(8082,()=>{
    console.log("server started")
})