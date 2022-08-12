let activeDarkMode = document.getElementById('activeDarkMode')
let activeLightMode = document.getElementById('activeLightMode')

let pageBody = document.body
let navbarDarkMode = document.querySelector('nav')
let mainDarkMode = document.querySelector('main')

function darkMode(){
    activeLightMode.style.display = 'block'
    activeDarkMode.style.display = 'none'

    getColorForDarkMode(pageBody)
}

function lightMode(){
    activeLightMode.style.display = 'none'
    activeDarkMode.style.display = 'block'

    removingColorFormDarkMode(pageBody)
}

function getColorForDarkMode(body){
    body.style.background = `#1C1C1C`
    
    navbarDarkMode.classList.add('dark-mode')
    mainDarkMode.classList.add('dark-mode')
}

function removingColorFormDarkMode(body){
    body.style.background = `#FFFFFF`

    navbarDarkMode.classList.remove('dark-mode')
    mainDarkMode.classList.remove('dark-mode')
}

activeDarkMode.addEventListener('click', () => {
    darkMode(pageBody)
})

activeLightMode.addEventListener('click', () => {
    lightMode(pageBody)
})