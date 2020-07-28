const scissor = document.getElementById('scissor')
const paper = document.getElementById('paper')
const rock = document.getElementById('rock')
const lizard = document.getElementById('lizard')
const spock = document.getElementById('spock')
const rules = document.getElementById('rules')
const modal = document.getElementById('modal')


rules.addEventListener('click', ()=>{
    modal.classList.add('modal')
    modal.classList.remove('hidden')
})
