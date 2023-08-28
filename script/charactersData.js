import { updateGallery, randomImagee } from './functions.js'

const buttonPrev = document.getElementById('button-previous')
const buttonNext = document.getElementById('button-next')

let limit = 8
let firstResult = 1
export let characters = []

export const getCharacters = async () => {
  const response = await fetch('https://hp-api.onrender.com/api/characters')
  characters = await response.json()
  console.log(characters)
  randomImagee()
  updateGallery(firstResult, limit)
}

getCharacters()

buttonPrev.addEventListener('click', () => {
  if (firstResult != 1) {
    firstResult = firstResult - 8
    limit = limit - 8
    updateGallery(firstResult, limit)
    buttonPrev.disabled = false
  } else {
    console.log('no hay archivos para utilizar el previous')
  }
})

buttonNext.addEventListener('click', () => {
  firstResult = limit + 1
  limit = limit + 8
  updateGallery(firstResult, limit)
})
