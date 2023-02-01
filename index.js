isAlive = false
let comment = document.getElementById("para1")
let cardDisplay = document.getElementById("myCard1")
let mysum = document.getElementById("mysum")

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
        
    }
    
    else{
        cardDisplay.textContent ="Cards:"
        for(let i = 0; i<allCards.length; i++){
            cardDisplay.textContent +=allCards[i] + " "
        }
        mysum.textContent = "Sum: " + sumCards
        comment.textContent = "you're out of the game"
    }
}

function newCard(){
    let card3 = randnum()
    allCards.push(card3)
    sumCards+= card3
    mysum.textContent = "Sum: " + sumCards
    renderCards()

}