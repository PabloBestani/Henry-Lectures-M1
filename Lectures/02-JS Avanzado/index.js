// const instructor = {
//     nombre: 'Gama',
//     mascota: 'Bartolomiau',

//     describir: function() {
//         console.log(`Soy ${this.nombre} y tengo un 
//         gato llamado ${this.mascota}`);
//     }
// }


// const instructorOtro = {       
//     nombre: 'Toni',
//     mascota: 'Chimuelo',

//     describir: function() {
//         console.log(`Soy ${this.nombre} y tengo un 
//         gato llamado ${this.mascota}`);
//     }
// }
// instructor.describir();
// instructorOtro.describir();


//COERCION DE DATOS  --> conversion automatica de tipado

// console.log('yo soy gama y tengo ' + 35 + ' anos'); //yo soy gama y tengo 35 anos  --lo concateno
// console.log('23' + 3); //233   --concateno los datos
// console.log('23' - 3); //20   --hizo la resta
// console.log('gama' - 2); //NaN  --es un tipo de dato!
// console.log(3 + '23'); //323 --lo concatena
// console.log('34' > 1); //true   --comparo los nums
// console.log(6 / '2'); //3



// //CONVERSION DE DATOS --> el cambio lo hago yo manualmente

// const fechaDeNacimiento = '1987';

// console.log(typeof fechaDeNacimiento);  //string
// console.log(typeof Number(fechaDeNacimiento));  //number
// console.log(fechaDeNacimiento == 1987);  //true  --hizo una coercion
// console.log(fechaDeNacimiento === 1987);  //false   --sin coercion


// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//          return this.fullname;
//       },
//    },
// };

// console.log(obj.prop.getFullname());  //'Aurelio De Rosa'

// var test = obj.prop.getFullname;

// console.log(test());  //'Aurelio De Rosa'
