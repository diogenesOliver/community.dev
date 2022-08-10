let activeDarkMode = document.getElementById('activeDarkMode')
let activeLightMode = document.getElementById('activeLightMode')

let pageBody = document.body

function darkMode(body){
    activeLightMode.style.display = 'block'
    activeDarkMode.style.display = 'none'

    body.style.background = `#1C1C1C`
}

function lightMode(body){
    activeLightMode.style.display = 'none'
    activeDarkMode.style.display = 'block'

    body.style.background = `#FFFFFF`
}

activeDarkMode.addEventListener('click', () => {
    darkMode(pageBody)
})

activeLightMode.addEventListener('click', () => {
    lightMode(pageBody)
})