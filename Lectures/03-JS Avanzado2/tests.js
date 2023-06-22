// Importa o copia la función "factorialFunction" aquí

function calcular(n) {
    if (n === 0 || n === 1) return 1;
    return n * calcular(n - 1);
  };
  
  
  function factorialFunction() {
    const memoria = {};
    const cachedFactorial = function(x) {
      // Implementa la lógica para calcular el factorial de un número "x"
      if (memoria[x]) {
        return memoria[x];
      } else {
        var resultado = calcular(x);
        memoria[x] = resultado;
        return resultado;
      };
    };
    
    // Usa la función "cachedFactorial" para obtener el resultado
    // del factorial de "n" sin tener que calcularlo nuevamente si ya se había calculado antes
    return cachedFactorial;
  };
  
  const dalequedale = factorialFunction();
// Define una función para comparar dos valores y verificar que sean iguales
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log(`PASSED [${testName}]`);
    } else {
      console.log(`FAILED [${testName}]. Expected "${expected}", but got "${actual}"`);
    }
  }
  
  // Prueba que la función factorialFunction calcule correctamente el factorial de un número
  const cachedFactorial = factorialFunction();
  
  assertEqual(cachedFactorial(0), 1, 'Debe retornar 1 para el factorial de 0');
  assertEqual(cachedFactorial(1), 1, 'Debe retornar 1 para el factorial de 1');
  assertEqual(cachedFactorial(5), 120, 'Debe retornar 120 para el factorial de 5');
  assertEqual(cachedFactorial(7), 5040, 'Debe retornar 5040 para el factorial de 7');
  assertEqual(cachedFactorial(10), 3628800, 'Debe retornar 3628800 para el factorial de 10');