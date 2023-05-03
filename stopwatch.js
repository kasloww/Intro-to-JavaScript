let seconds = 0
let milliseconds = 0
let minutes = 0

let digits = document.getElementById('digits')
let makelapButton = document.getElementById("makelap")
let startButton = document.getElementById('start-btn')
makelapButton.disabled = true

let interval;

function start () {


startButton.disabled = true

makelapButton.disabled = false 
   
    interval = setInterval(function () {
        milliseconds = milliseconds + 10
        if (milliseconds >= 1000) {
            seconds = seconds + 1
            milliseconds = 0
        }
        if (seconds >= 60) {
            minutes += 1
            seconds = 0
        }
        digits.innerHTML = minutes + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds / 10
    }, 10)
}

function stop () {
    startButton.disabled = false
    makelapButton.disabled = true
    clearInterval(interval)
}

let addlaps = document.getElementById('laps')

function reset () {
    makelapButton.disabled = true
    stop()
    seconds = 0
    milliseconds = 0
    minutes = 0
    digits.innerHTML = '00:00:00'
    laps.innerHTML = ""
}

function makelap () {
    const node = document.createElement("li");
    node.innerHTML = String(minutes) + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds
    document.getElementById("laps").appendChild(node)
}