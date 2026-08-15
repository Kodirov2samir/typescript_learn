//TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally.

//Awaited<Type>

//Partial<Type> is used to make the fields of existing type optional:
interface Car {
  color: "yellow" | "red";
  year: number;
}

const updateCar = (car: Car, fieldsToUpdate: Partial<Car>) => {
  return { ...car, ...fieldsToUpdate };
};

const currentCar: Car = {
  color: "red",
  year: 2025,
};

const updatedCar = updateCar(currentCar, {
  year: 1990,
});

console.log(updatedCar); //{ color: 'red', year: 1990 }

//Required<Type> the reverse of Partial

//Readonly make all the properties readonly
type Shop = {
  created_in: Date;
  location_city: string;
};
const shop1: Shop = {
  created_in: new Date("2020"),
  location_city: "Tashkent",
};
shop1.location_city = "Namangan"; //works perfectly
console.log(shop1); //{ created_in: 2020-01-01T00:00:00.000Z, location_city: 'Namangan' }

const shop2: Readonly<Shop> = {
  created_in: new Date("19-01-2008"),
  location_city: "Moscow",
};
// shop2.location_city = "New York" error

//Record<key,Type> creates an object with key as the key and Type as a value
type recordLiteral = "samir" | 20 | 122;
interface UserRec {
  name: string;
  age: number;
  height?: number;
}

const objRec: Record<keyof UserRec, recordLiteral> = {
  name: "samir",
  age: 20,
  height: 122, //height is required although it is optional
};

//Pick<Type,key> Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

//Exclude/ Extract<typeUnion, union>, similar to omit and pick but it wroks only with unions
type ExtrCl = "blue" | "yellow" | "red" | "green";
type extracted = Extract<ExtrCl, "yellow" | "green">; //takes all the type that are equal to yellow and green
type excluded = Exclude<ExtrCl, "yellow" | "red">; //takes all the types that are not equal to yellow or red

//NonNullable<Type>
//Constructs a type by excluding null and undefined from Type.

type t0 = NonNullable<string | number | undefined>; //string | number

type T1 = NonNullable<string[] | null | undefined>; //string[]
