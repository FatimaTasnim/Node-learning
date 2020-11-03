// Setting Up Query String
// adress?var1=value&var2=value..

const request = require('request');


const base_url = 'http://api.weatherstack.com/current?'
const access_key = 'access_key=f2762e67e421f1edb6a0ec60ec61ba1d'
const query = '&query=37.8267,-122.4233'   
const url = base_url + access_key + query;

const map_base = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const location = 'Los%20Angles.json'
const map_access_key = 'access_token=pk.eyJ1IjoiZmF0aW1hdGFzbmltIiwiYSI6ImNraDBsdWhuMDAyaGEyeW9rNXkxem5wdTAifQ.ct-5ocl_N8jTKjqcV_LAyQ'
const limit = 'limit=1'

const map_url = map_base + location + '?' + map_access_key + '&' + limit;

request({url:map_url, json:true}, (error, response)=>{
    if(error){
        console.log("Unable to connect to the network");
    }else if(!response.body.features){
        console.log("No result found for searched location");
    }else{
        console.log(response.body.features[0].center);
    }
    
})




request({url:url, json:true}, (error, response)=>{
    //console.log('Error ', error);
    //console.log('response ', response.body.current);
    if(error){
        console.log("Unable to connect to the network");
    }else if(response.body.error){
        console.log("Unable to find Location");
    }else{
        const update = "it is currently " + response.body.current.temperature + "degrees out. There is a " 
        + response.body.current.precip+'% chance of rain.'; 
        console.log(update);
    }
})