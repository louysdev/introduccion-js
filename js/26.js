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

// Herencia
class Libro extends Producto{ //Usa los elementos de la clase padre
    constructor(nombre, precio, isbn) {
        super(nombre, precio); //Llama las propiedades del constructor padre
        this.isbn = isbn
    }
    
    formatearProducto() {
        return `${super.formatearProducto()} | ISBN: ${this.isbn}`;
    }
}

const libro = new Libro('JS hoy en dia', 100, "asddfasdassda");
console.log(libro.formatearProducto())

