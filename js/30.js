// Async / await

function descargarNuevosClientes () {
    return new Promise(resolve => {
        console.log("Descargando clientes... espere...")

        setTimeout(() => {
            resolve("Los clientes fueron descargados")
        }, 5000)
    })
}

function descargarUltimosPedidos () {
    return new Promise(resolve => {
        console.log("Descargando pedidos... espere...")

        setTimeout(() => {
            resolve("Los pedidos fueron descargados")
        }, 3000)
    })
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes(); // Hasta que esa funcion no termine sus proceso no continua con el codigo siguiente del bloque
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes)
        // console.log(pedidos)

        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]) // Forma de ejectuar dos async await a la vez
        console.log(resultado [0])
        console.log(resultado [1])
    } catch (error) {
        console.log(error)
    } 
}

app();

console.log("Esto se si ejecuta") // Ya que el async / await solo afecta donde lo llaman

// setInterval(function() {
//     console.log("set timeout...")
// }, 5000)