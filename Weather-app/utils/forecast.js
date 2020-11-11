const request = require('request')

const url_data = {
    base_url: 'http://api.weatherstack.com/current?',
    access_key: 'access_key=f2762e67e421f1edb6a0ec60ec61ba1d',
    query: '&query='
}


const forecast = ({place, latitude, longitude}, callback)=>{
    console.log("latitude & longitude of ", place, ": ", latitude, ", ", longitude);
        const {base_url, access_key, query} = url_data;

        const url = base_url + access_key + query + latitude + ',' + longitude;
        const data = {
            temperature: undefined,
            precip: undefined
        }
        request({url:url, json:true}, (error, {body})=>{ // taking only body object from response uding destructor

                if(error){
                    callback("Unable to connect to the network", undefined)
                }else if(body.error){
                    callback("Unable to find Location")
                }else{
                    data.temperature =  body.current.temperature,
                    data.precip =  body.current.precip
                    callback(undefined, data)
                }
        })
}

module.exports = forecast