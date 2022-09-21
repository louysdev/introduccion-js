// Estructuras de control

// if, else

let vidas = 3
if (vidas >= 1) {
    console.log("El jugador aun tiene vidas")
} else {
    console.log("El juggador se murio")
}

// Switch

let metodo = "VISA"

switch(metodo) {
    case "VISA": console.log("Su metodo de pago ese VISA")
        break;
    case "MASTERCARD": console.log("Su metodo de pago es MASTERCARD")
        break;
    default: console.log("No aceptamos su metodo de pago")
        break
}