let num1
let operator
let num2

function operate(num1, num2, operator) {
    numbers = [num1, num2]
    switch(operator){
        case "+": sum(numbers);
        case "-": subtract(numbers);
        case "*": multiply(numbers);
        case "/": divide(numbers)
    }
}

function sum(arr) {
    let result = 0
    for (let n in arr) {
        result += arr[n]
    }
    return result
}

function subtract(arr) {
    let result = 0
    for (let n in arr) {
        result -= arr[n]
    }
    return result
}

function multiply(arr) {
    let result = 0
    for (let n in arr) {
        result *= arr[n]
    }
    return result
}

function divide(arr) {
    let result = 0
    for (let n in arr) {
        result /= arr[n]
    }
    return result
}