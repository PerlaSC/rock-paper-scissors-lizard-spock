const $scissor = document.getElementById('scissor')
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

const number = Math.floor(Math.random()*5)

function modal(){
    $modal.classList.toggle('modal')
    $modal.classList.toggle('hidden')
}
function background(){
    $background.classList.toggle('hidden')
    $background.classList.toggle('background')
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
    GamerPicked($scissor)
    game()
    play()
    if (TransformNumber(0)){
        return $play.appendChild($rock)
    }
})

$button.addEventListener('click', () => {
    game()
    play()
})

function TransformNumber(number){
    switch(number) {
        case 0:
            return $rock
        case 1:
            return $scissor
        case 2: 
            return $lizard
        case 3:
            return $paper
        case 4:
            return $spock
    }
}
function TransformIcon(gamer){
    switch(gamer){
        case $rock:
            return 0
        case $scissor:
            return 1
        case $lizard: 
            return 2
        case $paper:
            return 3
        case $spock:
            return 4
    }
}

function GamerPicked(gamer){
    return $play.appendChild(gamer)
}
function TheHousePicked(house){
    r
}