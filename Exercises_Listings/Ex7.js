const numbers = [76, 55.7, 89, 37.5, 61]
numbers.push(19) // puts 19 in the last element of array
numbers.unshift(61) // puts 61 in first (0) position of array
numbers[1] = 12 // Number 76 becomes 12
numbers.splice(3, 1, 99) // Number at position 3 i.e. number 89 becomes 99
console.log(numbers)
console.log(numbers[7]) // returns undefined because there aren't seven elements in the array
