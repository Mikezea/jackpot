let comment = document.getElementById("para1")
let display = document.getElementById("myCard1")
let mysum = document.getElementById("mysum")
function startGame(){
    let card1 = Math.floor(Math.random()*13)+1
    let card2 = Math.floor(Math.random()*13)+1
    
    sumCards =card1 + card2
    display.textContent ="Sards: "+ card1 + " ," + card2
    mysum.textContent = "Sum: " + sumCards
    renderCards()
}

function renderCards(){
    if(sumCards<21){
        comment.textContent = "Want To Play Another Round?"
    }
    else if(sumCards ===21){
        comment.textContent = "Congratulations! you've Won"
    }
    else{
        comment.textContent = "you're out of the game"
    }
}