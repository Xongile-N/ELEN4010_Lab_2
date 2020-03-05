const student = {
  name: 'Kwezi',
  studentNumber: 453528
}
console.log(student) // print the entire object
// access the object's properties
console.log(`${student.name}'s student number is ${student.studentNumber}`)

const addAge = function (theStudent, age) {
  theStudent.age = age // add a new property called age to the student
}
addAge(student, 20)

console.log(`student age is ${student.age}`)
