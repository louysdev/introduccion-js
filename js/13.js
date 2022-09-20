// Objetos

// Es recomendable no modiciar los datos originales de un objeto
const producto = {
    nombreProducto : "Iphone 10",
    precio : 1000,
    disponible : true
}

const medidas = {
    peso : "150gr",
    grosor : "2.2 cm"
}

const nuevoProducto = {...producto, ...medidas} //Spread operator, para unir dos objetos

console.log(nuevoProducto)