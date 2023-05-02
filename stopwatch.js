let seconds = 0
let milliseconds = 0
let minutes = 0

let digits = document.getElementById('digits')

let startButton = document.getElementById('start-btn')

let interval;

function start () {
reset()

startButton.disabled = true

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
        digits.innerHTML = minutes + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds
    }, 10)
}

function stop () {
   clearInterval(interval)
}

function reset () {
    stop()
    seconds = 0
    milliseconds = 0
    minutes = 0
    digits.innerHTML = minutes + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds
}

function addlap () {
    const node = document.createElement("ol");
    const textnode = document.createTextNode();
    node.appendChild(textnode);
    document.getElementById("laps").appendChild(node);
}