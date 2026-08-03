//Typescript is static unlike js which is dinamic, static means that types are checked while compiling not the run time
//There are two types of typization which are explicit and infered
const lemonInferrence = "lemon"; // => inferrence typescript authomatically gives type to the variable, here it is a string
const numExplicit: number = 10; // => explicit we type the type ourselves
console.log(lemonInferrence);
console.log(numExplicit);

// const numTestExplicit: number = "32";
// console.log(numTestExplicit); //ide imdiately gives an error

//Structural typization
//Structural typing in TypeScript means that type compatibility is determined solely by the shape or structure of the data, rather than by explicit declarations or type names:
interface User {
  id: string;
  name: string;
}

interface Customer {
  id: string;
  name: string;
}

// 2. Initialize a variable with the 'User' type
let currentUser: User = { id: "USR-101", name: "Alice" };

// 3. Assign it to a 'Customer' variable
// This works perfectly because their structures are identical!
let activeCustomer: Customer = currentUser;

function printId(obj: { id: string }) {
  console.log(obj.id);
}

// 4. This also works because both types contain an 'id' property
printId(currentUser);

//Data types
//data types in ts are the same as in js but there are special types
/*Specail types:
 any
 unknown
 never
 void
 (literals)
 */

//Union(x | y)
//Unions are the combination of data types, which means we show what kind of data types we can assign a variable
let union: number | string; //number or string
union = "bread";
union = 20;
console.log(union); //no error (20)

//Non primitives:
type MainInfoUnion = {
  firtsname: string;
  lastname: string;
};
type AdditionalInfoUnion = {
  age: number;
};
type FullinfoUnion = MainInfoUnion | AdditionalInfoUnion;
let infoUnion1: FullinfoUnion = { age: 20 }; //correct
let infoUnion2: FullinfoUnion = {
  age: 17,
  firtsname: "samir",
  lastname: "kodirov",
}; //correct
let unionInfo3: FullinfoUnion = {
  firtsname: "samir",
  age: 20,
}; //correct
//So basically we can use any of the fileds of the type

//Intersection(x & y)
//There cant be intersections in primitive data types:
let intersection: string & number; //incorrect

//Non primitive
type MainInfo = {
  firstname: string;
  lastname: string;
};
type AdditionalInfo = {
  age: number;
};

type FullInfo = AdditionalInfo & MainInfo;

const info0: FullInfo = { firstname: "Samir", lastname: "Kodirov", age: 20 };
console.log(info0); //{ firstname: 'Samir', lastname: 'Kodirov', age: 20 }
//so it means an object should include all the fields

//Supertype Subtype
//Subtype is a type that includes all the parents fields plus have own
type SuperType = {
  name: string;
};
type SubType = {
  name: string;
  age: number; //includes both part filed(name) and own field(age)
};
//as typization in ts is structural we can interchange the types; we can do:
const subType: SubType = { name: "Samir", age: 20 };
const superType: SuperType = subType; //correct because supertype requires to have alt least naem and subType has is
/**
 * const supeType: SuperType = { name: "Samir"};
const subType: SubType = superType;//incorrect because although subType includes name, it laso requires age but there is no age
 */
console.log(superType);
