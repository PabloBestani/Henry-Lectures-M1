// Importa la función "factorialFunction" del archivo "factorial.js"
const factorialFunction = require('./factorial');

// Usa la función "factorialFunction" para calcular el factorial de un número
const cachedFactorial = factorialFunction();

console.log(cachedFactorial(5)); // Debe imprimir "120"



/*Se te pide que escribas una función llamada "factorialFunction" que calcule el factorial
de un número entero positivo. Sin embargo, esta función debe recordar los resultados
de las operaciones anteriores, de manera que, al calcular el factorial de un número que ya ha sido
calculado previamente, se obtenga el resultado de la "memoria caché" sin tener que realizar los cálculos nuevamente.

Para lograr esto, debes implementar la función "cacheFunction" como en el ejercicio anterior,
y usarla dentro de la función "factorialFunction" para almacenar los resultados previos.

Aquí te dejo el código base para que lo completes:

Tu tarea es completar la función "factorialFunction" y la función de callback dentro
de "cacheFunction" para que el código funcione correctamente.
*/

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

