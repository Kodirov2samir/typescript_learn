//Mapped types are used to create type with the same fileds as in interface/type but that differs in readonly/optional/types:
interface User {
  name: string;
  age: 20;
}
//for mapped only type. not interface
type UserMapped<T> = {
  readonly [key in keyof T]?: T[key];
};
const mappedUser: UserMapped<User> = {
  name: "Samir",
  //age is optionl
};

console.log(mappedUser); //{name:"Samir"}

//we can also cancel readonly and optional by putting - before it

type UserMappedModified<T> = {
  -readonly [key in keyof T]-?: T[key];
};
const mappedMOdifiedUser: UserMappedModified<User> = {
  name: "Samir",
  age: 20, //age is required
};

type ArrayAnalog<T> = {
  [K in number]: T;
};

const array: ArrayAnalog<string> = ["123", "123"]; //we cant take values in array oter that string
//it works because on default all the arrays have keys(index) amd looks like this:
/**
 const arrayAsObject = {
  0: "apple",
  1: "banana"
};
 */
//if the key was string we would create an object instead of array
console.log(array); //["123", "123"]

//While creting a mapped type to exclude certain field we can use Type as Exclude<key, "key">

interface CarColor {
  color: string;
  name: string;
}
interface CarYear {
  year: number;
  name: string;
}
interface CarCountry {
  country: string;
  name: string;
}

type WithoutName<T> = {
  [key in keyof T as Exclude<key, "name">]: T[key];
};

const withoutnameCar: WithoutName<CarYear> = {
  year: 2025,
  //no name
};
