// use class keyword to define class
import { Gender } from "./types";
export class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
// static variables
Person.nation = "China";
export let personOne = new Person("nina", 18, Gender.Female);
