//Typescript is static unlike js which is dinamic, static means that types are checked while compiling not the run time
//There are two types of typization which are explicit and infered
const lemonInferrence = "lemon"; // => inferrence typescript authomatically gives type to the variable, here it is a string
const numExplicit: number = 10; // => explicit we type the type ourselves
console.log(lemonInferrence);
console.log(numExplicit);

// const numTestExplicit: number = "32";
// console.log(numTestExplicit); //ide imdiately gives an error
