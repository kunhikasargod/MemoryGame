const cardArray = [
    {
        name: 'apple',
        img: 'img/apple.png',
    },
    {
        name: 'avocado',
        img: 'img/avocado.png',
    },
    {
        name: 'coconut',
        img: 'img/coconut.png',
    },
    {
        name: 'grapes',
        img: 'img/grapes.png',
    },
    {
        name: 'kiwi',
        img: 'img/kiwi.png',
    },
    {
        name: 'lemon',
        img: 'img/lemon.png',
    },
    {
        name: 'mango',
        img: 'img/mango.png',
    },
    {
        name: 'melon',
        img: 'img/melon.png',
    },
    {
        name: 'pepper',
        img: 'img/pepper.png',
    },
    {
        name: 'pineapple',
        img: 'img/pineapple.png',
    },
    {
        name: 'strawberry',
        img: 'img/strawberry.png',
    },
    {
        name: 'watermelon',
        img: 'img/watermelon.png',
    },
    {
        name: 'apple',
        img: 'img/apple.png',
    },
    {
        name: 'avocado',
        img: 'img/avocado.png',
    },
    {
        name: 'coconut',
        img: 'img/coconut.png',
    },
    {
        name: 'grapes',
        img: 'img/grapes.png',
    },
    {
        name: 'kiwi',
        img: 'img/kiwi.png',
    },
    {
        name: 'lemon',
        img: 'img/lemon.png',
    },
    {
        name: 'mango',
        img: 'img/mango.png',
    },
    {
        name: 'melon',
        img: 'img/melon.png',
    },
    {
        name: 'pepper',
        img: 'img/pepper.png',
    },
    {
        name: 'pineapple',
        img: 'img/pineapple.png',
    },
    {
        name: 'strawberry',
        img: 'img/strawberry.png',
    },
    {
        name: 'watermelon',
        img: 'img/watermelon.png',
    },


]

cardArray.sort(() => 0.5 - Math.random())

const girdDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const messageDisplay = document.querySelector('#message')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        girdDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'img/blank.jpg')
        messageDisplay.textContent = 'You have clicked the same imgage'
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        messageDisplay.textContent = 'You found a match'
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)

    } else {
        cards[optionOneId].setAttribute('src', 'img/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'img/blank.jpg')
        messageDisplay.textContent = 'Sorry, Try again'
        
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2 ) {
        resultDisplay.textContent = 'Congrats! You found them all!'
    }

}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

    
}