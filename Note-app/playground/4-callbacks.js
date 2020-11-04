setTimeout(()=>{
    console.log("Times Up");
}, 2000)

const geoCode = (adress, callback)=>{
    setTimeout(()=>{
        const data = {
            latitude: 0,
            longitude: 0
        }
    
        callback(data)
    }, 1000)
}

geoCode('dhaka', (data)=>{
    console.log(data);
})

const add = (a, b, callback)=>{
    setTimeout(()=>{
        sum = a + b;
        callback(sum)
    },2000)
    
}

result = add(100, 200, (sum)=>{
    console.log(sum)
})