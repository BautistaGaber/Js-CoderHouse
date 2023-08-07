/* Creo la clase Character con todos los atributos que va a tener */
class Character{
  constructor(id, name, house, gender){
    this.id = id
    this.name = name
    this.house = house
    this.gender = gender
  }
}

/* Creo instancias de la clase Character */

const Harry = new Character(
  1,
  "Harry",
  "Gryffindor",
  "Male"
)

const Hermione = new Character(
  2,
  "Hermione",
  "Gryffindor",
  "Female"
)

const Ron = new Character(
  3,
  "Ron",
  "Gryffindor",
  "Male"
)

const Draco = new Character(
  4,
  "Draco",
  "Slithering",
  "Male"
)

const Snape = new Character(
  5,
  "Snape",
  "Gryffindor",
  "Male"
)

/* Creo un array con los personajes */

const characters = [Harry, Hermione, Ron, Draco, Snape]

/* Traigo todos los nombres del array characters */

const charactermap = characters.map((character) => {return character.name})

/* agrego un join dentro del charactermap para crear un espacio en los nombres*/

const characterMapString = charactermap.join(', ')

/* Muestro los personajes que existen dentro del array */

window.alert("Los Personajes de Harry potter son: " +  characterMapString )

/* Le pido al usuario agregar un nombre para que se guarde en una varaible */

let characterName = window.prompt('ingrese el nombre que desea buscar: ')

/* Busco el personaje en el array, si este no existe va a devolcer un Undefined y si existe devolvera el nombre y lo guardara en la variable */
const characterff = characters.find((character) => { return character.name.toLowerCase() === characterName.toLocaleLowerCase() 
})

/* Creo un if ternario donde si characterff es undefined que cree un alert con el mensaje personaje no encontrado y si no es undefined va a devolver personaje encontrado */
characterff === undefined ? alert('personaje no encontrado') : alert('personaje encontrado')
