// Funciones

// Declaracion de function 
// Este no da error porque no importa en que lugar se manda a llamar

sumar()
function sumar() {
    console.log(10 + 10)
}



// Expresion de la funcion
// Este da error porque no encuentra la funcion, ya que esta declarada como una variable
restar();
const restar = function() {
    console.log(10 - 5);
}

    
// IIFE previene que las variables salgan del archivo
(function() {
    console.log("Esto se ejecuta solo")
})();

console.log(cliente);