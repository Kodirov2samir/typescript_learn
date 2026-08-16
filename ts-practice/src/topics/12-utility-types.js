//TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally.
const updateCar = (car, fieldsToUpdate) => {
    return { ...car, ...fieldsToUpdate };
};
const currentCar = {
    color: "red",
    year: 2025,
};
const updatedCar = updateCar(currentCar, {
    year: 1990,
});
console.log(updatedCar); //{ color: 'red', year: 1990 }
const shop1 = {
    created_in: new Date("2020"),
    location_city: "Tashkent",
};
shop1.location_city = "Namangan"; //works perfectly
console.log(shop1); //{ created_in: 2020-01-01T00:00:00.000Z, location_city: 'Namangan' }
const shop2 = {
    created_in: new Date("19-01-2008"),
    location_city: "Moscow",
};
const objRec = {
    name: "samir",
    age: 20,
    height: 122, //height is required although it is optional
};
const todo = {
    title: "Clean room",
    completed: false,
};
//ReturnType<type> retuns a type of a function
function fnReturn(item) {
    return {
        name: item.name,
        age: item.age,
    };
}
const objFn = {
    name: "samir",
    age: 20,
};
//Parameters<Type> creates tuples from function parameters
const Params = function (name, size) {
    return;
};
//ConstructParameters<type> creates tuples from class constructors
class UserTup {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Use the extracted tuple type in a factory function
function createUser(...args) {
    return new UserTup(...args);
}
const userInstance = createUser("Alice", 30);
const lowToUp = "TOMATO"; //tomato will be an erorr
export {};
