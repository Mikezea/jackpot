isAlive = false
hasWon = false
let comment = document.getElementById("para1")
let cardDisplay = document.getElementById("myCard1")
let mysum = document.getElementById("mysum")

let details = {
    name: "Okey",
    value: 145
}
let myValue =document.getElementById("player")
myValue.textContent =details.name + ": $" + details.value


function randnum(){
    let myRandom = Math.floor(Math.random()*13)+1
    return myRandom
}

function startGame(){
    isAlive =true
    let card1 = randnum()
    let card2 = randnum()
    sumCards = card1 + card2
    allCards = [card1, card2]

    renderCards()
}

function renderCards(){
    if(sumCards<21){
        cardDisplay.textContent ="Cards: "
        for(let i = 0; i<allCards.length; i++){
            cardDisplay.textContent +=allCards[i] + " "
        }
        mysum.textContent = "Sum: " + sumCards 
        comment.textContent = "Want To Play Another Round?"
    }
    else if(sumCards ===21){
        cardDisplay.textContent ="Cards:"
        for(let i = 0; i<allCards.length; i++){
            cardDisplay.textContent +=allCards[i] + " " 
        }
        mysum.textContent = "Sum: " + sumCards
        comment.textContent = "Congratulations! you've Won"
        hasWon = true;
        
    }
    
    else{
        cardDisplay.textContent ="Cards:"
        for(let i = 0; i<allCards.length; i++){
            cardDisplay.textContent +=allCards[i] + " "
        }
        mysum.textContent = "Sum: " + sumCards
        comment.textContent = "you're out of the game"
        isAlive = false
    }
}

function newCard(){
    if(isAlive && !hasWon){
    let card3 = randnum()
    allCards.push(card3)
    sumCards+= card3
    mysum.textContent = "Sum: " + sumCards
    renderCards()
}
}