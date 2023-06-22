//  AND
// A   B  AND
// 1   1   1
// 1   0   0
// 0   1   0
// 0   0   0


// OR
// A   B   OR
// 1   1   1
// 1   0   1
// 0   1   1
// 0   0   0


// XOR - exclusively OR
// A   B   XOR
// 1   1   0
// 1   0   1
// 0   1   1
// 0   0   0


// SUM Y CARRY
// A     B   SUM(XOR)    CARRY(AND)
// 0     0      0             0
// 1     0``    1             0
// 0     1      1             0
// 1     1      0             1



//? OR
console.log(3 || 'orange'); //3
console.log('' || 'Orange');  //Orange
console.log(true || 0);  //true
console.log(undefined || null);  //null


//? AND -> si ambas son truties, imprime la SEGUNDA

console.log(0 && 'Orange');  //false
console.log('' && 'Orange');  //[empty string]
console.log(true && null);  //null
console.log('Apple' && 'Orange');  //Orange



//! Ejemplo de toma de decisiones
// function imprimeDos(a) {
//     if(a === 2) console.log('esDos');
// }


// function imprimeDos(a) {
//     a === 2 && console.log('esDos');
// }


function imprimeDos(a) {
    if(a !== 2) console.log('no es Dos');
}


imprimeDos(3);