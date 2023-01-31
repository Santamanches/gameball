let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__box'),
    word = document.querySelector('.word'),
    score = 0,
    time = 0,
    interval = 0,
    seconds = 0;

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0;
        clearInterval(interval)
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
        start()
    }
})

box.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})



function start() {
    interval =  setInterval(() => decrease(),1000)
    createBall()
}

function decrease() {
    if(time == 0) {
        endGame()
    }else {
        let currentTime = --time
        seconds++
        if(currentTime < 10) {
            currentTime = '0' + currentTime
        }
        word.innerHTML = 'Осталось: ' + currentTime + ' секунд...'
    }
}

function endGame() {
    box.innerHTML = `<h2 class="result">Вы набрали ${score} очков за ${seconds} секунд!</h2>`
}

function createBall() {
    let ball = document.createElement('div')
    let size = random(40,100)
    let cor = box.getBoundingClientRect();
    let x = random(0, cor.width - size)
    let y = random(0, cor.height - size)
    let color = random(1,500)
    let color2 = random(1,500)
    let color3 = random(1,500)
    let shape = random(0,3)
    
    
    ball.classList.add('ball')
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.left = x + 'px'
    ball.style.top = y + 'px'
    ball.style.background = 'rgb('+ color +',' + color2 + ',' + color3 + ')'
    ball.style.transform = 'rotate' + '(' + color + 'deg)'
    if(shape > 1) {
        ball.style.borderRadius = 50 + '%'
    }else if(shape < 1){
        ball.style.borderRadius = 0 + 'px'
    }
    
    box.append(ball)
    
}

function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
