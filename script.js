const display = document.getElementById("display")
const displayResult = document.getElementById("result")
const clear = document.getElementById("clear")


clear.addEventListener("click", (e) => (clearVar()))

document.getElementById("calc").addEventListener("click", (e) => {
    if (e.target.classList == "input") {
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
            if (number == "") {     // Outra condicional para evitar o push de um number vazio, otimizavel
            number = ""
            operator = pressed
            display.textContent += ` ${pressed} `
            console.log(typeof pressed)
            } 
            else {
            numbers.push(number)
            number = ""
            operator.push(pressed)
            display.textContent += ` ${pressed} `
            console.log(typeof pressed)
            }
        }
    console.log(`numbers: ${numbers}; operator:${operator}`)
    }
});


//LOGIC
let operator = []
let numbers = []
let number = ""
let pressed
let result = 0

function clearVar() {
    display.textContent = ""; 
    number = ""; 
    numbers = []; 
    pressed = ""; 
    operator = []; 
    result = 0;
}

function operate(numbers, operator) {
    if (result == 0){
        result = parseFloat(numbers[0])
    }
    for (let num = 0; num < numbers.length; num++) {
        switch(operator[num]){
            case "+": 
                result += parseFloat(numbers[num+1])
                console.log(result)
                break
            case "-": 
                result -= parseFloat(numbers[num+1])
                console.log(result)
                break
            case "*": 
                result *= parseFloat(numbers[num+1])
                console.log(result)
                break
            case "/": 
                result /= parseFloat(numbers[num+1])
                console.log(result)
                break
        }
    }
    displayResult.textContent = result;
    return result;
}

function sum(arr) {
    result += arr[num + 1]
    console.log(result)
    displayResult.textContent = result
    return result
}

function subtract(arr) {
    let result = parseInt(arr[0])
    for (let n = 1; n < arr.length; n++) {
        console.log(`${result} - ${arr[n]}`)
        result -= parseInt(arr[n])
    }
    console.log(result)
    displayResult.textContent = result
    return result
}

function multiply(arr) {
    let result = parseInt(arr[0])
    for (let n = 1; n < arr.length; n++) {
        console.log(`${result} * ${arr[n]}`)
        result *= parseInt(arr[n])
    }
    console.log(result)
    displayResult.textContent = result
    return result
}

function divide(arr) {
    let result = parseInt(arr[0])
    for (let n = 1; n < arr.length; n++) {
        console.log(`${result} / ${arr[n]}`)
        result /= parseInt(arr[n])
    }
    console.log(result)
    displayResult.textContent = result
    return result
}