const $scissor = document.querySelector('.scissor')
const $paper = document.getElementById('paper')
const $rock = document.getElementById('rock')
const $lizard = document.getElementById('lizard')
const $spock = document.getElementById('spock')
const $rules = document.getElementById('rules')
const $modal = document.getElementById('modal')
const $background = document.getElementById('background')
const $close = document.getElementById('close')
const $play = document.getElementById('play')
const $game = document.getElementById('game')
const $button = document.getElementById('button')
const $resolve = document.getElementById('resolve')
const $gamerPick = document.getElementById('gamerPick')
const $housePick = document.getElementById('housePick')
const $score = document.getElementById('score')

var img = ['icon-scissors.svg', 'icon-paper.svg', 'icon-rock.svg', 'icon-lizard.svg', 'icon-spock.svg']
var title = [' You Win', 'You Lose', 'Draw']
var iconClass = ['scissor', 'paper', 'rock', 'lizard', 'spock']

var score = 0;

function finalScore(){
    score += 1
    $score.innerHTML = `<p>${score}</p>`
}

function modal(){
    $modal.classList.toggle('modal')
    $modal.classList.toggle('hidden')
}
function background(){
    $background.classList.toggle('hidden')
    $background.classList.toggle('background')
}

function GamerPicked(gamer, img){
    return $gamerPick.innerHTML = `<article class="container ${gamer}"><img src="images/${img}"></article>`
}

function play(){
    $play.classList.toggle('play')
    $play.classList.toggle('hidden')
    
}
function game(){
    $game.classList.toggle('game')
    $game.classList.toggle('hidden')
}
$rules.addEventListener('click', () => {
    modal()
    background()

})
$close.addEventListener('click', () => {
    modal()
    background()
})

$scissor.addEventListener('click', () => {
    var number = Math.floor(Math.random()*5)
    GamerPicked(iconClass[0], img[0])
    game()
    play()
    switch(number){
        case 0: 
            $housePick.innerHTML = `<article class="container ${iconClass[0]}"><img src="images/${img[0]}"></article>`;
            $resolve.innerHTML = `<h1>${title[2]}</h1>`;
            break
        case 1:
            $housePick.innerHTML = `<article class="container ${iconClass[1]}"><img src="images/${img[1]}"></article>`;
            $resolve.innerHTML = `<h1>${title[0]}</h1>`;
            finalScore()
            break
        case 2:
            $housePick.innerHTML = `<article class="container ${iconClass[2]}"><img src="images/${img[2]}"></article>`;
            $resolve.innerHTML = `<h1>${title[1]}</h1>`;
            break
        case 3:
            $housePick.innerHTML = `<article class="container ${iconClass[3]}"><img src="images/${img[3]}"></article>`;
            $resolve.innerHTML = `<h1>${title[0]}</h1>`;
            finalScore()
            break
        case 4:
            $housePick.innerHTML = `<article class="container ${iconClass[4]}"><img src="images/${img[4]}"></article>`;
            $resolve.innerHTML = `<h1>${title[1]}</h1>`;
            break
            
    }    
})

$paper.addEventListener('click', () => {
    var number = Math.floor(Math.random()*5)
    GamerPicked(iconClass[1], img[1])
    game()
    play()
    switch(number){
        case 0: 
            $housePick.innerHTML = `<article class="container ${iconClass[0]}"><img src="images/${img[0]}"></article>`;
            $resolve.innerHTML = `<h1>${title[1]}</h1>`;
            break
        case 1:
            $housePick.innerHTML = `<article class="container ${iconClass[1]}"><img src="images/${img[1]}"></article>`;
            $resolve.innerHTML = `<h1>${title[2]}</h1>`;
            break
        case 2:
            $housePick.innerHTML = `<article class="container ${iconClass[2]}"><img src="images/${img[2]}"></article>`;
            $resolve.innerHTML = `<h1>${title[0]}</h1>`;
            finalScore()
            break
        case 3:
            $housePick.innerHTML = `<article class="container ${iconClass[3]}"><img src="images/${img[3]}"></article>`;
            $resolve.innerHTML = `<h1>${title[1]}</h1>`;
            break
        case 4:
            $housePick.innerHTML = `<article class="container ${iconClass[4]}"><img src="images/${img[4]}"></article>`;
            $resolve.innerHTML = `<h1>${title[0]}</h1>`;
            finalScore()
            break
            
    }    
})

