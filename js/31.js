async function obtenerEmpleados()  {

    const archivo = 'empleados.json'

    // fetch(archivo)
    //     .then(resultado => resultado.json()) // o text()
    //     .then(datos => {
    //         // console.log(datos.empleados)
    //         const { empleados } = datos
    //         // console.log(empleados)

    //         empleados.forEach(empleado => {
    //             console.log(empleado)
    //             console.log(empleado.id)
    //             console.log(empleado.nombre)

    //             document.querySelector(".contenido").textContent = empleado.nombre
    //         });
    //     })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos)
    // Lo mismo que arriba
}

obtenerEmpleados();