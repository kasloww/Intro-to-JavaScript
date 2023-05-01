let seconds = 0
let milliseconds = 0
let minutes = 0

function start () {
    alert("You clicked the start button")

    setInterval(function () {
        console.log("Hi")
    }, 1000)
}

function stop () {
    alert("You clicked the stop button")
}

function reset () {
    alert("You clicked the reset button")
}