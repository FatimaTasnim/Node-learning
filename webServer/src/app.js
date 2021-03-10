const path = require('path')
const { response } = require('express')
const express = require('express')
const hbs = require('hbs')

const app = express() // loading express app

// serving folders for express
const assetsPaths = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')
// static directory to serve
app.use(express.static(assetsPaths));


// setting the template
app.set('view engine', 'hbs'); // 'view engine' format should be exact same
app.set('views', viewsPath); // for views the default folder name is views, so if the folder name is smth other than views it should be added like this.
hbs.registerPartial('header',partialPath); 

/// check (express.org->api reference-> express application -> app.set() to explore more set options.


app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather app'  
    })
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/help', (req, res)=>{
    res.render('help', {
        text: "hey! how can I help you???"
    })
})




app.get('/weather', (req, res)=>{
    res.send("weather view!");
})

app.listen(3000, ()=>{
    console.log("Server is up")
})