function inferTestNameAge(arg) {
    const nameUp = arg.name.toUpperCase();
    const agePlus = arg.age + 10;
    return {
        name: nameUp,
        age: agePlus,
        location: arg.location,
    };
}
const userItem = inferTestNameAge({
    name: "samir",
    age: 20,
    location: ["Namangan", "Uzbekistan"],
});
console.log(userItem); //{ name: 'SAMIR', age: 30, location: [ 'Namangan', 'Uzbekistan' ] }
export {};
