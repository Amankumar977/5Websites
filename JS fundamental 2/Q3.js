const students = [
  {
    name: "Mithun",
    marks: 95,
  },
  {
    name: "Prabir",
    marks: 75,
  },
  {
    name: "Alka",
    marks: 92,
  },
  {
    name: "Shivam",
    marks: 70,
  },
  {
    name: "Farman",
    marks: 99,
  },
];

let checkResults = (name) => {
  let student = students.find((user) => user.name === name);

  if (student) {
    if (student.marks > 90) {
      console.log(`Congratulations ${name}! You have cleared the exam.`);
    } else {
      console.log(`Sorry ${name}, you have not cleared the exam.`);
    }
  } else {
    console.log(`Invalid user: ${name}`);
  }
};
checkResults("Mithun");
