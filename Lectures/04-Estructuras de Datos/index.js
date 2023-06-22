//FUNCIONES RECURSIVAS
function cuentaRegresiva(number, count) {
    if (number > 0) {
        cuentaRegresiva(number - 1);
    }
    return number;
}

console.log(cuentaRegresiva(10));


const comunidad = [
    'Aragorn',
    'Frodo',
    'Sam',
    'Pippin',
    'Merry',
    'Legolas',
    'Gandalf',
    'Boromir',
    'Gimli'
];  

function imprimePersonajes() {
    for (let i = 0; i < comunidad.length; i++) {
        console.log(comunidad[i]);
    }

    for (let miembro of comunidad) {
        console.log(miembro);
    }

    comunidad.forEach((miembro) => {
        console.log(miembro);
    });

    comunidad.map((miembro) => {
        console.log(miembro);
    });
};

function imprimeRecursiva() {
    if (comunidad.length) {
        let miembro = comunidad.shift();

        console.log(miembro);
        console.log(comunidad);
        imprimeRecursiva(comunidad);
    }
}

imprimeRecursiva(comunidad);




function sumaArreglo(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        const primerNumero = arr[0];
        const restoDelArreglo = arr.slice(1);

        return primerNumero + sumaArreglo(restoDelArreglo);
    };
};


array = [3, 4, 2, 3, 1, 5];
console.log(sumaArreglo(array));