const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
// hobbies.push('Programming');
// console.log(hobbies);
// const copiedArray = hobbies;
// console.log(copiedArray);
// OUTPU [[ SPORTS COOKING]]
//

// TO COPY ELEMENTS USE SPREAD OPERATOR
const copiedArray = [...hobbies];
console.log(copiedArray);

// STATIC WITH SPREAD OPERTATOR
// const toStaticAtrray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };
// console.log(toStaticAtrray(1, 2, 3,4));
//OUTPUT [1,2,3]

// DYNAMIC WITH SPREAD OPERTATOR
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4));
// OUTPUT [1,2,3,4]
