// The `infer` keyword lets a conditional type capture part of another type.
// It is commonly used to extract an array element, promise value, tuple item,
// or function parameter. The generic function below uses regular type inference,
// but it does not use the `infer` keyword yet.
interface User {
  name: string;
  age: number;
  location: string[];
}
function inferTestNameAge<
  T extends { name: string; age: number; location: string[] },
>(arg: T): T {
  const nameUp = arg.name.toUpperCase();
  const agePlus = arg.age + 10;

  return {
    name: nameUp,
    age: agePlus,
    location: arg.location,
  } as T;
}

const userItem = inferTestNameAge<User>({
  name: "samir",
  age: 20,
  location: ["Namangan", "Uzbekistan"],
});

console.log(userItem); //{ name: 'SAMIR', age: 30, location: [ 'Namangan', 'Uzbekistan' ] }

// To extract a function's first parameter, describe the function shape and
// capture its parameter type as `U`. If `T` is not a matching function, return
// `never` because there is no parameter type to extract.
type Myparameter<T> = T extends (arg: infer U) => any ? U : never;

type InfType = Myparameter<typeof inferTestNameAge<User>>;
// `InfType` is now the same as `User`.
const item: InfType = {
  name: "samir",
  age: 20,
  location: ["defdw"],
};
// TypeScript's built-in `Parameters` utility performs the same extraction.
type paramOfFunction = Parameters<typeof inferTestNameAge>[0];
const paraOfFnObj: paramOfFunction = {
  name: "samie",
  age: 20,
  location: ["dew"],
};
