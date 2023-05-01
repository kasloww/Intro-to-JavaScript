let seconds = 0
let milliseconds = 0
let minutes = 0

let digits = document.getElementById('digits')

let interval;

function start () {
reset()

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