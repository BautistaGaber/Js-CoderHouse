import { characters } from './charactersData.js'
import { goToCharacterHtml } from './functions.js'

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
    localStorage.setItem('characterSearch', JSON.stringify(userFound))
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
    setTimeout(goToCharacterHtml, 1000)
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
      localStorage.setItem('characterSearch', JSON.stringify(userFound))
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
      setTimeout(goToCharacterHtml, 1000)
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

