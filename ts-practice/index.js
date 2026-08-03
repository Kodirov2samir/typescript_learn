"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Typescript is static unlike js which is dinamic, static means that types are checked while compiling not the run time
//There are two types of typization which are explicit and infered
const lemonInferrence = "lemon"; // => inferrence typescript authomatically gives type to the variable, here it is a string
const numExplicit = 10; // => explicit we type the type ourselves
console.log(lemonInferrence);
console.log(numExplicit);
// 2. Initialize a variable with the 'User' type
let currentUser = { id: "USR-101", name: "Alice" };
// 3. Assign it to a 'Customer' variable
// This works perfectly because their structures are identical!
let activeCustomer = currentUser;
function printId(obj) {
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
let union; //number or string
union = "bread";
union = 20;
console.log(union); //no error (20)
let infoUnion1 = { age: 20 }; //correct
let infoUnion2 = {
    age: 17,
    firtsname: "samir",
    lastname: "kodirov",
}; //correct
let unionInfo3 = {
    firtsname: "samir",
    age: 20,
}; //correct
//So basically we can use any of the fileds of the type
//Intersection(x & y)
//There cant be intersections in primitive data types:
let intersection; //incorrect
const info0 = { firstname: "Samir", lastname: "Kodirov", age: 20 };
console.log(info0); //{ firstname: 'Samir', lastname: 'Kodirov', age: 20 }
//as typization in ts is structural we can interchange the types; we can do:
const subType = { name: "Samir", age: 20 };
const superType = subType; //correct because supertype requires to have alt least naem and subType has is
/**
 * const supeType: SuperType = { name: "Samir"};
const subType: SubType = superType;//incorrect because although subType includes name, it laso requires age but there is no age
 */
console.log(superType);
//Special types:
//Any=> basially allows to use any type
let anyVar;
anyVar = "string";
anyVar = 20;
anyVar = false;
anyVar = {};
anyVar = [];
//everything is correct
//any is both subType and superType for any data type
//Unknown=> safer version of any, if we dont know the value yet we need to check teh value and then provede type:
function unk(data) {
    let val;
    // val=data => error because we dont know the value, so we need to check first
    if (typeof data === "string") {
        val = data; //correct
    }
    if (Array.isArray(data)) {
        data;
    }
}
//unknown is a superType for any data type but no subType, so string can be unknown but unknown can't be string
let uncVar;
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
let myNever = undefined;
let myString = myNever; //correct
/**
 let str: string = "Hi";
let nev: never = str; incorrect
 */
//Example of usage:
var NevVar;
(function (NevVar) {
    NevVar[NevVar["First"] = 0] = "First";
    NevVar[NevVar["Second"] = 1] = "Second";
    NevVar[NevVar["Third"] = 2] = "Third";
})(NevVar || (NevVar = {}));
function nevFn(value) {
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
function voiFn() {
    console.log();
}
const userComp = {
    name: "Samir",
    age: 20,
    address: {
        coords: ["20", "21"],
    },
};
console.log(userComp); //{ name: 'Samir', age: 20, address: { coords: [ '20', '21' ] } }
//if we want a massive of users we can use [] before the object type:
const userCompArr = [
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
