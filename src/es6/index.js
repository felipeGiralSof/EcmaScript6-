//Default Params y Concatenacion
//antes
function newFunction(name, age, country) {
  var name = name || "andres";
  var age = age || 23;
  var country = country || 'MX';
  console.log(name, age, country);
}
//ahora esmaScript6
function newFunction2(name = 'felipe', age = 23, country = "col") {
  console.log(name, age, country);
}
newFunction2();
newFunction2("carlos", 33, "eu");
////////////////////////////////////////////////////////////////
//antes
let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//ahora Template Litera esmaScript6
let epicPhrase2 = `${hello} ${world}`  //comillas francesas
console.log(epicPhrase2);
////////////////////////////////////////////////////////////////
//antes
let lorem = "hola mundo gracias diosito por este dia que ya paso\n"
  + "y la noche que nos regala Amen.";
console.log(lorem);

//esmaScript6
let lorem2 = `Buenos Dias Diosito 
Gracias por esta noche que no regalas`;
console.log(lorem2);
////////////////////////////////////////////////////////////////
let person = {
  'name': 'felipe',
  'age': 23,
  'country': 'col'
};
console.log(person.name, person.age);
//esmaScript6
let { name, age, country } = person;
console.log(name, age, country);
////////////////////////////////////////////////////////////////
let team1 = ['julian', 'camilo', 'rolando'];
let team2 = ['rosalba', 'valeria', 'lupita'];

let education = ['david', ...team1, ...team2];
console.log(education);
////////////////////////////////////////////////////////////////
{
  var globalVar = "Global Var"; //el var se manera de manera global
}

{
  let globalLet = 'Global Let'; // el let se maneja de manera local en el bloque de codigo
  console.log(globalLet);
}
console.log(globalVar);
////////////////////////////////////////////////////////////////
let nombre = "andres";
let age = 23;
//es5
obj = { nombre: nombre, age: age };
console.log(obj);
//es6
obj2 = { nombre, age };
console.log(obj2);
////////////////////////////////////////////////////////////////
const names = [
  { name: 'felipe', age: 23 },
  { name: 'valentina', age: 21 }
];

let listOfNames = names.map(
  function (item) {
    console.log(item.nombre);
  }
);
////////////////////////////////////////////////////////////////
//arrow functions 
let listOfNames2 = names.map(item => console.log(item.age));
////////////////////////////////////////////////////////////////
const listOfNames3 = (name, age, country) => {
  console.log(`hola me llamo ${name} mucho gusto tengo ${age} años y soy de nacionalidad ${country}`);
}
listOfNames3('felipe', 23, 'col');
////////////////////////////////////////////////////////////////
const listOfNames4 = name => {
  console.log(`mi nombre es ${name}`);
}
listOfNames4('andres');
////////////////////////////////////////////////////////////////
const square = num => console.log(num * num);
square(5);
////////////////////////////////////////////////////////////////
//Promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('hey!');
    } else {
      reject('upss!!');
    }
  });
}
helloPromise()
  .then(Response => console.log(Response))
  .catch(error => console.log(error));
////////////////////////////////////////////////////////////////
//clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(2, 2));
////////////////////////////////////////////////////////////////
//import
import { hello } from './module';
hello();
////////////////////////////////////////////////////////////////
//genereitors
function* helloWorld() {
  if (true) {
    yield 'Helo, ';
  }
  if (true) {
    yield 'World';
  }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);



