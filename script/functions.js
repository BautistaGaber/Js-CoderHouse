import { characters } from './charactersData.js'

const imageGallery = document.getElementById('imageGallery')
const randomImage =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'

export function updateGallery(firstResult, limit) {
  imageGallery.innerHTML = ''
  for (let i = firstResult - 1; i < limit && i < characters.length; i++) {
    const imgDiv = document.createElement('div')
    imgDiv.classList.add('img-container-gallery')
    imgDiv.addEventListener('click', () => {
      localStorage.setItem('characterSearch', JSON.stringify(characters[i]))
      window.location.href = 'character.html'
    })
    const nameDiv = document.createElement('div')
    nameDiv.classList.add('name-container-gallery')
    const img = document.createElement('img')
    img.src = characters[i].image
    nameDiv.textContent = characters[i].name

    imgDiv.appendChild(img)
    imgDiv.appendChild(nameDiv)
    imageGallery.appendChild(imgDiv)
  }
}

export function randomImagee() {
  characters.forEach((character) => {
    if (!character.image) {
      character.image = randomImage
    }
  })
}

export function goToCharacterHtml() {
  window.location.href = 'character.html'
}
