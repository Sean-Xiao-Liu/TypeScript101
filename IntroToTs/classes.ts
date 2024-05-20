// use class keyword to define class
import {Gender} from "./types";

export class Person {
    name:string;
    age:number;
    gender:Gender;

    constructor(name:string,age:number,gender:Gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

export let personOne = new Person("nina",18,Gender.Female);


