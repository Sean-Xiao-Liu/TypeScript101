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

    constructor(name:string,age:number,gender:Gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // define a function within class
    sayHello(){
       console.log("Hello from",this.name);
    }

    intro(){
        console.log(this);
    }
}

class Dog extends Animal{
    name: string;
    age: number;

    constructor(name:string,age:number) {
        super();
        this.age=age;
        this.name = name;
    }

    bark(){
        console.log("dog bark");
    }

    makeNoise() {
    }
}

export class Shiba extends Dog{

    color:Color;

    constructor(name:string,age:number,color:Color) {
        super(name,age);
        this.color = color;
    }

    makeNoise() {
        // super.bark();
        console.log("shiba bark");
    }
}

export enum Color {
    WHITE,
    BLACK,
    RED
}

abstract class Animal {
    abstract makeNoise();
}



export let personOne = new Person("nina",18,Gender.Female);


