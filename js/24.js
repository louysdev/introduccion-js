// This

const cliente = {
    nombre: "Juan",
    informacion: function() {
        console.log(`Info: ${this.nombre}`) // COn function , hace referencia a lo interno del objeto
    }
}

const cliente2 = {
    nombre: "Pedro",
    informacion: ()  => console.log(`Info: ${this.nombre}`) // Arrow funcion aunque tenga el this , hace refeerencia a la ventana globan

}

cliente.informacion()
cliente.informacion2()
