const express = require("express")
const path = require("path")
const app = express()


// puerto
const PORT = process.env.PORT || 3000;

// recursos publicos 
app.use('/static', express.static('public'))

// rutas
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views/home.html"))
})

app.get("/home", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views/home.html"))
})

app.get("/singup", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views/registro.html"))
})

app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/views/getIn.html"))
})

// inicializacion del servidor
app.listen(PORT, ()=>{
    console.log(`server running on localhost:${PORT}`);
})