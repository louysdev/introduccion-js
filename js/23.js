// Iteradores

let numeros = 100;

// For

// for (let i = 0; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(`${i} es par`)
//     }else {
//         console.log(`${i} es impar`)
//     }
// }

// While

let veces = 1

// while (veces <= 10) {
//     console.log(`Esta es la ${veces} vez.`)
//     veces++
// }

// Do while

// do {
//     console.log("Con do while")
//     veces++
// } while (veces <= 20)

// forEach y map

const carrito = [
    { nombre: "Iphone 10", precio: 1000},
    { nombre: "Iphone 11", precio: 1100},
    { nombre: "Iphone 12", precio: 1200},
    { nombre: "Iphone 13", precio: 1300},
    { nombre: "Iphone 14", precio: 1400}
]

let nuevoCarrito= carrito.forEach( producto => producto.nombre) // Para recorrer un arreglo o el objeto
console.log(nuevoCarrito)

nuevoCarrito = carrito.map( producto => producto.nombre) // Lo mismo pero se puede pasar los datos obtenidos a otro arreglo
console.log(nuevoCarrito)