// Notification API
const boton = document.querySelector("#boton"); // Asignar codigo JS a un elemento En HTML. document hace referencia a todo el HTML

// Esta funcion le pide al usuario que acepte los permise de notificacoin
boton.addEventListener("click", function() {
    Notification.requestPermission() // API de JS para joder con notificaciones
        .then(resultado => console.log(`El resultado es: ${resultado}`))
});

if(Notification.permission == "granted") {
    new Notification("Te va a llevar el diablo", { //Crea una nueva notificacion
        icon: "img/ccj.png",
        body: "Este mmg es el culpable"
    })
}