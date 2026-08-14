// Topic: Type Assertion, typeof, keyof, ReturnType, and Optional Chaining
// This file collects TypeScript tools that help you reuse or override type information.
// Important: type assertion (`as`) only changes TypeScript's view of a value.
// It does not check or fix the real runtime value.
export function runTypeToolsExamples() {
    console.log("\nTopic 08: Type tools");
    // 1. Type assertion (`as`)
    // Use it when TypeScript cannot know something, but you know it.
    // Be careful: if the object is wrong, TypeScript will still trust your assertion.
    const assertedFromBackend = {
        name: "Samir",
        age: 20,
        why: "because",
    };
    console.log("Type assertion:", assertedFromBackend);
    // 2. Type annotation
    // This is better for objects you create yourself because TypeScript checks all fields.
    const annotatedObject = {
        name: "samir",
        age: 20,
        why: "20",
    };
    console.log("Type annotation:", annotatedObject);
    // 3. Generic helper with assertion
    // JSON.parse returns `any`, so this helper lets us choose the expected type.
    // In production, real validation is safer than trusting parsed JSON.
    const parsedItem = parseJson('{"name": "Samir", "age": 25, "why": "because"}');
    console.log("Parsed JSON:", parsedItem);
    // 4. keyof with Object.keys
    // Object.keys normally returns string[], but this helper keeps the real key names.
    const typedKeys = objectKeys(annotatedObject);
    console.log("Typed object keys:", typedKeys);
    // 5. `{}` vs object
    // `{}` accepts almost every value except null and undefined.
    // `object` is stricter and does not accept primitives like strings.
    const looseObjectType = "";
    console.log("Loose `{}` type:", looseObjectType);
    // 6. typeof
    // `typeof` can create a type from an existing value.
    const templateUser = {
        name: "Samir",
        age: 20,
        location: ["one", 1],
    };
    const anotherUser = {
        name: "Akbar",
        age: 21,
        location: ["two", 2],
    };
    console.log("typeof type:", anotherUser);
    // 7. typeof with functions
    // Here the `discount` parameter has exactly the same type as `calculateDiscount`.
    const productView = cardShow({
        name: "Samir",
        created: new Date("2009-05-15"),
        price: 200,
        percent: 20,
    }, calculateDiscount, (item, discountAmount) => ({
        data: item,
        discountPrice: discountAmount,
    }));
    console.log("typeof function parameter:", productView);
    // 8. ReturnType
    // ReturnType creates a type from whatever a function returns.
    // If the function return changes, the type updates automatically.
    const returnedUser = getUserReturn();
    displayUser(returnedUser);
    // 9. keyof
    // `keyof` restricts a key argument to real keys of the object.
    const keyExample = {
        name: "samir",
        age: 20,
    };
    console.log("keyof example:", getValueByKey(keyExample, "name"));
    // 10. Optional chaining and non-null assertion
    showOptionalAccess({
        name: "Samir",
    });
}
function parseJson(value) {
    return JSON.parse(value);
}
function objectKeys(obj) {
    return Object.keys(obj);
}
const calculateDiscount = (num, percent) => {
    return (percent / 100) * num;
};
const cardShow = (item, discount, builder) => {
    const discountAmount = discount(item.price, item.percent);
    return builder(item, discountAmount);
};
function getUserReturn() {
    return { id: 1, name: "Samir", isOnline: true };
}
function displayUser(user) {
    console.log("ReturnType example:", user.name);
}
function getValueByKey(item, key) {
    return item[key];
}
function showOptionalAccess(obj) {
    console.log("Optional object phone:", obj.personalInformation?.phone);
    console.log("Optional array item:", obj.getArray?.[0]);
    console.log("Optional method call:", obj.getAge?.());
    // `!` is the non-null assertion operator.
    // It hides TypeScript's warning, but it can still fail at runtime.
    // Use it only when you are truly sure the value exists.
    // Example:
    // obj.personalInformation!.phone;
}
