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
const colorLit = "red"; // anything not included in literal will be an error from IDE
const sizeLit = 2;
//as ts has structural typing we can also do
const colLit = "white";
function litFn(color /**we basically say: color should be one of ColorLit literals */) {
    console.log(color);
}
litFn(colLit); //white
//but
const sizLit = {
    size: 4,
}; //assign const to say that we will never change the value or we could assign readonly literaly:
/**
 * const sizLit = {
  readonly size: 4,
}
 */
function sizFn(size) {
    console.log(size);
}
// sizFn(sizLit.size); Error
//error occurs because SizeLit expects only three values: 1,2,4 although size is 4 we can always change its value to 6: sizeLit.size=6, so for that reason ts warns as not to use that instead we can assign it as const
sizFn(sizLit.size); //4 now correct
let handler = "on-click-user"; // correct
const fullGenInfo /**we say: fullGenInfo should be in the form of FullGenInfo and data should be in the form of UserGen */ = {
    requestId: "13j2bjedb3jbdj4f",
    data: {
        username: "samir",
    },
};
console.log(fullGenInfo); //{ requestId: '13j2bjedb3jbdj4f', data: { username: 'samir' } }
const ExtGenArrFn = (item) => {
    return item;
};
console.log(ExtGenArrFn({ brand_name: "BMW", year: 2008, color: "purple" })); //{ brand_name: 'BMW', year: 2008, color: 'purple' }
const val = true;
//Narrowing
//Narrowing is just a way for us to use the mesthod type no knowing what it will be, basic:
const narrFn = (arg) => {
    if (typeof arg === "string") {
        return arg + 2;
    }
    else if (typeof arg === "number") {
        return arg + 6;
    }
    else {
        return arg;
    }
};
console.log(narrFn(2)); //8
console.log(narrFn("2")); //22
console.log(narrFn(null)); //null
//truthiness narrowing we can do either with literals or null undefined
/**
 * How It WorksFalsy values (null, undefined, 0, NaN, "", false) mean the check fails or goes to the else block.Truthy values (everything else) mean the value exists, allowing TypeScript to strip away null and undefined
 */
function truthinessNarrF(arg) {
    if (arg) {
        console.log(arg.length); //ts knows if is true is it authomatically becaomes string
    }
    else {
        // Inside this block, TypeScript knows 'str' is undefined or falsy
        console.log("No string provided");
    }
}
const undentifyNarrFn = (arg) => {
    //we can use in operator
    if ("username" in
        arg /**we basically say if username key in thruthNarrNon exists */) {
        console.log(arg.age); //ts understood that username is in pnly truthNarrNon and we can access its values
    }
    else if ("parent_age" in arg) {
        console.log(arg.parent_name);
    }
    return arg.address; //we can access it because ts uses structural typixation and both types has address key
};
console.log(undentifyNarrFn({ username: "Samir", age: 20, address: "hell" })); //20 hell
function indentyfyCarDIscUnion(arg) {
    //discriminated unions can be made either by switch case or if else
    switch (arg.type) {
        case "BMW":
            return arg.bwmChar; //ts understands that it is bmw and we can acess its unique keys
        case "Audi":
            return arg.audiChar;
        default:
            return arg.toyotaChar; //ts understood that the only option is toyota
    }
}
console.log(indentyfyCarDIscUnion({
    type: "Audi",
    audiChar: "comfortable",
    maxSpeed: 200,
})); //comfortable
