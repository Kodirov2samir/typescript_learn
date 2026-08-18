//infer is used to extract the type out of array, obj, promise, tupple, function argumnet:
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

//now to get the argument type we can do:
type Myparameter<T> = T extends (arg: infer U) => any ? U : never; //it tells if T is a function extract the arguemt type and assign this type as U or never

type InfType = Myparameter<typeof inferTestNameAge<User>>;
//now InfType is equal to User
const item: InfType = {
  name: "samir",
  age: 20,
  location: ["defdw"],
};
//basically it is Parameter type we could also do:
type paramOfFunction = Parameters<typeof inferTestNameAge>[0];
const paraOfFnObj: paramOfFunction = {
  name: "samie",
  age: 20,
  location: ["dew"],
};
