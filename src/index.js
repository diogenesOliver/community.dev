let buttonOpenMenu = document.getElementById('openMenu')
let buttonCloseMenu = document.getElementById('closeMenu')

let numberUser = document.getElementById('numbers-user')
let numberCommunity = document.getElementById('numbers-community')
let numberArticles = document.getElementById('numbers-articles')

let typedUser = new Typed(numberUser, {
    strings:['+ 500.000'],
    typeSpeed: 200,
    backSpeed: 90,
    loop: true
})

let typedCommunity = new Typed(numberCommunity, {
    strings:['+ 100.000'],
    typeSpeed: 200,
    backSpeed: 90,
    loop: true
})

let typedArticles = new Typed(numberArticles, {
    strings:['+ 800.000'],
    typeSpeed: 200,
    backSpeed: 90,
    loop: true
})

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

let userPostElement = `

<div class="puclications">

        <div class="head-publication">

            <div class="infromations">

                <img src="/assets/user.svg" alt="">
                <div>
                    <h4> Diógenes Ribeiro </h4>
                    <small> @diogenes_oliveira </small>
                </div>

            </div>

            <button> + Seguir </button>

        </div>

        <p>  </p>

    </div>

`