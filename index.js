import { characters } from './script/charactersData.js'

const charactermap = characters.map((character) => {
  return character.name
})

const characterMapString = charactermap.join(', ')

window.alert('Los nombres de los personajes son: ' + characterMapString)

const characterfind = (name) => {
  return characters.find(
    (character) => character.name.toLowerCase() == name.toLowerCase()
  )
}

const search = document.getElementById('inputt')
const btnSearch = document.getElementById('button-serch')

btnSearch.addEventListener('click', () => {
  const userFound = characterfind(search.value)
  if (userFound !== undefined) {
    localStorage.setItem('name', JSON.stringify(userFound))
    Toastify({
      text: 'El Nombre de Personaje Ingresado Existe',
      duration: 3000,
      gravity: 'top',
      position: 'right',
      style: {
        background: '#008000'
      },
      close: true,
      stopOnFocus: true,
    }).showToast()
  } else if (search.value === '') {
    Toastify({
      text: 'El Campo esta vacio',
      duration: 3000,
      gravity: 'top',
      position: 'right',
      style: {
        background: '#ff0000',
      },
      close: true,
      stopOnFocus: true,
    }).showToast()
  } else {
    Toastify({
      text: 'El personaje que esta buscando no existe!',
      duration: 3000,
      gravity: 'top',
      position: 'right',
      style: {
        background: '#ff0000',
      },
      close: true,
      stopOnFocus: true,
    }).showToast()
  }
})

search.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    const userFound = characterfind(search.value)
    if (userFound !== undefined) {
      localStorage.setItem('name', JSON.stringify(userFound))
      Toastify({
        text: 'El Nombre de Personaje Ingresado Existe',
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
          background: '#008000'
        },
        close: true,
        stopOnFocus: true,
      }).showToast()
    } else if (search.value === '') {
      Toastify({
        text: 'El Campo esta vacio',
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
          background: '#ff0000',
        },
        close: true,
        stopOnFocus: true,
      }).showToast()
    } else {
      Toastify({
        text: 'El personaje que esta buscando no existe!',
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
          background: '#ff0000',
        },
        close: true,
        stopOnFocus: true,
      }).showToast()
    }
  }
})
