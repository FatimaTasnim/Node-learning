const chalk = require('chalk');
const { conflicts, demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./nodes.js');

// writing in different color. check chalk docs to do more color blast
console.log(chalk.green("Success!"));
const msg = process.argv[2];
console.log(msg);
debugger
// writing customized commands
// add command 
yargs.command({
    command: 'add',
    describe: 'add a new note',
    // additional command input taking while building
    // add additional title in command like node app.js add --title= "say hi!"
    builder: {
        title: {
            describe: "add a title here!",
            demandOption: false,  // this additional inputs are not mandatory when the demandOption is false
            type: "string"
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);

    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a specific note',

    builder: {
        title: {
            describe: "Remove any note you like",
            demandOption: false,
            type: "string"
        }
    },
    
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// will print list of all existing notes
yargs.command({
    command: 'list',
    describe: 'List all the existing notes',
    // additional command input taking while building
    // add additional title in command like node app.js add --title= "say hi!"
    builder: {
        title: {
            describe: "Show lists!",
            demandOption: false,  // this additional inputs are not mandatory when the demandOption is false
            type: "string"
        }
    },
    handler() {
        notes.listNotes();

    }
})

yargs.command({
    command: 'read',
    describe: 'List all the existing notes',
    // additional command input taking while building
    // add additional title in command like node app.js add --title= "say hi!"
    builder: {
        title: {
            describe: "Show lists!",
            demandOption: false,  // this additional inputs are not mandatory when the demandOption is false
            type: "string"
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);

    }
})
// need to call yargs to function yargs command. any type of yargs call will do
// but for specification can call following
yargs.parse();


// console.log(yargs.argv.title); // only printing title object
// console.log(yargs.argv);