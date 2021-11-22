const previousDisplay = document.querySelector('.previous-display');
const currentDisplay = document.querySelector('.current-display');
const allClearButton = document.querySelector('.value--double');
const deleteButton = document.querySelector("#del");
const plusButton = document.querySelector('#plus');
const multiplyButton = document.querySelector('#multiply');
const minusButton = document.querySelector('#minus');
const divideButton = document.querySelector('#divide');
const equalsButton = document.querySelector('#bottomRight');
const decimalButton = document.querySelector('#bottomLeft');
const numberButtons = document.querySelectorAll('.value--number')
const functionButtons = document.querySelectorAll('.value--func')

// let currentNumber = document.querySelector('.current-display').innerHTML;
let currentNumber = '';
let previousNumber = '';
let currentOperation = '';
// let functionToggle = false;


// functions for display
let inputNumber = num => {
    if (num == ".") {
        currentNumber = parseFloat((currentNumber + "."));
    } else {
        num = num.toString();
        currentNumber = parseFloat((currentNumber + num));
        console.log(currentNumber);
        console.log(`Previous length is ${previousDisplay.innerHTML.length}`);
        console.log(`Current length is ${currentDisplay.innerHTML.length}`)
    }
}

const buttons = Array.from(numberButtons);
buttons.map(button => {
    button.addEventListener('click', (event) => {
        inputNumber(event.target.innerHTML);
        currentDisplay.innerHTML = currentNumber;
    })
})


// function for plus

console.log(previousDisplay.innerHTML.length);
plusButton.addEventListener('click', () => {
    if (previousDisplay.innerHTML.length === 0) {
        previousDisplay.innerHTML = currentDisplay.innerHTML;
        currentDisplay.innerHTML = '';
        currentNumber = '';
        console.log(`Previous length is ${previousDisplay.innerHTML.length}`);
        currentOperation = 'Plus';
        // plusButton.classList.toggle("value--pressed");
        // functionToggle = true;
    } else {
        previousDisplay.innerHTML = Number(previousDisplay.innerHTML) + Number(currentDisplay.innerHTML);
        currentDisplay.innerHTML = '';
        currentNumber = '';
    }
})

// function for minus
minusButton.addEventListener('click', () => {
    if (previousDisplay.innerHTML.length === 0) {
        previousDisplay.innerHTML = currentDisplay.innerHTML;
        currentDisplay.innerHTML = '';
        currentNumber = '';
        currentOperation = 'Minus';
    } else {
        previousDisplay.innerHTML = Number(previousDisplay.innerHTML) - Number(currentDisplay.innerHTML);
        currentDisplay.innerHTML = '';
        currentNumber = '';
    }
})



// function for multiply
multiplyButton.addEventListener('click', () => {
    if (previousDisplay.innerHTML.length === 0) {
        previousDisplay.innerHTML = currentDisplay.innerHTML;
        currentDisplay.innerHTML = '';
        currentNumber = '';
        currentOperation = 'Multiply';
    } else {
        previousDisplay.innerHTML = Number(previousDisplay.innerHTML) * Number(currentDisplay.innerHTML);
        currentDisplay.innerHTML = '';
        currentNumber = '';
    }
})

// function for divide
divideButton.addEventListener('click', () => {
    if (previousDisplay.innerHTML.length === 0) {
        previousDisplay.innerHTML = currentDisplay.innerHTML;
        currentDisplay.innerHTML = '';
        currentNumber = '';
        currentOperation = 'Divide';
    } else {
        previousDisplay.innerHTML = Number(previousDisplay.innerHTML) / Number(currentDisplay.innerHTML);
        currentDisplay.innerHTML = '';
        currentNumber = '';
    }
})



// function for decimal 

// function for delete
deleteButton.addEventListener("click", () => {
    currentDisplay.innerHTML = currentDisplay.innerHTML.slice(0, currentDisplay.innerHTML.length-1);
    currentNumber = currentNumber.slice(0, currentNumber.length-1);
    console.log(currentNumber);
})

// function for AC
allClearButton.addEventListener("click", () => {
    currentDisplay.innerHTML = '0';
    currentNumber = '';
    previousDisplay.innerHTML = '';
    previousNumber = '';
})

// function for equals
equalsButton.addEventListener('click', () => {
    switch (currentOperation){
        case 'Divide':
            currentDisplay.innerHTML = Number(previousDisplay.innerHTML) / Number(currentDisplay.innerHTML);
            previousDisplay.innerHTML = '';
            console.log(currentDisplay.innerHTML);
            currentOperation = '';
            break;
        case 'Multiply':
            currentDisplay.innerHTML = Number(previousDisplay.innerHTML) * Number(currentDisplay.innerHTML);
            previousDisplay.innerHTML = '';
            console.log(currentDisplay.innerHTML);
            currentOperation = '';
            break;
        case 'Plus':
            currentDisplay.innerHTML = Number(previousDisplay.innerHTML) + Number(currentDisplay.innerHTML);
            previousDisplay.innerHTML = '';
            console.log(currentDisplay.innerHTML);
            currentOperation = '';
            break;
        case 'Minus':
            currentDisplay.innerHTML = Number(previousDisplay.innerHTML) - Number(currentDisplay.innerHTML);
            previousDisplay.innerHTML = '';
            console.log(currentDisplay.innerHTML);
            break;
    }
})



        // console.log('clicked');
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.innerText);


// to-do
// toggle for function highlight
// support multiple operations before pressing equals
// DECIMALSSSS