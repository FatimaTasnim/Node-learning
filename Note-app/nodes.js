const chalk = require('chalk');
const fs = require('fs');

const getNotes = function () {
    return "your notes";
}

// adding new notes
const addNotes = (title, body)=> {
    const notes = loadNotes();
   
    // filter the duplicate items
    //const duplicates = notes.filter(note => note.title === title);
    // filter go through the whole list
    // we only need to find if there is any duplicate
    // use find instead of filter cause it will return when the first occurance detected
    const duplicates = notes.find(note=> note.title === title);
    console.log("duplicates ", duplicates);

    if(duplicates.length===0){
        notes.push({
            title: title,
            body: body
        });
    }
    
    saveNotes(notes);
}

const removeNote = (title)=> {
    
    const notes = loadNotes();
    let flag = false;

    const findme = notes.filter(note => {      
        if(note.title === title){
            notes.pop(note);
            flag = true;
            console.log(chalk.green.inverse(("Note deleted sucessfully!")));
        }

    })

    if(!flag){
        console.log(chalk.red.inverse("no note found"));
    }
    else saveNotes(notes);
}

// saving the notes in json format
const saveNotes= (notes)=> {
    const stringdata = JSON.stringify(notes);
    fs.writeFileSync("notes.json", stringdata);
}

// loading previously added json if any or return a empty array to push data
const loadNotes = ()=>{
    try{
        const databuffer = fs.readFileSync("notes.json");
        const data = databuffer.toString();
        return JSON.parse(data);
    } catch(e){
        return [];
    }
    
}

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.blueBright("Available Notes are..."));
    notes.forEach(note => console.log(note.title));
}

const readNotes = (title) =>{
    const notes = loadNotes();
    const note = notes.find(note=> note.title===title);
    if(!note)console.log(chalk.red('No note found!'));
    else{
        console.log(chalk.green(note.title));
        console.log(note.body);
    }
}

// only exporting addNotes and getNotes as other modules are helper for addNotes.
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
    // saveNotes: saveNotes,
    // loadNotes: loadNotes
}