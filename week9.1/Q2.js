let grade = 90;
let gradeStudent = (grade) => {
  if (grade >= 90) {
    return "A";
  } else if (grade < 90 && grade >= 70) {
    return "B";
  } else if (grade < 70 && grade >= 50) {
    return "C";
  } else {
    return "F";
  }
};
console.log(gradeStudent(grade));
