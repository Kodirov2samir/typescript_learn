// Topic: Compound Types, Literal Types, and Template Literal Types
// Compound types describe objects and arrays.
// Literal types allow only exact values like "red" or 2.
// Template literal types build valid strings from smaller literal unions.
export function runCompoundAndLiteralExamples() {
    // Use `type` or `interface` to describe objects.
    // `?` marks an optional property.
    const user = {
        name: "Samir",
        age: 20,
        address: {
            coords: ["20", "21"],
        },
    };
    const users = [
        user,
        {
            name: "Akbar",
            age: 99,
            address: {
                city: "Namangan",
                coords: ["20", "22"],
            },
        },
    ];
    console.log("Compound type:", user);
    console.log("Array of objects:", users);
    console.log("Optional chaining on array item:", users[1]?.address.coords);
    // Literal types allow only exact values.
    const color = "red";
    const size = 2;
    console.log("Literal examples:", color, size);
    const sizeConfig = {
        size: 4,
    };
    printSize(sizeConfig.size);
    // Template literal types build allowed strings from smaller literal unions.
    const handler = "on-click-user";
    console.log("Template literal type:", handler);
}
function printSize(size) {
    console.log("Size:", size);
}
