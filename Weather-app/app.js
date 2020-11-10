// Setting Up Query String
// adress?var1=value&var2=value..

const request = require('request');
const geoCoding = require('./utils/geocode')
const forecast = require('./utils/forecast')

// calling a callback into another is called callback chaining

const adress = process.argv[2]
console.log("you said: ", adress)
if(!adress){
    console.log("please enter a location")
}
else{
    geoCoding(adress, (error, geoData)=>{
        if(error){
            console.log(error)
        }else{
         forecast(geoData, (error, data)=>{
             if(error){
                 console.log(error)
             }else{
                 const update = "it is currently " + data.temperature + " degrees out. There is a " 
                              + data.precip+'% chance of rain.';
                 console.log(update)
             }
         })
        }
     })
}




