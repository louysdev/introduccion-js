// Arreglos

const numeros = [21, 01, 10, 23, 51]
console.table(numeros)

const meses = new Array('Enero', "Febrero", "Marzo")
console.table(meses)

const arreglo = ["Culo", 23, true, "toto", null, {laputa: "si"}, [1, 2, 3]]
console.table(arreglo)

// Acceder
console.log(numeros[2])
console.log(numeros[200])

// Cuantos hay
console.log(numeros.length)

// Iterador

meses.forEach( function(mes) { // Por cada uno de elementos que encuentre
    console.log(mes)
}) 