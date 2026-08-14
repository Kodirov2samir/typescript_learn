// Topic: Generics and Conditional Types
// Generics are type parameters.
// They let you keep type safety while reusing the same type or function.
// Conditional types choose one type or another using `extends`.
export function runGenericExamples() {
    // Generics are type parameters.
    // They let one type or function work with many different data shapes.
    const response = {
        requestId: "13j2bjedb3jbdj4f",
        data: {
            username: "samir",
        },
    };
    console.log("Generic API response:", response);
    // Generic functions can return the same type they receive.
    const car = keepCarShape({
        brandName: "BMW",
        year: 2008,
        color: "purple",
    });
    console.log("Generic constraint:", car);
    // Conditional types choose a type by checking another type.
    const stringCheck = true;
    console.log("Conditional type:", stringCheck);
}
const keepCarShape = (item) => {
    return item;
};
