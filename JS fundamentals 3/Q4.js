let emp = {
  name: "Aman",
  salary: 40000,
  city: "delhi",
};

function checkProperty(emp, property) {
  if (emp.hasOwnProperty(property)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
let property = "name";
checkProperty(emp, property);
