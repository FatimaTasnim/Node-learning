const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { runInNewContext } = require('vm')

const app = express()

const request = require('request');
const geoCoding = require('../utils/geocode')
const forecast = require('../utils/forecast')
const e = require('express')

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Tasnim'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Tasnim'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Tasnim'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        res.send({
            error: "You need to provide an search adress"
        })
    }
    else{
        console.log("address found")
    }
    geoCoding(req.query.address, (error, geoData)=>{
        console.log("here")
        if(error){
            console.log(error)
            res.send({
                error: error
            })

        }else{
         forecast(geoData, (error, {temperature, precip})=>{// instead of data object destructuring it's property
             if(error){
                res.send({
                    error: error
                })
             }else{
                 const update = "it is currently " + temperature + " degrees out. There is a " 
                              + precip+'% chance of rain.';
                 res.send({
                        forecast: update,
                        location: req.query.address
                 })
             }
         })
        }
     })
    
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Tasnim',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Tasnim',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})