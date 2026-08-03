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

//Special types:
//Any=> basially allows to use any type
let anyVar: any;
anyVar = "string";
anyVar = 20;
anyVar = false;
anyVar = {};
anyVar = [];
//everything is correct

//any is both subType and superType for any data type

//Unknown=> safer version of any, if we dont know the value yet we need to check teh value and then provede type:
function unk(data: unknown) {
  let val: string;
  // val=data => error because we dont know the value, so we need to check first
  if (typeof data === "string") {
    val = data; //correct
  }
  if (Array.isArray(data)) {
    data;
  }
}
//unknown is a superType for any data type but no subType, so string can be unknown but unknown can't be string
let uncVar: unknown;
uncVar = "string"; //correct

/**
 let value: unknown;
 let str: string = value incorrect
 */

//never is a subType for any data but no superType it means never can be string but string can't be never
/**
 * never — это подтип для string (как малюсенькая матрешка внутри большой).

Поэтому ты можешь положить never туда, где ожидается string.

string — это НЕ подтип для never.

Поэтому ты не можешь положить string туда, где ожидается never.
 */
let myNever: never = undefined as never;
let myString: string = myNever; //correct
/**
 let str: string = "Hi";
let nev: never = str; incorrect
 */

//Example of usage:
enum NevVar {
  First,
  Second,
  Third,
}
function nevFn(value: NevVar) {
  switch (value) {
    case NevVar.First:
      return 1;
    case NevVar.Second:
      return 2;
    default:
      // const exhaustiveCheck: never = value; //this allows us to make sure that we have made case for each scenario, for example here as we have Third default will return Third
      return 3;
  }
}
// console.log(nevFn(NevVar.Fourth)); 3
console.log(nevFn(NevVar.Second)); //2;

//Void also like never but it is returned after complition of the function
function voiFn(): void {
  console.log();
}
//we mostly use it to say that function wroks with db or somthing and we dont need to return anything:
/**
 * function saveUsername(name: string): void {
  // Просто сохраняем в БД, функция ничего не возвращает
  db.save(name); 
}
 */

/**
 * // 1. Возвращает конкретное значение (String)
function getName(): string {
  return "Алексей"; 
}

// 2. Ничего не возвращает, но РАБОТАЕТ ДО КОНЦА (Void)
function logName(): void {
  console.log("Алексей"); 
}

// 3. НИКОГДА НЕ ЗАВЕРШАЕТСЯ / падает с ошибкой (Never)
function fail(): never {
  throw new Error("Упс!"); 
}
 */

//Compound types
//to create types for objects or arrays we use type or interface
interface AddressComp {
  city?: string; //we use "?" before : to say that it is optional
  street?: string;
  coords: string[];
}
type UserComp = {
  name: string;
  age: number;
  address: AddressComp;
};
const userComp: UserComp = {
  name: "Samir",
  age: 20,
  address: {
    coords: ["20", "21"],
  },
};
console.log(userComp); //{ name: 'Samir', age: 20, address: { coords: [ '20', '21' ] } }
//if we want a massive of users we can use [] before the object type:
const userCompArr: UserComp[] = [
  userComp,
  {
    name: "Akbar",
    age: 99,
    address: {
      city: "Namangan",
      coords: ["20", "22"],
    },
  },
];
console.log(userCompArr); /**
[
  { name: 'Samir', age: 20, address: { coords: [Array] } },
  {
    name: 'Akbar',
    age: 99,
    address: { city: 'Namangan', coords: [Array] }
  }
] */
console.log(userCompArr[1]?.address.coords); //[ '20', '22' ]
