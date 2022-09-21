// Async / await

function descargarClientes () {
    return new Promise(resolve => {
        console.log("Descargando clientes... espere...")

        setTimeout(() => {
            resolve("Los clientes fueron descargados")
        }, 5000)
    })
}

async function app() {
    try {
        const resultado = await descargarClientes(); // Hasta que esa funcion no termine sus proceso no continua con el codigo siguiente del bloque
        console.log(resultado)
    } catch (error) {
        console.log(error)
    } 
}

app();

console.log("Esto se si ejecuta") // Ya que el async / await solo afecta donde lo llaman

// setInterval(function() {
//     console.log("set timeout...")
// }, 5000)