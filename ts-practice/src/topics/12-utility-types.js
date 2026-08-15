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
console.log(updatedCar);
export {};
