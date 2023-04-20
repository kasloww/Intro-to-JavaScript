let aquarium = document.getElementById("aquarium")

let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setSpeed(3)

turtle.setPosition(0, 0)
turtle.setFillStyle('skyblue')
turtle.beginPath()
for (let i = 0; i < 4; i++) {
    turtle.right(90)
    turtle.forward(300)
}
turtle.closePath()
turtle.fill()

turtle.setPosition(200, 50)

turtle.setFillStyle('brown')

turtle.beginPath()
turtle.right(90)
turtle.forward(70)
turtle.right(90)
turtle.forward(90)
turtle.right(90)
turtle.forward(70)
turtle.right(90)
turtle.forward(90)
turtle.closePath()
turtle.fill()

turtle.setFillStyle('black')

turtle.beginPath()
turtle.right(60)
turtle.forward(45)
turtle.right(66)
turtle.forward(40)
turtle.closePath()
turtle.fill()

turtle.setPosition(210, 60)

turtle.setFillStyle('white')

turtle.beginPath()
turtle.right(55)
turtle.forward(20)
turtle.left(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(20)
turtle.closePath()
turtle.fill()

turtle.setPosition(240, 60)

turtle.beginPath()
turtle.left(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(20)
turtle.closePath()
turtle.fill()

turtle.setPosition(250,100)

turtle.setFillStyle('beige')

turtle.beginPath()
turtle.forward(25)
turtle.left(90)
turtle.forward(40)
turtle.left(90)
turtle.forward(25)
turtle.left(90)
turtle.forward(40)
turtle.closePath()
turtle.fill()

turtle.setPosition(20, 30)

turtle.setFillStyle('yellow')

turtle.beginPath()
turtle.arc(20, 360)
turtle.closePath()
turtle.fill()

turtle.setPosition(0, 130)

turtle.setFillStyle('green')

turtle.beginPath()
turtle.right(90)
turtle.forward(310)
turtle.right(90)
turtle.forward(30)
turtle.right(90)
turtle.closePath()
turtle.fill()