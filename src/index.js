let numberUser = document.getElementById('numbers-user')
let numberCommunity = document.getElementById('numbers-community')
let numberArticles = document.getElementById('numbers-articles')
let communityDevSpan = document.getElementById('communityDevSpan')

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

let typedcommunityDevSpan = new Typed(communityDevSpan, {
    strings:['Community.dev'],
    typeSpeed: 200,
    backSpeed: 90,
    loop: true
})