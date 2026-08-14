// Topic: Interface vs Type
// Both `interface` and `type` can describe object shapes.
// Use `interface` often for object models that may be extended.
// Use `type` for unions, primitives, tuples, and function aliases.
export function runInterfaceVsTypeExamples() {
    console.log("\nTopic 10: Interface vs type");
    // Types can represent literal unions and primitive aliases.
    const color = "red";
    const numbers = [1, 2, 3];
    console.log("Type aliases:", color, numbers);
    const fullUserInformation = {
        name: "Samir",
        age: 20,
        phoneNumber: "93659633",
    };
    console.log("Interface extends:", fullUserInformation);
    const fullAdminInformation = {
        name: "Alex",
        age: 23,
        phoneNumber: "9239243",
    };
    console.log("Type intersection:", fullAdminInformation);
    const merged = {
        hobbies: ["coding", "football"],
        familyMembersCount: 4,
    };
    console.log("Interface merging:", merged);
    // Tuples are arrays with fixed length and fixed positions.
    const tuple = ["man", 20, 5];
    console.log("Tuple:", tuple);
    const combineStringToNumber = (a, b) => {
        return a + b;
    };
    console.log("Function type alias:", combineStringToNumber(12, "hello"));
    const interfaceFunction = (a, b) => {
        return `${a}-${b}`;
    };
    console.log("Interface function:", interfaceFunction(12, "hello"));
}
