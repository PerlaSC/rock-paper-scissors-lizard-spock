const $scissor = document.getElementById('scissor')
const $paper = document.getElementById('paper')
const $rock = document.getElementById('rock')
const $lizard = document.getElementById('lizard')
const $spock = document.getElementById('spock')
const $rules = document.getElementById('rules')
const $modal = document.getElementById('modal')
const $background = document.getElementById('background')
const $close = document.getElementById('close')

function modal(){
    $modal.classList.toggle('modal')
    $modal.classList.toggle('hidden')
}
function background(){
    $background.classList.toggle('hidden')
    $background.classList.toggle('background')
}

$rules.addEventListener('click', ()=>{
    modal()
    background()

})
$close.addEventListener('click', ()=>{
    modal()
    background()
})
