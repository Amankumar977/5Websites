let student = {
  name: "Aman",
  age: "20",
  grade: "A",
  updateGarde: function (grade) {
    this.grade = grade;
  },
};

student.updateGarde("B+");
console.log(student.grade);
