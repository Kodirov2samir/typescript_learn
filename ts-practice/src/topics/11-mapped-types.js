const mappedUser = {
    name: "Samir",
    //age is optionl
};
console.log(mappedUser); //{name:"Samir"}
const mappedMOdifiedUser = {
    name: "Samir",
    age: 20, //age is required
};
const array = ["123", "123"]; //we cant take values in array oter that string
//it works because on default all the arrays have keys(index) amd looks like this:
/**
 const arrayAsObject = {
  0: "apple",
  1: "banana"
};
 */
//if the key was string we would create an object instead of array
console.log(array); //["123", "123"]
const withoutnameCar = {
    year: 2025,
    //no name
};
export {};
