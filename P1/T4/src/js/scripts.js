document.getElementById('forma').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);


    for (let i = 1; i <= 5; i++) {
        switch (i) {
                case 1:
                    alert(`Iteración 1: La suma es ${num1 + num2}`);
                    break;
                case 2:
                    alert(`Iteración 2: La resta es ${num1 - num2}`);
                    break;
                case 3:
                    alert(`Iteración 3: La multiplicación es ${num1 * num2}`);
                    break;
                case 4:
                    if (num2 !== 0) {
                        alert(`Iteración 4: La división es ${num1 / num2}`);
                    } else {
                        alert("Iteración 4: No se puede dividir entre 0.");
                    }
                    break;
                case 5:
                    if (num2 !== 0) {
                        alert(`Iteración 5: El módulo es ${num1 % num2}`);
                    } else {
                        alert("Iteración 5: No se puede realizar módulo con 0.");
                    }
                    break;
            }
        }
});
