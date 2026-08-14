// Topic: Union and Intersection Types
// Union (`A | B`) means "one of these shapes".
// Intersection (`A & B`) means "all of these shapes together".

type MainInfoUnion = {
  firstname: string;
  lastname: string;
};

type AdditionalInfoUnion = {
  age: number;
};

type FullInfoUnion = MainInfoUnion | AdditionalInfoUnion;

type MainInfo = {
  firstname: string;
  lastname: string;
};

type AdditionalInfo = {
  age: number;
};

type FullInfo = MainInfo & AdditionalInfo;

export function runUnionsAndIntersectionsExamples() {
  // Union (`A | B`) means the value can match A, B, or a compatible combination.
  let unionValue: number | string;
  unionValue = "bread";
  unionValue = 20;

  const ageOnly: FullInfoUnion = { age: 20 };
  const allFields: FullInfoUnion = {
    firstname: "Samir",
    lastname: "Kodirov",
    age: 20,
  };

  console.log("Union examples:", unionValue, ageOnly, allFields);

  // Intersection (`A & B`) means the value must satisfy both types.
  const fullInfo: FullInfo = {
    firstname: "Samir",
    lastname: "Kodirov",
    age: 20,
  };

  console.log("Intersection example:", fullInfo);

  // A primitive intersection like `string & number` is impossible in real usage.
  // No value can be both a string and a number at the same time.
}
