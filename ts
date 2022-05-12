// https://www.typescriptlang.org/play

let name: string;
let age: number | string; // union type
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; // this is called tuple

let printName: (name: string) => never; // void -> undefined

// any, unknown

type Person2 = {
  name: string;
  age?: number;
}


// role = [3,'a']

// name = 'G';

// let person: Person = {
//   name: 'Alex',
// }

// let lotsOfPeople: Person[];

interface Person {
  name: string
  age?: number
}

interface Guy extends Person2 { 
  profession: string
}
