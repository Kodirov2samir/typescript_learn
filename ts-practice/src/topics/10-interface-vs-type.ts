//types are used to create literals and primitives
type Literal = "red" | "green";
type Primitive = number[];
//it is impossible to do that with interface

//to combine two interface we use extends
interface User {
  name: string;
  age: number;
}

interface UserInformation extends User {
  phone_number: string;
}

const fullUserInformation: UserInformation = {
  name: "Samir",
  age: 20,
  phone_number: "93659633",
};

//while in type we use intersection to do that
type Admin = {
  name: string;
  age: number;
};

type AdminFullInfo = Admin & {
  phone_number: string;
};
const fullAdminInfromation: AdminFullInfo = {
  name: "Alex",
  age: 23,
  phone_number: "9239243",
};

//extends works faster than intersection so it is prefered to use interface in this situation

//Also interfaces can have the same name, if they have they will be combined
interface OriginalInterface {
  hobbies: string[];
}

interface OriginalInterface {
  amount_of_family_members: number;
}
/*Ide shows us 
interface OriginalInterface {
    hobbies: string[];
    amount_of_family_members: number;
}
*/

//we also use types to create a tupple, tupples are arrays with teh fixed length and structure inside
type Tupple = [string, number, 5];
const tupple: Tupple = ["man", 20, 5];

//It is also prefered to use type over interface while creating functions
//*Reminder we create type functions not to repeat the code, and we can use it as an argument in function

type FnType = (a: number, b: string) => string;
const combineStringToANumber: FnType = (a, b) => {
  return a + b;
};
// console.log(combineStringToANumber(12,300));will be error
console.log(combineStringToANumber(12, "hello")); //12hello

//in interface it would look much bigger:
interface FnInt {
  (a: number, b: string): number;
}
