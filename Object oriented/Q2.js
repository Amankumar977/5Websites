class Admission {
  constructor() {
    this.enrolledStudents = [];
  }
  enrollStudent(student) {
    this.enrolledStudents.push(student);
    console.log(`${student.name} has been enrolled`);
  }

  assignCourse(student, courseName) {
    student.course = courseName;
    console.log(`${student.name} has been enrolled in ${courseName}`);
  }

  showEnrolledStudents() {
    console.log("Enrolled Students:");
    for (let student of this.enrolledStudents) {
      console.log(`${student.name} (${student.email})`);
    }
  }
}

class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  showCourse() {
    if (this.course) {
      console.log(`${this.name} has enrolled in ${this.course}`);
    } else {
      console.log(`${this.name} has not yet enrolled in any course.`);
    }
  }
}

const student1 = new Student("Mithun", "mithun@pw.live");
const student2 = new Student("Aman", "aman@pw.live");
const admissionOffice = new Admission();

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);
admissionOffice.assignCourse(student1, "Full Stack Web Development");
admissionOffice.assignCourse(student2, "Data Science Masters");
student1.showCourse();
student2.showCourse();
admissionOffice.showEnrolledStudents();
