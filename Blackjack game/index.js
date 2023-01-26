let cards = []
let sumNumbers = 0
let numbers = document.getElementById('cards')
let sumEl = document.getElementById('sum')
let messageEl = document.getElementById('message')
let startEl = document.getElementById('start-btn')
let playerEl = document.getElementById('player')
let message = ""
let isAlive = false
let isBlackjack = false
let isStartGame = false
let player = {
    name:"zaid" ,
    chips : 100,
}
numbers.textContent = "Cards : "
sumEl.textContent = "Sum : "
 
function getRandomNumber (){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber===1){
        return 11
    }else if(randomNumber>10) return 10
    else return randomNumber
}

function renderGame (){
    numbers.textContent = "Cards : "
    sumEl.textContent = "Sum : "
    for(let i = 0 ; i<cards.length;i++){
        numbers.textContent += cards[i]+" "
       }
       sumEl.textContent += sumNumbers
    if (sumNumbers > 21){
        message = "You're out of the game!"
        isAlive= false
    }else if (sumNumbers <21) {
        isAlive=true
        message = "Do you want to draw a new card?"
    }
    else{
        isBlackjack = true
        message = "You've got Blackjack!"
    } 
    messageEl.textContent = message
}

function startGame(){
    if(isStartGame===false){
        playerEl.textContent = player.name + " : $" + player.chips
        isStartGame = true
        startEl.style.display = "none" ;
        let firstNumber = getRandomNumber()
        let secondNumber = getRandomNumber()
        cards = [firstNumber,secondNumber]
        sumNumbers = firstNumber + secondNumber
        numbers.textContent += firstNumber +" "+ secondNumber
        sumEl.textContent += sumNumbers
        renderGame()
    }
    }

    function newCard (){
        if(isStartGame===true && isAlive===true){
            let newNumber = getRandomNumber()
            cards.push(newNumber)
            sumNumbers+= newNumber
            renderGame()
        }
    }
   
