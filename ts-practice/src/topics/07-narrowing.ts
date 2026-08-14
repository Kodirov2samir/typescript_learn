// Topic: Narrowing and Discriminated Unions
// Narrowing means checking a value so TypeScript knows its exact type.
// Common tools are `typeof`, truthiness checks, the `in` operator, and switch statements.

type PersonWithUsername = {
  username: string;
  age: number;
  address: string;
};

type ParentInfo = {
  parentName: string;
  parentAge?: number;
  address: string;
};

interface CarBase {
  maxSpeed: number;
  year?: number;
}

interface BmwCar extends CarBase {
  type: "BMW";
  bmwFeature: string;
}

interface AudiCar extends CarBase {
  type: "Audi";
  audiFeature: string;
}

interface ToyotaCar extends CarBase {
  type: "Toyota";
  toyotaFeature: string;
}

type CarUnion = BmwCar | AudiCar | ToyotaCar;

export function runNarrowingExamples() {
  // Narrowing means checking a value so TypeScript can understand the exact type.
  console.log("Narrow number:", narrowPrimitive(2));
  console.log("Narrow string:", narrowPrimitive("2"));
  console.log("Narrow null:", narrowPrimitive(null));

  printLengthWhenTruthy("hello");
  printLengthWhenTruthy();

  console.log(
    "Narrow object:",
    identifyPerson({ username: "Samir", age: 20, address: "Namangan" }),
  );

  console.log(
    "Discriminated union:",
    identifyCar({
      type: "Audi",
      audiFeature: "comfortable",
      maxSpeed: 200,
    }),
  );
}

function narrowPrimitive(value: number | null | string) {
  if (typeof value === "string") {
    return value + 2;
  }

  if (typeof value === "number") {
    return value + 6;
  }

  return value;
}

function printLengthWhenTruthy(value?: string) {
  if (value) {
    console.log("Truthy string length:", value.length);
  } else {
    console.log("No string provided");
  }
}

function identifyPerson(value: PersonWithUsername | ParentInfo) {
  if ("username" in value) {
    console.log("Username owner age:", value.age);
  } else if ("parentAge" in value) {
    console.log("Parent name:", value.parentName);
  }

  // This is safe because both possible types include `address`.
  return value.address;
}

function identifyCar(car: CarUnion) {
  // The `type` field is the discriminant.
  // Each switch case narrows `car` to one exact object type.
  switch (car.type) {
    case "BMW":
      return car.bmwFeature;
    case "Audi":
      return car.audiFeature;
    case "Toyota":
      return car.toyotaFeature;
  }
}
