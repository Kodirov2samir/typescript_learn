// Topic: Special Types: any, unknown, never, and void
// `any` removes type safety.
// `unknown` keeps type safety until you check the value.
// `never` means a value should be impossible.
// `void` means a function returns no useful value.
var ExhaustiveStatus;
(function (ExhaustiveStatus) {
    ExhaustiveStatus[ExhaustiveStatus["First"] = 0] = "First";
    ExhaustiveStatus[ExhaustiveStatus["Second"] = 1] = "Second";
    ExhaustiveStatus[ExhaustiveStatus["Third"] = 2] = "Third";
})(ExhaustiveStatus || (ExhaustiveStatus = {}));
export function runSpecialTypesExamples() {
    // `any` disables type safety. Use it rarely.
    let unsafeValue;
    unsafeValue = "string";
    unsafeValue = 20;
    unsafeValue = false;
    unsafeValue = {};
    unsafeValue = [];
    console.log("Any example:", unsafeValue);
    // `unknown` is safer than `any`.
    // You must narrow the type before using it as a specific type.
    printUnknown("hello");
    printUnknown([1, 2, 3]);
    // `never` represents a value that should never exist.
    // It is useful for exhaustive checks.
    console.log("Never/exhaustive example:", getStatusCode(ExhaustiveStatus.Second));
    // `void` means a function does not return a useful value.
    logSavedUsername("Samir");
}
function printUnknown(data) {
    if (typeof data === "string") {
        console.log("Unknown narrowed to string:", data.toUpperCase());
    }
    if (Array.isArray(data)) {
        console.log("Unknown narrowed to array:", data.length);
    }
}
function getStatusCode(value) {
    switch (value) {
        case ExhaustiveStatus.First:
            return 1;
        case ExhaustiveStatus.Second:
            return 2;
        case ExhaustiveStatus.Third:
            return 3;
        default: {
            const exhaustiveCheck = value;
            return exhaustiveCheck;
        }
    }
}
function logSavedUsername(name) {
    console.log("Saved username:", name);
}
