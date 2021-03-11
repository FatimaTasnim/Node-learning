console.log('Client side javascript file is loaded!')
LodingStatus = document.querySelector('#isLoading')
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
    LodingStatus.textContent = "Loading...";
    LodingStatus.style.color = "#B2F3E6";
    const Location = selectLocation.value;

    LocationFetcher(Location, (data)=>{
        if(data.error){
            LodingStatus.style.color = 'red';
            LodingStatus.textContent = data.error;
        }
        else {
            LodingStatus.style.color = 'green';
            LodingStatus.textContent = data.forecast;
        }
    })
     
})