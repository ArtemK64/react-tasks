let input = document.getElementById("input");
let history = document.getElementById("history");

function addToInput(value) {
    input.value += value;
}

function calculate() {
    let expression = input.value;
    let result = eval(expression);
    addToHistory(expression + " = " + result);
    input.value = result;
}

function addToHistory(value) {
    let p = document.createElement("p");
    p.innerText = value;
    history.appendChild(p);
}