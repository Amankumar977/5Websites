let emp = {
  name: "aman",
  salary: "40,000",
  designation: "web developer",
};

function countKeys(emp) {
  return Object.getOwnPropertyNames(emp).length;
}

console.log(countKeys(emp));
