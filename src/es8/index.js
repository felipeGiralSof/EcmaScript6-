const data = {
  frontend: 'oscar',
  backend: 'felipe',
  design: 'ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
///////////////////////////////////////////////////////////////////////////////////////////////
const data = {
  frontend: 'oscar',
  backend: 'felipe',
  design: 'ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);
///////////////////////////////////////////////////////////////////////////////////////////////
const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(12, ' ------'));
console.log('food'.padEnd(12, ' ------'));

const obj = {
  namew: 'felipe',
}
///////////////////////////////////////////////////////////////////////////////////////////////
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 10000)
      : reject(new Error('Test Error'));
  })
};
const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunction();