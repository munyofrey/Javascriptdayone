function Student(firstName, lastName) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];

}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.enroll = function(course) {
  if (this.courses.indexOf(course) === -1) {
  this.courses.push(course);
  course.add_student(this);
  } else {
    console.log("This student is already enrolled.");
  }
};


Student.prototype.courseLoad = function() {
  let load = {};
  this.courses.forEach(function(course) {
    if (typeof load[course.department] === 'undefined'){
      load[course.department] = course.numberOfCredits;}
    else {
      load[course.department] += course.numberOfCredits;}
    });
  return load;
};


function Course(courseName, department, numberOfCredits) {
  this.courseName = courseName;
  this.department = department;
  this.numberOfCredits = numberOfCredits;
  this.students = [];
}


Course.prototype.add_student = function (student){
  this.students.push(student);
};

let robert = new Student('robert', 'koeze');
let munyo = new Student('munyo', 'frey');
let course1 = new Course('DiffyQ', 'Math', 4);
let course2 = new Course('Combinatorics', 'Math', 2);
let course3 = new Course('Econ 101', 'Econ', 4);

munyo.enroll(course1);
munyo.enroll(course2);
munyo.enroll(course3);
robert.enroll(course2);
console.log(course2.students);
console.log(munyo.courses);
console.log(munyo.courseLoad());
