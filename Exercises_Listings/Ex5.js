'use strict'

const course = {
  courseCode: 'ELEN4010'
}

const addYearOffered = function (theCourse) {
  const s = theCourse.courseCode
  if (s.includes('40') === true) theCourse.year = 'four'
  else if (s.includes('30') === true) theCourse.year = 'three'
}

const summary = function (theCourse) {
  console.log(`${theCourse.courseCode} is offered in year ${theCourse.year}`)
}

const changeCourse = function (theCourse, newCourseCode) {
  theCourse.courseCode = newCourseCode
}
console.log(course)
addYearOffered(course)
summary(course)
changeCourse(course, 'ELEN3001')
console.log(course.courseCode)
addYearOffered(course)
console.log(course.year)
summary(course)
