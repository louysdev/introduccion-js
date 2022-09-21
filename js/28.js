// Promises 

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if(auth) {
        resolve("Usuario autenticado"); // El promise se cumple
    } else {
        reject("No se pudo iniciar sesion"); // El promise no se cumple
    }
});

usuarioAutenticado
    .then(function(resultado) { // Usado para traer el resultad ode un resolve del promise
        console.log(resultado)
    })
    .catch(function(error) { // usado para traer resultado de un reject en un promise
        console.log(error)
    })

// Valores que puede tomar un promise:
// Pendeing: A la espera de que se cumpla
// Fullfilled: Se cumplio
// Rejected : Se ha rechazado 