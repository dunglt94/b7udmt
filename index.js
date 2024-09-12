// phép cộng
function addition() {
    let first_no = +document.getElementById("first_no").value;
    let second_no = +document.getElementById("second_no").value;
    let add = first_no + second_no;
    document.getElementById("result").innerText = `Result: ${add}`;
}
