input.onButtonPressed(Button.A, function () {
    led.unplot(posX, posY)
    posX += -1
    if (posX < 0) {
        posX = 4
    }
    led.plot(posX, posY)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, posY)
    posX += 1
    if (posX > 4) {
        posX = 0
    }
    led.plot(posX, posY)
})
let posY = 0
let posX = 0
posX = 2
posY = 2
let direction = 1
led.plot(posX, posY)
basic.forever(function () {
    led.unplot(posX, posY)
    posY += direction
    led.plot(posX, posY)
    if (posY >= 4) {
        direction = -1
    } else if (posY <= 0) {
        direction = 1
    }
    basic.pause(1000)
})
