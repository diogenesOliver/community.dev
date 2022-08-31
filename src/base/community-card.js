let creatingCommunity = document.getElementById('createCommunity')
let communityModal = document.querySelector('.modal-community')
let closeModalButton = document.getElementById('closeModalCommunity')

let darkenTheScreen = document.getElementById('darkenTheScreen')

let createButton = document.getElementById('createButton')

let listOfCommunities = []

function darkenScreenByOpenModal(addingDark){
    addingDark.classList.add('modal-wrapper')
}

function removeDarkScreen(removeDark){
    removeDark.classList.remove('modal-wrapper')
}

function openModal() {
    communityModal.style.display = 'flex'

    darkenScreenByOpenModal(darkenTheScreen)
}

function closeModal() {
    communityModal.style.display = 'none'

    removeDarkScreen(darkenTheScreen)
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
        
        setTimeout( closeModal, 1000 )

    }
}

function createAElement(title, description, tagOne, tagTwo, tagThree) {

    let randomNumber = (Math.random() * 10).toFixed(3)

    let createCommunityElement = `
    <div class="card-community" id="cardsId">

                <div class="top-card-img">
                    <h2>Community.dev</h2>
                </div>

                <div class="header-card">
                    <h1>${title}</h1>
                    <small> ${randomNumber} users </small>
                </div>

                <div class="description">
                    <p> ${description} </p>
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