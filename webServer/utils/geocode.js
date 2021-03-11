const request = require('request');

const map_base = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const map_access_key = 'access_token=pk.eyJ1IjoiZmF0aW1hdGFzbmltIiwiYSI6ImNraDBsdWhuMDAyaGEyeW9rNXkxem5wdTAifQ.ct-5ocl_N8jTKjqcV_LAyQ'
const limit = 'limit=1'

const geoCoding = (location, callback)=>{
    const map_url = map_base + encodeURIComponent(location) + '.json?' + map_access_key + '&' + limit
    var center = undefined;
    
     request({url:map_url, json:true}, (error, {body})=>{ //taking only body property from response.
        if(error){
            //console.log("Unable to connect to the network");
           callback("Please check your internet connection!", center)
        }else if(!body.features || !body.features[0]){
            //console.log("No result found for searched location");
            callback("Please enter a valid location!", center);
        }else{
            center = body.features[0].center
            center = {
                latitude : body.features[0].center[1],
                longitude: body.features[0].center[0],
                place    : body.features[0].place_name
            }
            callback( undefined ,center);
        }
        

    })}

module.exports = geoCoding