//Asserts
//Basically asserts are used to create an error if the funstion gets the fuction that we didnt expect, and not to make narrwing inside the function
function assertString(item) {
    if (typeof item !== "string") {
        throw new Error("We expect only strings");
    }
}
function getStringAndAssert(item) {
    assertString(item);
    return item.toUpperCase; //ts know it is a string
}
function assertUser(obj) {
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
const upperCaseUserName = (item) => {
    assertUser(item);
    return item.name.toUpperCase();
};
const objBefore = {
    name: "samir",
    age: 20,
};
const objd = {
    name: "samir",
    age: "20",
};
console.log(upperCaseUserName(objBefore)); //SAMIR
export {};
// console.log(upperCaseUserName(objd)); //Error: age should be a number
