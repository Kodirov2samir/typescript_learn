//Asserts
//Basically asserts are used to create an error if the funstion gets the fuction that we didnt expect, and not to make narrwing inside the function

function assertString(item: unknown): asserts item is string {
  if (typeof item !== "string") {
    throw new Error("We expect only strings");
  }
}

function getStringAndAssert(item: unknown) {
  assertString(item);
  return item.toUpperCase; //ts know it is a string
}

/*
Коротко о главном
: string — это требование к вызывающему коду: "Передавай мне только строки, иначе код даже не скомпилируется".

asserts — это инструмент проверки неопределённых данных: "Я принимаю что угодно (unknown), сам проверю это в runtime и гарантирую TypeScript, что дальше это точно строка".
*/

//For assert functions it is preferable to use function declaration over arrow functions
//this is because when creating a arraow function we need to mention a type before = sigh: const arrowFunct:(obj:any) = asserts ...
//TypeScript processes function declarations during its initial setup phase, registering their signatures right away. Arrow functions are treated as variable assignments, which means TypeScript has to infer their types later when evaluating the right-hand side. Because assertions fundamentally alter how types flow through your code, attempting to infer asserts from a variable assignment creates a circular dependency in the compiler's type-checking process.

//it can works as a validator
interface User {
  name: string;
  age: number;
}

function assertUser(obj: any): asserts obj is User {
  if (!obj || typeof obj !== "object") {
    throw new Error("Object is expected");
  }
  if (typeof obj.name !== "string") {
    throw new Error("name should be a string");
  }
  if (typeof obj.age !== "number") {
    throw new Error("age should be a number");
  }
}

const upperCaseUserName = (item: any) => {
  assertUser(item);
  return item.name.toUpperCase();
};
const objBefore: User = {
  name: "samir",
  age: 20,
};
const objd = {
  name: "samir",
  age: "20",
};
console.log(upperCaseUserName(objBefore)); //SAMIR
// console.log(upperCaseUserName(objd)); //Error: age should be a number
