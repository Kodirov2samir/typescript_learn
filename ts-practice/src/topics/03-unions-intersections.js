export function runUnionsAndIntersectionsExamples() {
    // Union (`A | B`) means the value can match A, B, or a compatible combination.
    let unionValue;
    unionValue = "bread";
    unionValue = 20;
    const ageOnly = { age: 20 };
    const allFields = {
        firstname: "Samir",
        lastname: "Kodirov",
        age: 20,
    };
    console.log("Union examples:", unionValue, ageOnly, allFields);
    // Intersection (`A & B`) means the value must satisfy both types.
    const fullInfo = {
        firstname: "Samir",
        lastname: "Kodirov",
        age: 20,
    };
    console.log("Intersection example:", fullInfo);
    // A primitive intersection like `string & number` is impossible in real usage.
    // No value can be both a string and a number at the same time.
}
