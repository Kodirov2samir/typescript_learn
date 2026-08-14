// Topic: Structural Typing
// TypeScript compares types by shape, not by type name.
// If an object has the required properties, it can be used as that type.
export function runStructuralTypingExamples() {
    // TypeScript uses structural typing.
    // If two values have the required shape, their type names do not need to match.
    const currentUser = { id: "USR-101", name: "Alice" };
    const activeCustomer = currentUser;
    console.log("Structural typing:", activeCustomer);
    printId(currentUser);
    // A subtype has everything the parent type needs, plus extra fields.
    const employee = { name: "Samir", role: "Frontend developer" };
    const namedEntity = employee;
    console.log("Subtype assigned to supertype:", namedEntity);
    // const onlyNamed: NamedEntity = { name: "Samir" };
    // const employeeAgain: Employee = onlyNamed;
    // Error: Employee also requires the `role` field.
}
function printId(value) {
    console.log("ID:", value.id);
}
