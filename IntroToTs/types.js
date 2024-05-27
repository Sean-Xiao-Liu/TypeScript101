"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = void 0;
// define joint type
var a;
var b;
// define c as a object
// ? after property name means this property is optional
// [prop: string]: any is array of properties of any type
var c;
// use & to connect property means must have it
var h;
c = { name: "nina", age: 12, gender: "female" };
// define a function d with 2 number arguments
var d;
d = function (a, b) {
    return a + b;
};
// define number array, similar to list in Java
var e;
e = [2, 3, 5.3];
// define tuple. which is an array with fixed length
var f;
f = ['a', 'b', 'c'];
// define enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (exports.Gender = Gender = {}));
var g;
g = { name: "nina", gender: Gender.Female };
// let personOne: m = {name: "Sean",gender: Gender.Male};
// let personTwo: m = {name: "Sean",gender: Gender.Male};
// let personThree: m = {name: "Sean",gender: Gender.Male};
