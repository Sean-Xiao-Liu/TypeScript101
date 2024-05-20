// define joint type
let a: boolean | number | string;

let b: "male" | "female";

// define c as a object
// ? after property name means this property is optional
// [prop: string]: any is array of properties of any type
let c: {name: string, age?: number ,[propString: string]: any};

// use & to connect property means must have it
let h: {name: string ,[propString: string]: string} & {age: number}

c = {name: "nina",age: 12,gender: "female"};

// define a function d with 2 number arguments
let d: (a: number,b:number) => number;

d = function (a,b) {
    return a+b;
}

// define number array, similar to list in Java
let e: number[] ;

e = [2,3,5.3];

// define tuple. which is an array with fixed length
let f:[string,string,string];
f= ['a','b','c']

// define enum
export enum Gender{
    Male ,
    Female
}
let g:{name: string, gender: Gender}

g = {name:"nina",gender: Gender.Female}

type m = {name: string, gender: Gender}

// let personOne: m = {name: "Sean",gender: Gender.Male};
// let personTwo: m = {name: "Sean",gender: Gender.Male};
// let personThree: m = {name: "Sean",gender: Gender.Male};

