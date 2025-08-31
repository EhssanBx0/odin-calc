const add = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;

const operate = (operation, x, y) => operation(x,y);

const selectOperator = (event) => {
}

const operatorBtns = document.querySelector(".operatorBtns");
operatorBtns.addEventListener("click", selectOperator);