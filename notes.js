const fs = require('fs')
const chalk = require('chalk');
const getNotes = function(){
    return 'Your Notes'
}


const readListOfNotes = () =>{
    const notes = fs.readFileSync('notes.json')
    const notesString = notes.toString()
    const noteJSON = JSON.parse(notesString)
    return noteJSON
}

const addNotes = (title, body) =>{
    const data = loadNotes()
    const checkDuplicateTitle = data.find(x=>{
        return x.title === title 
    })

    // debugger berfungsi untun mendebug bagian yang ada sebelum code debugger itu sendiri dengan 
    // bantuan chrome debugger, bila ingin menjalankan debugger, ketikan : node inspect ... 
    // debugger
    
    if(!checkDuplicateTitle){
        data.push({
            title : title, body : body
        })
        const dataString = JSON.stringify(data)
        fs.writeFileSync('notes.json', dataString)
        console.log(chalk.blue("Creating new notes success"))
    }else{
        console.log(chalk.red("The title you enterd is already exist"))
    }
}

const removeListOfNotes = (title) => {
    const data = loadNotes()
    const dataCheck = data.filter(x=>{
        return x.title !== title
    })
    if(dataCheck.length < data.length){
        const dataString = JSON.stringify(dataCheck)
        fs.writeFileSync('notes.json', dataString)
        console.log(chalk.blue("item removed"))
    }else{
        console.log(chalk.red("item : "+title+" is not found"))
    }
}

const loadNotes = () =>{
    try{
        const notesJSON = readListOfNotes()
        return notesJSON
    }catch{
        return []
    }
}

const listOfNotes = () =>{
    const noteJSON =  readListOfNotes()
    console.log(chalk.yellow("-Your Notes"))
    noteJSON.forEach(element => {
        console.log(chalk.blue(element.title))
    });
}

const findNotes = (title) =>{
    const noteJSON = readListOfNotes()
    const findNotes = noteJSON.find(x=>{
        return x.title === title
    })

    if(!findNotes){
        console.log(chalk.red("The notes is not found"))
    }else{
        console.log(chalk.blue("The notes is already exist"))
    }
}

module.exports = {
    getNotes : getNotes, 
    addNotes : addNotes, 
    removeListOfNotes : removeListOfNotes, 
    listOfNotes : listOfNotes, 
    findNotes : findNotes
}