let aquarium = document.getElementById("aquarium")

let turtle = new RealTurtle.default(aquarium, {autoStart: true})

function polygon(sides, size) {
    for (let i = 0; i < sides; i++) {
        turtle.forward(size)
        turtle.right(360 / sides)
    }
}

polygon(10, 10)

polygon(10)