// Topic: Basic Types, Inference, and Explicit Annotation
// This file shows how TypeScript decides variable types.
// Use inference when the type is obvious. Use explicit annotation when it makes code clearer.
export function runBasicTypesExamples() {
    // TypeScript is statically typed: it checks types while compiling.
    // JavaScript is dynamically typed: most type mistakes appear at runtime.
    // Inference: TypeScript detects the type from the assigned value.
    const inferredFruit = "lemon";
    // Explicit annotation: you write the type yourself.
    const explicitCount = 10;
    console.log("Basic types:", inferredFruit, explicitCount);
    // const wrongCount: number = "32";
    // TypeScript reports an error because "32" is a string, not a number.
}
