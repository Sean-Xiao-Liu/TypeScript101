import {Color, Person, Shiba} from "../IntroToTs/classes";
import {Gender} from "../IntroToTs/types";

console.log("this is the file to be packed using web pack");

let personOne = new Person("nina", 18, Gender.Female);
let shibaOne = new Shiba("Gee",3,Color.RED)

console.log("person name is",personOne.name)
console.log(personOne.height);
console.log(Person.nation);
console.log(personOne.sayHello());
console.log(personOne.intro());
