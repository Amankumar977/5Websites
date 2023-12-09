/**
 * The comma operator evaluates the operand and returns the value of last operand.
 */
let name = "Aman";
let age = 14;
let classRoom = 45;
// Either we can write this
console.log(
  "The student name is " +
    name +
    " his age is " +
    age +
    " his classRoom number is " +
    classRoom
);
// else we can use comma operator
console.log(
  "The student name is " + name,
  "his age is",
  age,
  "his classRoom number is",
  classRoom
);
