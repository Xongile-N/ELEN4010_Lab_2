// Private
const list = []
// Public
module.exports = {
  add: function (student) {
    if (!student) {
      throw Error('Cannot create a student without a name')
    }
    list.push(student)
  },
  edit: function (student, index) {
    list[index] = student
  },
  get: function (index) {
    return list[index]
  },
  delete: function (index) {
    list.splice(index, 1) // remove one element starting from index
  },
  findIndex: function (name) {
    if (list.indexOf(name) < 0) {
      throw Error('Cannot find a student with that name')
    }
    return list.indexOf(name) // find the index of the student name
  },
  display: function () {
    return list // displays all students in the list
  },
  size: function () {
    return list.length
  },
  clear: function () {
    list.length = 0
  }
}
