// Clases
// Version nueva de las clases
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `Informacion del producto: Nombre: ${this.nombre} | Precio: ${this.precio}`;
    }

    precioProducto() {
        return `Precio: ${this.precio}`
    }
}

const producto = new Producto("Iphone 14", 1100)
console.log(producto.precioProducto())

console.log(producto)