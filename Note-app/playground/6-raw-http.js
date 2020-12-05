// there is two different modules for node http & https
//- https://nodejs.org/dist/latest-v14.x/docs/api/http.html
//- https://nodejs.org/dist/latest-v14.x/docs/api/https.html

const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=f2762e67e421f1edb6a0ec60ec61ba1d&query=23.784506,90.403409'

http.request(url, ()=>{

})