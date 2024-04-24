// var globalVar = "Global";
// let innerFuncVar = "Test";

// function outerFunctionScop() {
//   var outerFunVar = " Outer";

//   function innerFuncScop() {
//     var innerFuncVar = "inner";

//     // if (true) {
//     //   let val = "is true";
//     //   console.log(val);
//     // }

//     console.log(innerFuncVar);
//     // console.log(outerFunVar);
//     // console.log(globalVar);
//   }
//   innerFuncScop();
// }

// outerFunctionScop();

// // console.log(innerFuncVar);
// // console.log(outerFunVar);
// // console.log(globalVar);

// HOISTING

// let a = "b"
// function f() {
//   let a = "a";

//   if (true) {
//     let a = "zzz";
//     console.log(a);
//   }
//   console.log(a);
// }

// f();
// console.log(a)

// CLOUSER
// function f(){
//     let counter = 0
//     return function(){
//         return counter++
//     }
// }
// const v1 = f()
// console.log(v1())

// let counter = 0;
// for (let i = 0; i < 5; i++) {
//   function print() {
//     console.log(i + " but counter is " + counter++);
//   }
//   setTimeout(print, 1000);
// }

// // JS SCOPING
// global variable

// OBJECT ORIENTED PROGRAMMING

// const person = {
//   name: "Prem",
//   add: "Sydney",

//   bio() {
//     return `Hey this is ${this.name}, I live in ${this.add}.`;
//   },
// };
// console.log(person.bio());

// FACTORY FUNCTION method to create function

// function aboutPerson(name, add) {
//   return {
//     name,
//     add,

//     bio() {
//       return `Hey this is ${this.name}, I live in ${this.add}.`;
//     },
//   };
// }

// const premObj = aboutPerson("Prem", "Sydney");

// console.log(premObj.bio());

// const samObj = aboutPerson("sam", "Sydney");

// console.log(samObj.bio());

// ***** CONSTRUCTOR FUNCTION*******

// function AboutPerson(name, add) {
//   (this.name = name), (this.add = add);
// }
// const premObj = new AboutPerson("Prem", "Sydney");
// console.log(premObj);

// const premObj = {
//   name: "Prem",
//   add: "Sydey",
//   dob: "1-1-2000",
// };

// function bio(p) {
//   return `This is ${p.name} form ${p.add} and I am ${getAge(p.dob)} years old.`;
// }

// function getAge(dob) {
//   return new Date().getFullYear() - new Date(dob).getFullYear();
// }

// function birthDay(p) {
//   return `Happy Birthday ${p.name}! Now you are ${getAge(p.dob) + 1} years old`;
// }
// console.log(birthDay(premObj));

// ENCAPSULATION

const premObj = {
  name: "Prem",
  add: "Sydey",
  dob: "1-1-2000",
};

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.add = obj.add;
    this.dob = obj.dob;
  }

  bio() {
    return `This is ${this.name} form ${this.add} and I am ${this.getAge(
      this.dob
    )} years old.`;
  }

  getAge() {
    return new Date().getFullYear() - new Date(this.dob).getFullYear();
  }

  birthDay() {
    return `Happy Birthday ${this.name}! Now you are ${
      this.getAge(this.dob) + 1
    } years old`;
  }
}
const premInfo = new Person(premObj);
console.log(premInfo.birthDay());
