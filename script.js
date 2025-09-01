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
    result: false,
    "add": add,
    "subtract": subtract,
    "multiply": multiply,
    "divide": divide,
    newCalc: true
}

const display = document.querySelector("#display");
const messageDisplay = document.querySelector(".messageDisplay");

const selectOperator = event => {
    if (!event.target.matches(".btn")) return

    if (event.target.matches(".add, .subtract, .divide, .multiply")) {
        console.log(event.target.dataset.operation);
        calcState.firstNumber = Number(display.textContent);
        display.textContent = "";
        calcState.operation = event.target.dataset.operation;
    }

    if (event.target.matches(".equal")){
        messageDisplay.textContent = ""
        calcState.secondNumber = Number(display.textContent);
        let result = operate(calcState[calcState.operation], calcState.firstNumber, calcState.secondNumber);
        if (calcState.secondNumber === 0 && calcState.operation === "divide")  {
            messageDisplay.textContent = "Error! You can't divide by zero";
            display.textContent = "";
            return            
        }
        calcState.result = result;
        display.textContent = calcState.result;
        calcState.firstNumber = 0;
        calcState.secondNumber = 0;
        calcState.decimalActive = false;
        calcState.operation = false;
        calcState.newCalc = true;
    }
}
const operatorBtns = document.querySelector(".operatorBtns");
operatorBtns.addEventListener("click", selectOperator);

const selectDigit = event => {
    if (!event.target.matches(".number, .decimal")) return
    if (calcState.decimalActive && event.target.dataset.operation === "decimal") return
    
    if(calcState.newCalc) {
        display.textContent = "";
        calcState.newCalc = false
    }

    display.textContent += event.target.dataset.number;
    if(event.target.dataset.operation === "decimal") calcState.decimalActive = true;
}

const numberBtns = document.querySelector(".numberBtns");
numberBtns.addEventListener("click", selectDigit)