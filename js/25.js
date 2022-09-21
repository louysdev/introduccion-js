// POO

// Object Literal
const producto = {
    nombre: "Tablet",
    precio: 1000
}

function formatearProducto(producto) {
    return `Informacion del producto: Nombre: ${producto.nombre} | Precio: ${producto.precio}`;
}

console.log(formatearProducto(producto))

// Objetc Constructor PA TRABAJO
// Version anterior de las clases
function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
}
// Prototype sirve para crear funciones que solo se utilizar en un objet especifico
Producto.prototype.formatearProducto = function() {
    return `Informacion del producto: Nombre: ${this.nombre} | Precio: ${this.precio}`; // Se usa this, porque como esta en el objeto internamente
}

const producto2 = new Producto("Iphone 14", 1100)

console.log(producto2.formatearProducto())





