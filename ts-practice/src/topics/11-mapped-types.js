// Topic: Mapped Types
// Mapped types create a new type by looping over the keys of another type.
// They are useful for making every field readonly, optional, required, or transformed.
export function runMappedTypesExamples() {
    console.log("\nTopic 11: Mapped types");
    const mappedUser = {
        name: "Samir",
        // `age` is optional here.
    };
    console.log("Readonly + optional mapped type:", mappedUser);
    const requiredMutableUser = {
        name: "Samir",
        age: 20,
    };
    requiredMutableUser.name = "Akbar";
    console.log("Required + mutable mapped type:", requiredMutableUser);
    const arrayLike = ["123", "456"];
    console.log("Array-like mapped type:", arrayLike);
    const carWithoutName = {
        year: 2025,
        // `name` is removed from this type.
    };
    console.log("Key remapping with Exclude:", carWithoutName);
}
