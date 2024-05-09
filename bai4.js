function add() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let ketqua = num1 + num2;
    document.getElementById('ketqua').innerText = `ketqua: ${ketqua}`;
}

function subtract() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let ketqua = num1 - num2;
    document.getElementById('ketqua').innerText = `ketqua: ${ketqua}`;
}

function multiply() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let ketqua = num1 * num2;
    document.getElementById('ketqua').innerText = `ketqua: ${ketqua}`;
}

function divide() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('ketqua').innerText = "Cannot divide by zero!";
    } else {
        let ketqua = num1 / num2;
        document.getElementById('ketqua').innerText = `ketqua: ${ketqua}`;
    }
}

function squareRoot() {
    let num1 = parseFloat(document.getElementById('num1').value);
    if (num1 < 0) {
        document.getElementById('ketqua').innerText = "Invalid input for square root!";
    } else {
        let ketqua = Math.sqrt(num1);
        document.getElementById('ketqua').innerText = `ketqua: ${ketqua}`;
    }
}

function power() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let ketqua = Math.pow(num1, num2);
    document.getElementById('ketqua').innerText = `ketqua: ${ketqua}`;
}
