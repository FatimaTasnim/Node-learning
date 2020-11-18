const path = require('path')
const { response } = require('express')
const express = require('express')

const app = express() // loading express app

// serving folders
const assetsPaths = path.join(__dirname, '../public')
app.use(express.static(assetsPaths))


app.get('/weather', (req, res)=>{
    res.send("weather view!");
})

app.listen(3000, ()=>{
    console.log("Server is up")
})