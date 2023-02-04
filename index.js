const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/" ];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let passOne = document.getElementById('passOne-el')
let passTwo = document.getElementById('passTwo-el')
let symbolsEl = document.getElementById('toggleSymbols-el')
let numbersEl = document.getElementById('toggleNumbers-el')
let symbolsEnabled = true
let numbersEnabled = true
let basicArray = characters
let lengthPass = 15



function randomPass (array=basicArray) { 
    let pass = '';
    while (pass.length !== lengthPass) {
        let index = Math.floor(Math.random() * array.length)
        pass += array[index]
    }
    return pass
}

function toggleSymbols () {
    if (symbolsEnabled && numbersEnabled){
        basicArray = letters.concat(numbers)
        symbolsEl.textContent = 'Symbols OFF'
        symbolsEnabled = false;
    } else if (symbolsEnabled && !numbersEnabled) {
        basicArray = letters
        symbolsEl.textContent = 'Symbols OFF'
        symbolsEnabled = false;
    } else if (!symbolsEnabled && !numbersEnabled) {
        basicArray = letters.concat(symbols)
        symbolsEl.textContent = 'Symbols ON'
        symbolsEnabled = true;
    } else if (!symbolsEnabled && numbersEnabled){
        basicArray = characters
        symbolsEl.textContent = 'Symbols ON'
        symbolsEnabled = true;
    }
}

function toggleNumbers () {
    if (numbersEnabled && symbolsEnabled ){
        basicArray = letters.concat(symbols)
        numbersEl.textContent = 'Numbers OFF'
        numbersEnabled = false;
    } else if (numbersEnabled && !symbolsEnabled) {
        basicArray = letters
        numbersEl.textContent = 'Numbers OFF'
        numbersEnabled = false;
    } else if (!numbersEnabled && !symbolsEnabled) {
        basicArray = letters.concat(numbers)
        numbersEl.textContent = 'Numbers ON'
        numbersEnabled = true;
    } else if (!numbersEnabled && symbolsEnabled){
        basicArray = characters
        numbersEl.textContent = 'Numbers ON'
        numbersEnabled = true;
    }
}

function generate() {    
    passOne.textContent = randomPass()
    passTwo.textContent = randomPass() 
}

function copyOne(element) {
    let pass = document.getElementById(element)
    let text = pass.innerText
    let textArea = document.createElement('textarea')
    textArea.width = '1px'
    textArea.height = '1px'
    textArea.background = 'transparents'
    textArea.value = text
    document.body.append(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)

    alert("Copied the password: " + text)
}

