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