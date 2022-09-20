// Objetos

const producto = {
    nombreProducto : "Iphone 10",
    precio : 1000,
    disponible : true
}



// console.log(producto.precio)
// console.log(producto["disponible"])

// Agregar nuevas propriedades
producto.imagen = "imagen.jpg"

// Eliminar propiedades
delete producto.imagen
console.log(producto)
