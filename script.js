var calcHistory = []; 

function calculate() {
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    var op = document.getElementById('operation').value;
    var errorEl = document.getElementById('error-msg');

    errorEl.textContent = '';

    if (n1 === '' || n2 === '') {
        errorEl.textContent = 'Ошибка: введите оба числа';
        return;
    }

    if (op === '/' && Number(n2) === 0) {
        errorEl.textContent = 'Ошибка: на ноль делить нельзя';
        return;
    }

    var a = Number(n1);
    var b = Number(n2);
    var result;

    if (op === '+') result = a + b;
    if (op === '-') result = a - b;
    if (op === '*') result = a * b;
    if (op === '/') result = a / b;

    var line = a + ' ' + op + ' ' + b + ' = ' + result;
    
    calcHistory.push(line);

    showResults();
}

function showResults() {
    var block = document.getElementById('results');
    block.innerHTML = '';

    for (var i = 0; i < calcHistory.length; i++) {
        var p = document.createElement('p');
        p.textContent = calcHistory[i];
        p.className = 'result-item';
        
        if (i === calcHistory.length - 1) {
            p.classList.add('latest');
        } else {
            p.classList.add('old');
        }
        
        block.appendChild(p);
    }
}