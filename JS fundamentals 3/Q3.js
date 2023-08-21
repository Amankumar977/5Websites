let emp = {
  name: "aman",
  salary: "40,000",
  designation: "web developers",
};

function countKeys(emp) {
  return Object.getOwnPropertyNames(emp).length;
}

console.log(countKeys(emp));
