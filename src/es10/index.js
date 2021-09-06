let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(3));

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

let hello = '    hello world';
console.log(hello);
console.log(hello.trimStart()); //trimStart elimina los espacios imnecesarios al principio del texto

let hello = 'hello world      ';
console.log(hello);
console.log(hello.trimEnd());//trimEnd elimina los espacios imnecesarios al final del texto

try {

} catch {
  error
}

let entries = [["name", "oscar"], ["age", 23]];
console.log(Object.fromEntries(entries)); //convierte un array en un objeto construido con la clave valor.

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);