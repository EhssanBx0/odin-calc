const add = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;

const operate = (operation, x, y) => operation(x,y);

const calcState = {
    firstNumber: 0,
    secondNumber: 0,
    decimalActive: false,
    operation: false,
    result: false
}

const display = document.querySelector("#display");

const selectOperator = event => {
}
const operatorBtns = document.querySelector(".operatorBtns");
operatorBtns.addEventListener("click", selectOperator);

const selectDigit = event => {
    if (!event.target.matches(".number, .decimal")) return
    if (calcState.decimalActive && event.target.dataset.operation === "decimal") return
    
    display.textContent += event.target.dataset.number;
    if(event.target.dataset.operation === "decimal") calcState.decimalActive = true;
}


const numberBtns = document.querySelector(".numberBtns");
numberBtns.addEventListener("click", selectDigit)