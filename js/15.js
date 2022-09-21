// Arrays methos

const meses = new Array('Enero', "Febrero", "Marzo")

const carrito = [
    { nombre: "Iphone 10", precio: 1000},
    { nombre: "Iphone 11", precio: 1100},
    { nombre: "Iphone 12", precio: 1200},
    { nombre: "Iphone 13", precio: 1300},
    { nombre: "Iphone 14", precio: 1400}
]

// For each
meses.forEach(function(mes) {
    if(mes == "Marzo") {
        console.log("Marzo si existe")
    }
})

// Includes para arreglo normal
let resultado = meses.includes("Marzo");

// Some para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === "Iphone 10"
})

// Reduce reurne todos los valores y entrega el total
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)

// Filter filtra los resultados
resultado = carrito.filter(function(producto) {
    return producto.precio > 1300
})

resultado = carrito.filter(function(producto) {
    return producto.nombre !== "Iphone 11"
})

console.log(resultado)
