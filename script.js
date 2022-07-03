import { ruswords } from "./words.js"
let gameMode = "singleplayer"
let playerInput = document.getElementById("playerInput")
let checkButton = document.getElementById("checkButton")
let newButton = document.getElementById("newButton")
let words = ["пистолет", "цель", "мясорубка", "дерево", "электрокофемолка", "длинношеее", "трансцендентный", "урегулирование", "переосвидетельствовать", "человеконенавистничество"]
let secretWord = ruswords[Math.floor(Math.random() * ruswords.length)]
let shifr = document.getElementById("shifr") 
let image = document.getElementById("image")
let title = document.getElementById("title")
let p = document.getElementById("pipi")
let imageNumber = 0;
let modal = document.getElementsByClassName("modal")[0]
let usedLetters = []
let wordModal = document.getElementById("wordModal")
let planet = "I don't know"
let wordButton = document.getElementById("wordButton")
let wordInput = document.getElementById("wordInput")
for (let i = 32; i < 1025; i = i * 2 ) {
    console.log(i);
}
shifr.innerHTML = "*".repeat(secretWord.length)
wordButton.onclick = function (event) {
    event.preventDefault();
    secretWord = wordInput.value
    wordInput.value = ""
    wordModal.style.transform = "translateY(-100%)"
    newGame()
}
modal.onclick = function () {
    console.log("окно закройся");
    modal.style.transform = "translateY(-100%)"
}
image.onclick = function () {

}
settings.onclick = function () {
    console.log("Настройки");
    modal.style.transform = "translateY(0)"
    console.log(planet);
}
multiPlayer.onclick = function (event) {
    title.innerHTML = "Виселица мультиплеер"
    gameMode = "multiplayer"
    console.log(gameMode);
    event.preventDefault();
    wordModal.style.transform = "translateY(0)"
}
Loner.onclick = function (event) {
    title.innerHTML = "Виселица"
    console.log("я играю один");
    event.preventDefault();
    gameMode = "singleplayer"
    modal.style.transform = "translateY(-100%)"
    secretWord = ruswords[Math.floor(Math.random() * ruswords.length)]
    newGame()
}
newButton.onclick = function () {
    if (gameMode == "singleplayer") {
        title.innerHTML = "Виселица"
        secretWord = ruswords[Math.floor(Math.random() * ruswords.length)]
    }
    else {
        title.innerHTML = "Виселица мультиплеер"
        wordModal.style.transform = "translateY(0)"
    }
    newGame()
    console.log(planet);
}
function newGame(){
    p.innerHTML = "Использованные буквы:"
    image.src = "hangman0.png"
    imageNumber = 0
    console.log(ruswords[Math.floor(Math.random() * ruswords.length)])
    shifr.innerHTML = "*".repeat(secretWord.length)
    usedLetters = []
    checkButton.disabled = false
}
checkButton.onclick = function (event) {
    // чтобы страница не обновлялсаь страница
    event.preventDefault();
    console.log(planet);
    if (playerInput.value != "") {
        title.innerHTML = "Мастер"
        if (usedLetters.includes(playerInput.value) == false) {
            usedLetters.push(playerInput.value)
            console.log(usedLetters);
            p.innerHTML = "Использованные буквы: " + usedLetters
            // title.innerHTML ="Виселица: "+playerInput.value
            if (secretWord.includes(playerInput.value)) {
                let newShifr = ""
                for (let i = 0; i < secretWord.length; i = i + 1) {
                    // console.log("Pro");
                    // console.log("fessional");
                    if (secretWord[i] == playerInput.value) {
                        newShifr = newShifr + secretWord[i]
                    }
                    else {
                        console.log(shifr.innerHTML);
                        newShifr = newShifr + shifr.innerHTML[i]
                    }
                }
                shifr.innerHTML = newShifr
                if (secretWord == shifr.innerHTML) {
                    console.log("Победа!");
                    title.innerHTML = "Победа!"
                    checkButton.disabled = true
                }
            }
            else {
                console.log("Неправильно!");
                imageNumber = imageNumber + 1
                image.src = "hangman" + imageNumber + ".png"
                if (imageNumber == 6) {
                    title.innerHTML = "Ты проиграл! Моё слово было " + secretWord + " Не расстраивайся!"
                    checkButton.disabled = true
                }
            }
            playerInput.value = ""
            playerInput.select()
        }

    }

}