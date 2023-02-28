#!/usr/bin/env node
module.exports.new = function (arg) {
    var format = require('date-format');
    const fs = require('fs');
    const date = format.asString(new Date())
    let folderName = './content'

    if (arg === 'viaggio') {
        console.log("INFO: Creo un viaggio")
        folderName = "./content/viaggi"
        const postType = "viaggi"
        const fileName = folderName + '/new-' + arg + '.md'
        const post = '---\ntitle: ""\ncover_image: ""\nvideo_id: ""\nlocation_name: ""\ndescription: ""\nlayout: "' + postType + '"\ndate: "' + date + '"\ndraft: "false"\n---\n\n'
        fs.writeFile(fileName, post, function (err) { if (err) throw err; });

    } else if (arg === 'destinazione') {
        console.log("INFO: Creo una destinazione")
        folderName = "./content/destinazioni"
        const postType = "destinazioni"
        const fileName = folderName + '/new-' + arg + '.md'
        const post = '---\ntitle: ""\ncover_image: ""\nlocation_name: ""\nseason: "" # autunno | primavera | estate | inverno\ndifficulty: ""\nactivity: ""  # trekking | ciclismo | navigazione\ndescription: ""\nlayout: "' + postType + '"\ndate: "' + date + '"\ndraft: "false"\n---\n\n'
        fs.writeFile(fileName, post, function (err) { if (err) throw err; });
        
    } else if (arg === 'pagina' || arg == 'formazione') {
        const msg = arg === 'pagina' ? 'Creo una pagina' : 'Creo un corso'
        folderName = arg === 'pagina' ? folderName : "./content/formazione"
        console.log("INFO: " + msg)
        const postType = "page"
        const fileName = folderName + '/new-' + arg + '.md'
        const post = '---\ncover_image: ""\ndescription: ""\nlayout: "' + postType + '"\n---\n\n'
        fs.writeFile(fileName, post, function (err) { if (err) throw err; });
        
    } else {
        console.log("WARN: Devi indicare un tipo di post tra: 'destinazione', 'viaggio', 'formazione' o 'pagina'")
        return
    }

    console.log("INFO: Creato nuovo post: new_" + arg + ".md.")
    console.log("INFO: Ricordati di rinominare il file!")
}
