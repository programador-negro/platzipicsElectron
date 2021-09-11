'use strict'

const {app, BrowserWindow, BrowserWindowProxy} = require('electron')

// console.dir(app)

app.on('before-quit', () =>  // evento que se ejecuta antes que el aplicativo salga
{
    console.log('Saliendo...')
})

app.on('ready', ()=>{
    let window = new BrowserWindow()

    window.on('closed',() =>{
        window = null
        app.quit() // Cierra la aplicacion
    })

})


