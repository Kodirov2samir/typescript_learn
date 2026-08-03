"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Typescript is static unlike js which is dinamic, static means that types are checked while compiling not the run time
//There are two types of typization which are explicit and infered
const lemonInferrence = "lemon"; // => inferrence typescript authomatically gives type to the variable, here it is a string
const numExplicit = 10; // => explicit we type the type ourselves
console.log(lemonInferrence);
console.log(numExplicit);
// const numTestExplicit: number = "32";
// console.log(numTestExplicit); //ide imdiately gives an error
//Structural typization
//Structural typing in TypeScript means that type compatibility is determined solely by the shape or structure of the data, rather than by explicit declarations or type names
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
//Interscetion(x & y)
//There cant be intersections in primitive data types:
let intersection; //incorrect
const info0 = { firstname: "Samir", lastname: "Kodirov", age: 20 };
console.log(info0); //{ firstname: 'Samir', lastname: 'Kodirov', age: 20 }
//so it means an object should include all the fields
