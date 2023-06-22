//CLOSURES
var crearFuncion = function() {
    var arreglo = [];

    for (var i = 0; i < 3; i++) {
        arreglo.push(
            function () {
                console.log(i);
            }
        );
    }
    return arreglo;
};

var arr = crearFuncion();

arr[0]();
arr[1]();
arr[2]();


//-----------------



//METODOS DE CONTEXTO: CALL, APPLY, BIND




const griffindor = {
    casa: 'Griffindor',
    ubicacion: 'Torre del castillo',
    alumnos: [],

    sombrero(nombre, apellido) {
        console.log(`${nombre} ${apellido} has sido asignado a ${this.casa}
        y tu sala comun se encuentra en ${this.ubicacion}`);
        this.alumnos.push({alumno: `${nombre} ${apellido}`});
    }
};

griffindor.sombrero('Harry', 'Potter');
griffindor.sombrero('Hermione', 'Granger');

console.log(griffindor.alumnos);

const seleccionador = griffindor.sombrero;


const slytherin = {
    casa: 'Slytherin',
    ubicacion: 'La mazmorra del castillo',
    alumnos: [],
};





//CALL

//seleccionador('Draco', 'Malfoy');  ---NO FUNCA

seleccionador.call(slytherin, 'Draco', 'Malfoy');
console.log(slytherin.alumnos);



//APPLY ----usa arrays como segundo parametro

const dataAlumno = ['Ron', 'Weasley'];
//seleccionador.call(slytherin, dataAlumno); //NO FUNCA, TIRA UNDEFINED
seleccionador.apply(slytherin, dataAlumno);

//despues de ES6, se puede usar un spread operator para que call si funcione:
//seleccionador.call(slytherin, ...dataAlumno); 

console.log(slytherin.alumnos);





//BIND!!! ----crea una nueva funcion

const seleccionadorSlytherin = seleccionador.bind(slytherin, ...dataAlumno);
seleccionadorSlytherin(['Ron', 'Weasley']);
console.log(slytherin.alumnos);
console.log(slytherin);

const weasleys = ['Gynny', 'Percy'];

const seleccionWeasleys = seleccionador.bind(griffindor);

weasleys.forEach((elem) => {
    seleccionWeasleys(elem, 'Weasley')
});

console.log(griffindor);
