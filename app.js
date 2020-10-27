const chalk = require('chalk');
const { conflicts, demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./nodes.js');

// writing in different color. check chalk docs to do more color blast
console.log(chalk.green("Success!"));
const msg = process.argv[2];
console.log(msg);

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
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body);

    }
})

// need to call yargs to function yargs command. any type of yargs call will do
// but for specification can call following
yargs.parse();
