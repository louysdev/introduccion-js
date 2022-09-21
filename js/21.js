// Arrow function


const restar = (num1, num2) => console.log(num1 - num2);
restar(10, 5);

const aprender = tecnologia => console.log(`Aprendiendo ${tecnologia}`)
aprender("JS")


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
meses.forEach(mes => {
    if(mes == "Marzo") {
        console.log("Marzo si existe")
    }
})

let resultado

// Some para arreglo de objetos
resultado = carrito.some(producto => producto.nombre === "Iphone 10")

// Reduce reurne todos los valores y entrega el total
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)

// Filter filtra los resultados
resultado = carrito.filter(producto => producto.precio > 1300)

resultado = carrito.filter(producto => producto.nombre !== "Iphone 11")
console.log(resultado)
