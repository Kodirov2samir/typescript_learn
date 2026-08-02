//Typescript is static unlike js which is dinamic, static means that types are checked while compiling not the run time
//There are two types of typization which are explicit and infered
const lemonInferrence = "lemon"; // => inferrence typescript authomatically gives type to the variable, here it is a string
const numExplicit: number = 10; // => explicit we type the type ourselves
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
