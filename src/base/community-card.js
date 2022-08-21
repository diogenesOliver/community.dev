let creatingCommunity = document.getElementById('createCommunity')
let communityModal = document.querySelector('.modal-community')
let closeModalButton = document.getElementById('closeModalCommunity')

let createButton = document.getElementById('createButton')

let listOfCommunities = []

function openModal() {
    communityModal.style.display = 'flex'
}

function closeModal() {
    communityModal.style.display = 'none'
}

function addNewInformations() {

    let communityTitle = document.getElementById('communityTitle').value
    let communityDescription = document.getElementById('communityDescription').value

    let tagOne = document.getElementById('tag1').value
    let tagTwo = document.getElementById('tag2').value
    let tagThree = document.getElementById('tag3').value

    if (!communityTitle | !communityDescription | !tagOne | !tagTwo | !tagThree) {
        alert('Preencha todos os campos')
    } else {
        createAElement(communityTitle, communityDescription, tagOne, tagTwo, tagThree)
        addInformationToObject(communityTitle, communityDescription, tagOne, tagTwo, tagThree)
        closeModal()
    }
}

function createAElement(title, description, tagOne, tagTwo, tagThree) {

    let randomNumber = (Math.random() * 10).toFixed(3)

    let createCommunityElement = `
    <div class="card-community">

        <div class="header-card">
            <h1>${title}</h1>
            <h4> ${randomNumber} users </h4>
        </div>

        <div class="description">
            <p> ${description} </p>
        </div>

        <div class="user-image-perfil">
            <img src="/assets/user.svg">
            <img src="/assets/user.svg">
            <img src="/assets/user.svg">
        </div>

        <div class="tags">

            <ul>
                <li> <a href=""> ${tagOne} </a> </li>
                <li> <a href=""> ${tagTwo} </a> </li>
                <li> <a href=""> ${tagThree} </a> </li>
            </ul>

        </div>

        <button> Get started </button>

    </div>
`

    document.querySelector('.cards').innerHTML += createCommunityElement
}

function addInformationToObject(title, description, tagOne, tagTwo, tagThree) {
    let objectInformation = {
        title,
        description,
        tagOne,
        tagTwo,
        tagThree
    }

    listOfCommunities.push(objectInformation)
    console.log(listOfCommunities)
}

creatingCommunity.addEventListener('click', () => {

    listOfCommunities.length >= 2 ? alert('Você atingiu o seu limite de comunidades criadas') : openModal()

})

closeModalButton.addEventListener('click', () => {
    closeModal()
})

createButton.addEventListener('click', () => {
    addNewInformations()
})