const characterData = document.querySelector('.character-data-container')
const characterImage = document.querySelector('.character-img-container')
const characterName = document.querySelector('.character-name-container')

const characterInformation = () => {
  const characterToSearch = JSON.parse(localStorage.getItem('characterSearch'))
  characterName.innerHTML = ` <h1>${characterToSearch.name}</h1>`
  characterImage.innerHTML = `<img src="${characterToSearch.image}" alt="character-image">`
  characterData.innerHTML = ` 
    <table>
    <tr>
    <td>Actor</td>
    <td>${characterToSearch.actor}</td>
    </tr>
    <tr>
    <td>House</td>
    <td>${characterToSearch.house}</td>
    </tr>
    <tr>
    <td>Species</td>
    <td>${characterToSearch.species}</td>
    </tr>
    <tr>
    <td>Gender</td>
    <td>${characterToSearch.gender}</td>
    </tr>
    <tr>
    <td>Patronus</td>
    <td>${characterToSearch.patronus}</td>
    </tr>
    <tr>
    <td>HogwartsStudent</td>
    <td>${characterToSearch.hogwartsStudent}</td>
    </tr>
    <tr>
    <td>Date of Birth</td>
    <td>${characterToSearch.dateOfBirth}</td>
    </tr>
    <tr>
    <td>Eye Colour</td>
    <td>${characterToSearch.eyeColour}</td>
    </tr>
    </table>`
    
}

characterInformation()


  // characterName.innerHTML = ` <p>Name: ${characterToSearch.name}</p>
  // <p>Actor: ${characterToSearch.actor}</p>
  // <p>House: ${characterToSearch.house}</p>
  // <p>Species: ${characterToSearch.species}</p>
  // <p>Gender: ${characterToSearch.gender}</p>
  // <p>Patronus: ${characterToSearch.patronus}</p>
  // <p>HogwartsStudent: ${characterToSearch.hogwartsStudent}</p>
  // `
