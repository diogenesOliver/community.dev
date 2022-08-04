let buttonOpenMenu = document.getElementById('openMenu')
let buttonCloseMenu = document.getElementById('closeMenu')

function openMenu() {
    buttonOpenMenu.style.display = 'none'
    buttonCloseMenu.style.display = 'block'

    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    buttonCloseMenu.style.display = 'none'
    buttonOpenMenu.style.display = 'block'

    document.body.classList.remove('menu-expanded')
}

buttonOpenMenu.addEventListener('click', () => {
    openMenu()
})

buttonCloseMenu.addEventListener('click', () => {
    closeMenu()
})