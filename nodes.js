const chalk = require('chalk');
const fs = require('fs');

const getNotes = function () {
    return "your notes";
}

// adding new notes
const addNotes = function (title, body) {
    const notes = loadNotes();
   
    // filter the duplicate items
    const duplicates = notes.filter(function (note) {
        return note.title === title;
    });

    console.log("duplicates ", duplicates);

    if(duplicates.length===0){
        notes.push({
            title: title,
            body: body
        });
    }
    
    saveNotes(notes);
}


// saving the notes in json format
const saveNotes= function (notes) {
    const stringdata = JSON.stringify(notes);
    fs.writeFileSync("notes.json", stringdata);
}

// loading previously added json if any or return a empty array to push data
const loadNotes = function () {
    try{
        const databuffer = fs.readFileSync("notes.json");
        const data = databuffer.toString();
        return JSON.parse(data);
    } catch(e){
        return [];
    }
    
}

// only exporting addNotes and getNotes as other modules are helper for addNotes.
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
}