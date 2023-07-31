/* Creo un array vacio donde se van a igresar los Characters */

const Characters = []

/* Creo una variable donde se va a guardar el numero de personajes que va a ingresar el usuario */

const addCharacters = parseInt(window.prompt('ingrese el numero de personajes que desea agregar'))

/* Funcion con un ciclo for donde se va a recorrer dependiendo del numero de personajes que ingreso el usuario */

function AddCharacters(){
  for (let i = 0; i < addCharacters; i++) {
    variableName = window.prompt('ingrese el nombre del pesonaje que desea agregar: ')
    variableHouse = window.prompt('ingrese el nombre de la casa que le desea asignar a su personaje ' + variableName + ' :')
  
    /*Creo el objeto donde se van a guardar los datos del Character y luego utilizo el .push para agregarlo al array */

    const character = {
      name: variableName,
      house: variableHouse
    }
    Characters.push(character)
  }    
}

/* Ejecuto la funcion AddCharacter */

AddCharacters(Characters)

/* Le pido al usuario agregar un nombre para que se guarde en una varaible */

let characterName = window.prompt('ingrese el nombre: ')

/* Funcion para buscar el personaje pasandole por parametro el pesonaje que debe buscar en el array */

function SerchCharacter(characterName) {
  for (let i = 0; i < Characters.length; i++) {
    if (characterName == Characters[i].name) {
      return alert('El personaje' + Characters[i].name + 'encontrado con la casa: ' + Characters[i].house + ' Fue encontrado');
    }
  }
  return alert('personaje no encontrado')
}

/* Ejecuto la funcion AddCharacter */

SerchCharacter(characterName)
