/* eslint-env jest */

const classList = require('../src/classList') // our class list array

describe('Size Function', () => {
  test('the size of the array should be accurate', () => {
    const input = classList.size()
    const output = 0
    expect(input).toEqual(output)
  })
})

describe('Add Student Function', () => {
  test('the class list array should increase by 1 in size', () => {
    classList.clear()
    const input = classList.size()
    classList.add('Student')
    const output = classList.size()
    expect(input + 1).toEqual(output)
  })
  test('the add function should throw an error if there is an empty student entry', () => {
    expect(() => {
      classList.add('')
    }
    ).toThrowError(new Error('Cannot create a student without a name'))
  })
})

describe('Delete Student Function', () => {
  test('the class list array should decrease by 1 in size', () => {
    classList.clear()
    classList.add('Student')
    const input = classList.size()
    classList.delete('Student')
    const output = classList.size()
    expect(input - 1).toEqual(output)
  })
})

describe('Get Student Function', () => {
  test('the student name at a specific index should be returned correctly', () => {
    classList.clear()
    const input = 'getStudent'
    classList.add(input)
    const output = classList.get(0)
    expect(input).toEqual(output)
  })
})

describe('Find Index of Specific Student Name Function', () => {
  test('The student name at a specific index should be returned correctly', () => {
    classList.clear()
    const input = 'findStudent'
    classList.add(input)
    const output = (classList.size() - 1)
    expect(classList.findIndex(input)).toEqual(output)
  })
  test('If the student is not in the classList an error should be thrown', () => {
    classList.clear()
    expect(() => {
      classList.findIndex('findThisStudent')
    }
    ).toThrowError(new Error('Cannot find a student with that name'))
  })
})

describe('Edit Student Function', () => {
  test('The student name at a specific index should be edited correctly', () => {
    classList.clear()
    const input = 'newStudent'
    classList.add('oldStudent')
    var i = classList.findIndex('oldStudent')
    classList.edit('newStudent', i)
    const output = classList.get(i)
    expect(input).toEqual(output)
  })
})

describe('Display Student List', () => {
  test('All students in the list must be displayed', () => {
    classList.clear()
    const input = ['Student 1', 'Student 2', 'Student 3']
    classList.add('Student 1')
    classList.add('Student 2')
    classList.add('Student 3')
    const output = classList.display()
    expect(input).toEqual(output)
  })
})
