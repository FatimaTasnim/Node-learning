// Setting Up Query String
// adress?var1=value&var2=value..

const request = require('request');


const base_url = 'http://api.weatherstack.com/current?'
const access_key = 'access_key=f2762e67e421f1edb6a0ec60ec61ba1d'
const query = '&query='
var latitude = '37.8267'
var longitude = '-122.4233'   
const url = base_url + access_key + query;

const map_base = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
var location = 'Los%20Angles.json'
const map_access_key = 'access_token=pk.eyJ1IjoiZmF0aW1hdGFzbmltIiwiYSI6ImNraDBsdWhuMDAyaGEyeW9rNXkxem5wdTAifQ.ct-5ocl_N8jTKjqcV_LAyQ'
const limit = 'limit=1'


const geoCoding = (location, callback)=>{
    const map_url = map_base + encodeURIComponent(location) + '.json?' + map_access_key + '&' + limit
    center = undefined;
    
     setTimeout(()=>{request({url:map_url, json:true}, (error, response)=>{
        if(error){
            console.log("Unable to connect to the network");
           callback("Please check your internet connection!", center)
        }else if(!response.body.features){
            console.log("No result found for searched location");
            callback("Please enter a valid location", center);
        }else{
            center = response.body.features[0].center
            center = {
                latitude : response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                place    : response.body.features[0].place_name
            }
            callback( undefined ,center);
        }
        

    })},500)
    
}


const weatherReport = geoCoding("Los%Angels", (error, center)=>{
    if(error){
        console.log("Please enter a valid location");
    }
    else{

        console.log("latitude & longitude of ", center.place, ": ", center.latitude, ", ", center.longitude);
        const url = base_url + access_key + query + latitude + ',' + longitude;

        request({url:url, json:true}, (error, response)=>{

                if(error){
                    console.log("Unable to connect to the network");
                }else if(response.body.error){
                    console.log("Unable to find Location");
                }else{
                    const update = "it is currently " + response.body.current.temperature + " degrees out. There is a " 
                    + response.body.current.precip+'% chance of rain.'; 
                    console.log(update);
                }
        })
    }
})

