import {Person} from "../IntroToTs/classes";
import {Gender} from "../IntroToTs/types";

console.log("this is the file to be packed using web pack");

let personOne = new Person("nina", 18, Gender.Female);

console.log("person name is",personOne.name)
