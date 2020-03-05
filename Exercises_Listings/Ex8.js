'use strict'

const arr = [1, 2, 3, 4, 5]

const newArr = []
arr.forEach(function (element) {
  element = element + 1
  console.log(element)
  newArr.push(element)
})

console.log(newArr)

const mapTest = newArr.map(x => x * x)
console.log(mapTest)
