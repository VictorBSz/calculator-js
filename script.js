const display = document.getElementById("display")
const displayResult = document.getElementById("result")
const clear = document.getElementById("clear")


clear.addEventListener("click", (e) => {display.textContent = ""; numbers = []; pressed = ""})

document.getElementById("calc").addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (display.textContent == "The result will appear here") {
            display.textContent = ""
        }

        console.log(`${numbers}`)
        pressed = (e.target.innerText);

        if (pressed <= 9) {
            display.textContent += pressed
            number += pressed
        }
        else if (pressed == "=") {
            numbers.push(number)
            number = ""
            operate(numbers, operator)
        }
        else {
            if (number == "") {
            number = ""
            operator = pressed
            display.textContent += ` ${pressed} `
            console.log(typeof pressed)
            } 
            else {
            numbers.push(number)
            number = ""
            operator = pressed
            display.textContent += ` ${pressed} `
            console.log(typeof pressed)
            }
        }
    console.log(`numbers: ${numbers}; operator:${operator}`)
    }
});


//LOGIC
let num1
let operator
let num2
let numbers = []
let number = ""
let pressed

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
    let result = parseInt(arr[0])
    for (let n = 1; n < arr.length; n++) {
        console.log(`${result} + ${arr[n]}`)
        result += parseInt(arr[n])
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