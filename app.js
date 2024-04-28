const cardArray = [
    {
        name:'fries',
        img:'fries.jpg'
    },
    {
        name:'burger',
        img:'burger.jpg'
    },
    {
        name:'hotdog',
        img:'hotdog.jpg'
    },
    {
        name:'icecream',
        img:'icecream.jpg'
    },
    {
        name:'milkshake',
        img:'milkshake.jpg'
    },
    {
        name:'pizza',
        img:'pizza.jpg'
    },
    {
        name:'fries',
        img:'fries.jpg'
    },
    {
        name:'burger',
        img:'burger.jpg'
    },
    {
        name:'hotdog',
        img:'hotdog.jpg'
    },
    {
        name:'icecream',
        img:'icecream.jpg'
    },
    {
        name:'milkshake',
        img:'milkshake.jpg'
    },
    {
        name:'pizza',
        img:'pizza.jpg'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for(let i=0;i < cardArray.length;i++){
        const card = document.createElement('img')
        card.setAttribute('src','blank.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        console.log(card,i)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionSecondId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match')

    if(optionOneId == optionSecondId){
        cards[optionOneId].setAttribute('src','blank.jpg')
        cards[optionSecondId].setAttribute('src','blank.jpg')
        alert('You have clicked the same image')
    }
    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src','white.jpg')
        cards[optionSecondId].setAttribute('src','white.jpg')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionSecondId].removeEventListener('click',flipCard)

        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','blank.jpg')
        cards[optionSecondId].setAttribute('src','blank.jpg')
        alert('Sorry try again')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations You Found them all'
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}