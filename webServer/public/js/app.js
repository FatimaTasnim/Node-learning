console.log('Client side javascript file is loaded!')

fetch(url = "http://localhost:3000/weather?address=Dhaka").then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})