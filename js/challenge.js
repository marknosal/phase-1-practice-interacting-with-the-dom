let myTimeout = setInterval(countBySecond, 1000)
const counter = document.getElementById('counter')
const plusButton = document.getElementById('plus').addEventListener('click', increaseCounter)
const minusButton = document.getElementById('minus').addEventListener('click', decreaseCounter)
const likeButton = document.getElementById('heart').addEventListener('click', likeLogger)
const pauseButton = document.getElementById('pause').addEventListener('click', pauseCounter)
const commentForm = document.getElementById('comment-form').addEventListener('submit', commentSubmit)
const likeCounter = {count: parseInt(counter.innerText), click: 0}


function countBySecond() {
    counter.innerText++
    likeCounter['click'] = 0
    likeCounter['count'] = parseInt(counter.innerText)
}

function increaseCounter() {
    counter.innerText++
}

function decreaseCounter() {
    counter.innerText--
}

function likeLogger(event) {
    likeCounter.click++
    if (likeCounter.click === 1) {
        const likeLog = document.createElement('ul')
        likeLog.textContent = `${parseInt(likeCounter['count'])} has been liked ${likeCounter['click']} times`
        document.querySelector('.likes').appendChild(likeLog)
        likeLog.id = counter.innerText
    } else {
        document.getElementById(counter.innerText).innerText = `${parseInt(likeCounter['count'])} has been liked ${likeCounter['click']} times`
    }
}

function pauseCounter() {
    if (document.getElementById('pause').textContent === ' pause ') {
        document.getElementById('plus').disabled = true
        document.getElementById("minus").disabled = true
        document.getElementById("heart").disabled = true
        document.getElementById('submit').disabled = true
        document.getElementById('pause').innerText = ' resume '
        clearInterval(myTimeout)
    } else if (document.getElementById('pause').textContent = ' resume '){
        document.getElementById('pause').innerText = ' pause '
        myTimeout = setInterval(countBySecond, 1000)
        document.getElementById("plus").disabled = false
        document.getElementById("minus").disabled = false
        document.getElementById("heart").disabled = false
        document.getElementById('submit').disabled = false
    }
}

function commentSubmit(e) {
    e.preventDefault()
    console.log(e.target.input)
    const newComment = document.createElement('p')
    newComment.innerText = document.querySelector('#comment-input').value
    document.querySelector('#list').appendChild(newComment)

    document.querySelector('form#comment-form').reset()
}