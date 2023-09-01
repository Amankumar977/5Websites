function ageInDays(person, logResult) {
  return logResult(person);
}
let person = {
  firstName: "Sohan",
  lastName: "Niman",
  age: 45,
};
function logResult(person) {
  console.log(
    `The person Full Name is ${person.firstName} ${
      person.lastName
    } the age in the days is ${person.age * 365}`
  );
}
ageInDays(person, logResult);
