// 1
const fs = require('fs')
// fs.writeFileSync('notes.txt', 'Hello Arga')
// fs.appendFileSync('notes.txt', ', Kamu bisa')

// 2
const notes = require('./notes')
// const message = notesFunc()
// console.log(message)

// 3
// const validator = require('validator')
// console.log(validator.isURL('https://google.com'))

// 4
// const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));

// 5
// Install nodemon globally

// 6 
// yargs
const yargs = require('yargs')

yargs.command({
    command : 'add', 
    describe : 'ad notes', 
    builder :{
        title :{
            describe : '', 
            demandOption: true, 
            type : 'string'
        }, 
        body : {
            describe : '', 
            demandOption : true, 
            type : 'string'

        }
    }, 
    handler (argv){
     notes.addNotes(argv.title, argv.body)  
    }
})

yargs.command({
    command : 'remove', 
    describe : 'remove notes', 
    builder :{
        title :{
            describe : '', 
            demandOption: true, 
            type : 'string'
        }
    }, 
    handler (argv){
     notes.removeListOfNotes(argv.title)  
    }
})

yargs.command({
    command : 'listNote', 
    describe : 'listing a note', 
    handler (){
        notes.listOfNotes()
    }
})

yargs.command({
    command : 'findNotes', 
    describe : 'finding a note', 
    builder : {
        title : {
            describe : '',
            demandOption : true, 
            type :'string'
        }
    }, 
    handler (args){
        notes.findNotes(args.title)
    }
})

yargs.parse()