'use strict'

const {app, BrowserWindow, BrowserWindowProxy} = require('electron')

// console.dir(app)

app.on('before-quit', () =>  // evento que se ejecuta antes que el aplicativo salga
{
    console.log('Saliendo...')
})

app.on('ready', ()=>{
    let window = new BrowserWindow(
        {
            width: 800,
            height: 600,
            title: 'Hola Tu', // coloca un titulo a la ventana
            center: true, // coloca la ventana en el centro de la pantalla
            maximizable: false, // deshabilita la opcion de maximizar la ventana
            backgroundColor: '#2e2c29', // coloca un color de fondo


        }
    )

    // evento para cuando se mueva la ventana
    window.on('move', ()=>{
        const position = window.getPosition()
        console.log(`La posicion de la ventana es: ${position}`)
    })

    // evento para cuando se cierre la ventana
    window.on('closed',() =>{
        console.log("Cerro la ventana...")
        window = null
        app.quit() // Cierra la aplicacion
    })

})

// browser windows
// permite crear centanas, editarlas en color, fondo, tamaño, Etc 

