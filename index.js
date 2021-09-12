'use strict'

// Aplicacion de  documentacion de muchas tecnologias de desarollo de software

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
            backgroundColor: '#2e2c29', // coloca un color de fondo
            show: false, // hace que la ventana se oculte o sea invisible

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
    
    // evento que se ejecuta cuando la ventana principal se ha terminado de cargar
    window.once('ready-to-show', () => {
        window.show()
    })
    window.loadURL('http://devdocs.io/')

})

// browser windows
// permite crear centanas, editarlas en color, fondo, tamaño, Etc 

