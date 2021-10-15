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
            show: false, // hace que la ventana se oculte o sea invisible

        }
    )
    // evento que se ejecuta cuando la ventana principal se ha terminado de cargar
    window.once('ready-to-show', () => {
        window.show()
    })
    
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
    
    window.loadURL(`file://${__dirname}/renderer/index.html`)
})

// browser windows
// permite crear centanas, editarlas en color, fondo, tamaño, Etc 

// "electron": "^8.0.1",
//     "electron-debug": "^3.0.1",
//     "electron-devtools-installer": "^2.2.4",
//     "electron-packager": "^13.1.1",