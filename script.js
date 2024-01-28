function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        var expression = document.getElementById('display').value;
        // Replace sin, cos, tan, log with Math.sin, Math.cos, Math.tan, Math.log10
        expression = expression.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10');
        document.getElementById('display').value = eval(expression);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
