const crearPersonas = (nombre, apellido) => ({nombre, apellido})

// funcion normal 
// function crearPersonas(nombre, apellido){
//     return {nombre, apellido}
// }

const persona = crearPersonas("Airy", "Silva")

console.log(persona)


function imprimeArgumentos(){
    console.log(arguments)
}

// Crea un array de los argumentos (...palabra) 
// Si se ponen mas argumentos tienen que ser antes de el sprinoperator
const imprimeArgumentos2 = ( edad, ...arg) => {
    // console.log(edad, arg)
    return arg
}

const [hijos, soltero, nombre] = imprimeArgumentos2(10, 2, true, 'Ari')

console.log({hijos, soltero, nombre})