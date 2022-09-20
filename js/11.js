// Objetos

const producto = {
    nombreProducto : "Iphone 10",
    precio : 1000,
    disponible : true
}

// Forma anterior
const precioProducto = producto.precio
const nombreProducto = producto.nombreProducto

console.log(precioProducto)
console.log(nombreProducto)

// Destructuring
const {precio, disponible} = producto // Extrae el valor y crea la variable, no se puede cambiar el nombre de la variable
console.log(precio)

