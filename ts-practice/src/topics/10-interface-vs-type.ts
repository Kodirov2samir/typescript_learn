// Topic: Interface vs Type
// Both `interface` and `type` can describe object shapes.
// Use `interface` often for object models that may be extended.
// Use `type` for unions, primitives, tuples, and function aliases.

type ColorLiteral = "red" | "green";
type NumberList = number[];

interface User {
  name: string;
  age: number;
}

// Interfaces extend other interfaces with `extends`.
interface UserInformation extends User {
  phoneNumber: string;
}

type Admin = {
  name: string;
  age: number;
};

// Types combine object shapes with intersection (`&`).
type AdminFullInfo = Admin & {
  phoneNumber: string;
};

// Interfaces with the same name are merged by TypeScript.
interface MergedInterface {
  hobbies: string[];
}

interface MergedInterface {
  familyMembersCount: number;
}

type FixedTuple = [string, number, 5];
type CombineFn = (a: number, b: string) => string;

interface InterfaceFunction {
  (a: number, b: string): string;
}

export function runInterfaceVsTypeExamples() {
  console.log("\nTopic 10: Interface vs type");

  // Types can represent literal unions and primitive aliases.
  const color: ColorLiteral = "red";
  const numbers: NumberList = [1, 2, 3];
  console.log("Type aliases:", color, numbers);

  const fullUserInformation: UserInformation = {
    name: "Samir",
    age: 20,
    phoneNumber: "93659633",
  };
  console.log("Interface extends:", fullUserInformation);

  const fullAdminInformation: AdminFullInfo = {
    name: "Alex",
    age: 23,
    phoneNumber: "9239243",
  };
  console.log("Type intersection:", fullAdminInformation);

  const merged: MergedInterface = {
    hobbies: ["coding", "football"],
    familyMembersCount: 4,
  };
  console.log("Interface merging:", merged);

  // Tuples are arrays with fixed length and fixed positions.
  const tuple: FixedTuple = ["man", 20, 5];
  console.log("Tuple:", tuple);

  const combineStringToNumber: CombineFn = (a, b) => {
    return a + b;
  };
  console.log("Function type alias:", combineStringToNumber(12, "hello"));

  const interfaceFunction: InterfaceFunction = (a, b) => {
    return `${a}-${b}`;
  };
  console.log("Interface function:", interfaceFunction(12, "hello"));
}