$rock.addEventListener('click', () => {
    var number = Math.floor(Math.random()*5)
    GamerPicked(iconClass[2], img[2])
    game()
    play()
    switch(number){
        case 0: 
            $housePick.innerHTML = `<article class="container ${iconClass[0]}"><img src="images/${img[0]}"></article>`;
            $resolve.innerHTML = `<h1>${title[0]}</h1>`;
            finalScore()
            break
        case 1:
            $housePick.innerHTML = `<article class="container ${iconClass[1]}"><img src="images/${img[1]}"></article>`;
            $resolve.innerHTML = `<h1>${title[1]}</h1>`;
            break
        case 2:
            $housePick.innerHTML = `<article class="container ${iconClass[2]}"><img src="images/${img[2]}"></article>`;
            $resolve.innerHTML = `<h1>${title[2]}</h1>`;
            break
        case 3:
            $housePick.innerHTML = `<article class="container ${iconClass[3]}"><img src="images/${img[3]}"></article>`;
            $resolve.innerHTML = `<h1>${title[0]}</h1>`;
            finalScore()
            break
        case 4:
            $housePick.innerHTML = `<article class="container ${iconClass[4]}"><img src="images/${img[4]}"></article>`;
            $resolve.innerHTML = `<h1>${title[1]}</h1>`;
            break
            
    }    
})
$lizard.addEventListener('click', () => {
    var number = Math.floor(Math.random()*5)
    GamerPicked(iconClass[3], img[3])
    game()
    play()
    switch(number){
        case 0: 
            $housePick.innerHTML = `<article class="container ${iconClass[0]}"><img src="images/${img[0]}"></article>`;
            $resolve.innerHTML = `<h1>${title[1]}</h1>`;
            break
        case 1:
            $housePick.innerHTML = `<article class="container ${iconClass[1]}"><img src="images/${img[1]}"></article>`;
            $resolve.innerHTML = `<h1>${title[0]}</h1>`;
            finalScore()
            break
        case 2:
            $housePick.innerHTML = `<article class="container ${iconClass[2]}"><img src="images/${img[2]}"></article>`;
            $resolve.innerHTML = `<h1>${title[1]}</h1>`;
            break
        case 3:
            $housePick.innerHTML = `<article class="container ${iconClass[3]}"><img src="images/${img[3]}"></article>`;
            $resolve.innerHTML = `<h1>${title[2]}</h1>`;
            break
        case 4:
            $housePick.innerHTML = `<article class="container ${iconClass[4]}"><img src="images/${img[4]}"></article>`;
            $resolve.innerHTML = `<h1>${title[0]}</h1>`;
            finalScore()
            break
            
    }    
})
$spock.addEventListener('click', () => {
    var number = Math.floor(Math.random()*5)
    GamerPicked(iconClass[4], img[4])
    game()
    play()
    switch(number){
        case 0: 
            $housePick.innerHTML = `<article class="container ${iconClass[0]}"><img src="images/${img[0]}"></article>`;
            $resolve.innerHTML = `<h1>${title[0]}</h1>`;
            finalScore()
            break
        case 1:
            $housePick.innerHTML = `<article class="container ${iconClass[1]}"><img src="images/${img[1]}"></article>`;
            $resolve.innerHTML = `<h1>${title[1]}</h1>`;
            break
        case 2:
            $housePick.innerHTML = `<article class="container ${iconClass[2]}"><img src="images/${img[2]}"></article>`;
            $resolve.innerHTML = `<h1>${title[0]}</h1>`;
            finalScore()
            break
        case 3:
            $housePick.innerHTML = `<article class="container ${iconClass[3]}"><img src="images/${img[3]}"></article>`;
            $resolve.innerHTML = `<h1>${title[1]}</h1>`;
            break
        case 4:
            $housePick.innerHTML = `<article class="container ${iconClass[4]}"><img src="images/${img[4]}"></article>`;
            $resolve.innerHTML = `<h1>${title[2]}</h1>`;
            break
            
    }    
})

$button.addEventListener('click', () => {
    game()
    play()
})



