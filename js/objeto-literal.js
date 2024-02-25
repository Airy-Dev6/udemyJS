let personaje = {
    nombre: "Tony Stark",
    codeName: "Iron Man", 
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034, lng: -118.7
    },
    trajes: ['Mark 1', 'mark V', 'Holkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubication: 'Malibu, California'
    }, 
    'ultima-pelicula': 'Infinity War'
}

console.log(personaje)
console.log('Nombre: ', personaje.nombre)
console.log('Nombre: ', personaje['nombre'])
console.log('Edad: ', personaje.edad )
console.log('Cordenadas: ', personaje.coords)
console.log('Latitud: ', personaje.coords.lat)

console.log('No. trajes: ', personaje.trajes.length)
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length-1])

let x = 'vivo'

console.log('vivo', personaje[x])
console.log('Ultima pelicula: ', personaje["ultima-pelicula"])

// Borrar una propiedad de un objeto 

delete personaje.edad

// Agregar una propiedad 

personaje.casado = true


console.log('personale',personaje)

const entriesPares = Object.entries(personaje)

console.log(entriesPares)

// podemos acceder a las propiedas y valores en forma de array de esta forma 

const propiedades = Object.getOwnPropertyNames(personaje)
console.log(propiedades)

const valores = Object.values(personaje)

console.log({propiedades,valores})

console.log('keys :', Object.keys(personaje))