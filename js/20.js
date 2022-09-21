
// Metodos de propiedad
// Crear funciones en kas propiedad es de un objeto, pero estas se llaman como si fueran metodosh
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo la cancion con el ID: ${id}`)
    },
    pausar : function() {
        console.log(`Pausando la cancion`)
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando el playlist de nombre: ${nombre}`)
    },
    reproducirPlaylist : function(nombre) {
        console.log(`La playlist ${nombre} esta sonando`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion con ID: ${id}`)
}

reproductor.reproducir(3901);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Bachata")
reproductor.reproducirPlaylist("Salsa")

console.log(reproductor)