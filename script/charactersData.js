const buttonPrev = document.getElementById('button-previous')
const buttonNext = document.getElementById('button-next')
const imageGallery = document.getElementById('imageGallery')


let limit = 8
let firstResult = 1
export let characters = []
const randomImage = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'

const getCharacters = async () => {
  const response = await fetch('https://hp-api.onrender.com/api/characters')
  characters = await response.json()
  console.log(characters)
  randomImagee()
  updateGallery(firstResult, limit)
}

function updateGallery(firstResult, limit) {
  imageGallery.innerHTML = ''
  for (let i = firstResult - 1; i < limit && i < characters.length; i++) {
    const imgDiv = document.createElement('div')
    imgDiv.classList.add('img-container-gallery')
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

function randomImagee() {
  characters.forEach((character) => {
    if (!character.image) {
      character.image = randomImage
    }
  })
}

getCharacters()

buttonPrev.addEventListener('click', () => {
  if (firstResult != 1) {
    firstResult = firstResult - 8
    limit = limit - 8
    console.log(firstResult, limit)
    console.log(firstResult, limit)
    updateGallery(firstResult, limit)
    buttonPrev.disabled = false
  } 
  else{
    console.log('no hay archivos para utilizar el previous')
  }
})

buttonNext.addEventListener('click', () => {
  firstResult = limit + 1
  limit = limit + 8
  updateGallery(firstResult, limit)
})
