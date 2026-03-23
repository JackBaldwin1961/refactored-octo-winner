 function calculate(operation) {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            let resultText = '';

            if (isNaN(num1) || isNaN(num2)) {
                resultText = 'Please enter valid numbers in both fields.';
            } else {
              switch (operation) {
                case 'add':
                    resultText = `${num1} + ${num2} = ${num1 + num2}`;
                    break;
                case 'subtract':
                    resultText = `${num1} - ${num2} = ${num1 - num2}`;
                    break;
                case 'multiply':
                    resultText = `${num1} × ${num2} = ${num1 * num2}`;
                    break;  
                case 'divide':
                    if (num2 === 0) {
                        resultText = 'Error: Division by zero is not allowed.';
                    } else {
                        resultText = `${num1} ÷ ${num2} = ${num1 / num2}`;
                    }
                    break;
              }
            }

            document.getElementById('result').textContent = resultText;
        }

        function clearCalculator() {
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('result').textContent = 'Your answer will appear here';
        }