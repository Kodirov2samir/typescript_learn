const fullUserInformation = {
    name: "Samir",
    age: 20,
    phone_number: "93659633",
};
const fullAdminInfromation = {
    name: "Alex",
    age: 23,
    phone_number: "9239243",
};
const tupple = ["man", 20, 5];
const combineStringToANumber = (a, b) => {
    return a + b;
};
// console.log(combineStringToANumber(12,300));will be error
console.log(combineStringToANumber(12, "hello")); //12hello
export {};
