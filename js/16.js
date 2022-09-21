// Funciones

// Declaracion de function

function sumar() {
    console.log(10 + 10)
}

sumar()

// Expresion de la funcion

const restar = function() {
    console.log(10 - 5);
}

restar();
    
// IIFE previene que las variables salgan del archivo
(function() {
    console.log("Esto se ejecuta solo")
})();

console.log(cliente);