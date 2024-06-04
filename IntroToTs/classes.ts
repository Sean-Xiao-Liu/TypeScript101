// use class keyword to define class
import {Gender} from "./types";

export class Person {
    // these are instance variables
    name:string;
    age:number;
    gender:Gender;

    // static variables, is the class variable, can be called without generate instance
    static nation = "China";
    //
    readonly height = 168;

    constructor(name: string, age: number, gender: Gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // define a function within class
    sayHello():String {
        console.log("Hello from", this.name);
        return "Hello from "+this.name;
    }

    intro() {
        console.log(this);
    }
}

abstract class Animal {
    abstract makeNoise() :void;
}

class Dog extends Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        super();
        this.age = age;
        this.name = name;
    }

    bark() {
        console.log("dog bark");
    }

    makeNoise() {
    }
}

export class Shiba extends Dog implements Pet {

    color: Color;

    constructor(name: string, age: number, color: Color, owner: Person) {
        super(name, age);
        this.color = color;
        this.owner = owner;
    }

    makeNoise() {
        // super.bark();
        console.log("shiba bark");
    }

    owner: Person;
}

export enum Color {
    WHITE,
    BLACK,
    RED
}



interface Pet {
    owner: Person;
}


export let personOne = new Person("nina", 18, Gender.Female);


