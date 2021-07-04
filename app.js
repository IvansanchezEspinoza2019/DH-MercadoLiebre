const express = require("express")
const path = require("path")
const app = express()


app.use('/static', express.static('public'))


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views/home.html"))
})
app.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views/registro.html"))
})

app.get("/getin", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views/getIn.html"))
})


app.listen(3030, ()=>{
    console.log("Server running on localhost:3030")
})