// Playing with JSON
const fs = require('fs')


const book = {
    "title": "smth",
    "author": "smth"
}

// read the json in string format
const jsondata = JSON.stringify(book);
console.log(book);

// string string data as json
const jsonBack = JSON.parse(jsondata);
console.log(book.author); // accessing like a object

// creating JSON files from string data
fs.writeFileSync("1-json.json", jsondata);

// load data from json
const databuffer = fs.readFileSync("1-json.json"); // binary format data
console.log(databuffer);
// converting binary data to string
const dataloaded = databuffer.toString();
console.log(dataloaded);
// now again parse it to json like
let json = JSON.parse(dataloaded)
// changing json value
json.title = "new";
json.author = "new";

finaldata = JSON.stringify(json);
fs.writeFileSync("1-json.json", finaldata);