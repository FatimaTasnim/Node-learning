console.log('Client side javascript file is loaded!')

LocationFetcher = (Location, callback)=>{
    fullurl = "http://localhost:3000/weather?address=" + Location;
    fetch(url = fullurl ).then((response)=>{
        response.json().then((data)=>{
            callback(data);
        })
    })
    
}

const weatherForm       = document.querySelector('form')
const selectLocation    = document.querySelector('input')
weatherForm.addEventListener('submit', (event)=>{ 
    event.preventDefault(); // usually form refreshes with submit but prevent default prevents that mannter.
    const Location = selectLocation.value;
    console.log("your input is: ", selectLocation.value);
    LocationFetcher(Location, (data)=>{
        console.log("your weather data: ", data);
    })
    
})