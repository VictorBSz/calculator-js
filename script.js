const display = document.getElementById("display")
const displayResult = document.getElementById("result")
const clear = document.getElementById("clear")

clear.addEventListener("click", (e) => {display.textContent = ""; numbers = []})

document.getElementById("calc").addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (display.textContent == "The result will appear here") {
            display.textContent = ""
        }

        let pressed
        pressed = (e.target.innerText);

        if (pressed <= 9) {
            display.textContent += " " + pressed + " "
            console.log(typeof pressed)
            numbers.push(pressed)
        }
        else if (pressed == "=") {
            operate(numbers, operator)
        }
        else {
            display.textContent += pressed
            console.log(typeof pressed)
            operator = pressed
        }
    console.log(`numbers: ${numbers}; operator:${operator}`)
    }
});


//LOGIC
let num1
let operator
let num2
let numbers = []

function operate(numbers, operator) {
    switch(operator){
        case "+": 
            sum(numbers);
            break
        case "-": 
            subtract(numbers);
            break
        case "*": 
            multiply(numbers);
            break
        case "/": 
            divide(numbers)
            break
    }
}

function sum(arr) {
    let result = arr[0]
    for (let n of arr) {
        console.log(`${result} + ${n}`)
        result += parseInt(n)
    }
    console.log(result)
    displayResult.textContent = result
    return result
}

function subtract(arr) {
    let result = 0
    for (let n of arr) {
        result -= parseInt(n)
    }
    displayResult.textContent = result
    return result
}

function multiply(arr) {
    let result = 0
    for (let n of arr) {
        result *= parseInt(n)
    }
    displayResult.textContent = result
    return result
}

function divide(arr) {
    let result = 0
    for (let n of arr) {
        result /= parseInt(n)
    }
    displayResult.textContent = result
    return result
}