let first_ele = document.getElementById("first_no");
let second_ele = document.getElementById("second_no");
let showresult = document.getElementById("showresult")
// Phép cộng
function addition() {
    let a = +first_ele.value;
    let b = +second_ele.value;
    let result = a + b;
    showresult.innerText = `Result: ${result}`;
}
// Phép trừ
function subtraction() {
    let a = +first_ele.value;
    let b = +second_ele.value;
    let result = a - b;
    showresult.innerText = `Result: ${result}`;
}// Phép nhân
function multiplication() {
    let a = +first_ele.value;
    let b = +second_ele.value;
    let result = a * b;
    showresult.innerText = `Result: ${result}`;
}// Phép chia
function division() {
    let a = +first_ele.value;
    let b = +second_ele.value;
    let result = a / b;
    showresult.innerText = `Result: ${result}`;
}