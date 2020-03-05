'use strict'

const deleteStudent = function (arr) {
  const index = students.findIndex(function (element) {
    return element.name === arr.name &&
                  element.studentNumber === arr.studentNumber &&
                  element.yearOfStudy === arr.yearOfStudy
  })
  students.splice(index, 1)
  return students
}

const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]
console.log(students)

const modifiedArray = deleteStudent({
  name: 'Kiren',
  studentNumber: 567893,
  yearOfStudy: 4
}, students)

console.log(modifiedArray)
