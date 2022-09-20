// "use strict"; // Ejeucta el codigo de js con en modo estricto

// Objetos
const producto = {
    nombreProducto : "Iphone 10",
    precio : 1000,
    disponible : true
}

// Object.freeze(producto) // Congela el objeto, no permite modificar el objeto
// producto.imagen = "imagen.pg"
// console.log(Object.isFrozen(producto))

Object.seal(producto) // Lo mismo que freeze pero permite modificar las propiedades
producto.imagen = "imagen.pg"
producto.precio = 2000
console.log(Object.isSealed(producto))

console.log(producto)