import {Color, Person, Shiba} from "../IntroToTs/classes";
import {Gender} from "../IntroToTs/types";

console.log("this is the file to be packed using web pack");

let personOne = new Person("Nina", 18, Gender.Female);
let shibaOne = new Shiba("A Ji",3,Color.RED,personOne)

console.log("person name is",personOne.age)
console.log(personOne.height);
console.log(Person.nation);
console.log(personOne.sayHello());
console.log(personOne.intro());
console.log(shibaOne.name,"'s owner is",shibaOne.owner.sayHello());
