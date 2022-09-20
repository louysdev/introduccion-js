// Arreglos

const numeros = [21, 01, 10, 23, 51]
console.table(numeros)

const meses = new Array('Enero', "Febrero", "Marzo")
console.table(meses)

const arreglo = ["Culo", 23, true, "toto", null, {laputa: "si"}, [1, 2, 3]]
// console.table(arreglo)

// Acceder
// console.log(numeros[2])
// console.log(numeros[200])

// Cuantos hay
// console.log(numeros.length)

// Iterador
// meses.forEach( function(mes) { // Por cada uno de elementos que encuentre
//     console.log(mes)
// }) 

// Agregar elmentos al arreglo
numeros.push(100) 
numeros.push(120) // Agregar al final

numeros.unshift(10, 20, 30) // Agrega al principio del arreglo

numeros[2] = 50 // No es recomendable
console.table(numeros)

// Eliminar elemento
// meses.pop() // Eliminar ultimo elementos
// meses.shift() // Elimina el primer elementos
// meses.splice(1, 1); // Recorre el arreglo hasta la posicion y apartir de ahi elimnar el siguiente
console.table(meses)

// Rest operator o Spread Operator
const nuevoArreglo = [...meses, 'Abril'] // Mantiene el arreglo, equivalente al push
console.table(nuevoArreglo)

