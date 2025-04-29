basic.forever(function () {
    if (input.temperature() > 25 && input.temperature() < 27) {
        basic.showIcon(IconNames.Chessboard)
        basic.clearScreen()
        basic.pause(1000)
        basic.showIcon(IconNames.Chessboard)
        music.playMelody("C5 B A G F E D C ", 200)
    }
    if (input.temperature() > 26 && input.temperature() < 28) {
        basic.showIcon(IconNames.Chessboard)
        basic.clearScreen()
        basic.pause(800)
        basic.showIcon(IconNames.Chessboard)
        music.playMelody("C5 B A G F E D C ", 400)
    }
    if (input.temperature() > 27 && input.temperature() < 29) {
        basic.showIcon(IconNames.Chessboard)
        basic.clearScreen()
        basic.pause(600)
        basic.showIcon(IconNames.Chessboard)
        music.playMelody("C5 B A G F E D C ", 600)
    }
    if (input.temperature() > 28 && input.temperature() < 31) {
        basic.showIcon(IconNames.Chessboard)
        basic.clearScreen()
        basic.pause(400)
        basic.showIcon(IconNames.Chessboard)
        music.playMelody("C5 B A G F E D C ", 800)
    }
    if (input.temperature() > 30) {
        basic.showIcon(IconNames.Chessboard)
        basic.clearScreen()
        basic.pause(200)
        basic.showIcon(IconNames.Chessboard)
        music.playMelody("C5 B A G F E D C ", 1000)
    }
    basic.clearScreen()
})
