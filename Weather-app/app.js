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
         forecast(geoData, (error, {temperature, precip})=>{// instead of data object destructuring it's property
             if(error){
                 console.log(error)
             }else{
                 const update = "it is currently " + temperature + " degrees out. There is a " 
                              + precip+'% chance of rain.';
                 console.log(update)
             }
         })
        }
     })
}




