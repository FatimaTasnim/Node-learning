const request = require('request')

const base_url = 'http://api.weatherstack.com/current?'
const access_key = 'access_key=f2762e67e421f1edb6a0ec60ec61ba1d'
const query = '&query='

const forecast = (center, callback)=>{
    console.log("latitude & longitude of ", center.place, ": ", center.latitude, ", ", center.longitude);
        const url = base_url + access_key + query + center.latitude + ',' + center.longitude;
        const data = {
            temperature: undefined,
            precip: undefined
        }
        request({url:url, json:true}, (error, response)=>{

                if(error){
                    callback("Unable to connect to the network", undefined)
                }else if(response.body.error){
                    callback("Unable to find Location")
                }else{
                    data.temperature =  response.body.current.temperature,
                    data.precip =  response.body.current.precip
                    callback(undefined, data)
                }
        })
}

module.exports = forecast