
// function that display the value 

function dis(val) {
    document.getElementById("result").value+=val
}

// function that evaluates the digit and return the result 
function solve() {
let x = document.getElementById("result").value
let y = eval(x)
document.getElementById("result").value = y
}

// function the clear all the display values
function clr() {
    document.getElementById("result").value = ""
}