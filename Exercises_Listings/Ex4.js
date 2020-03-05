'use strict'

const convert = function (F) {
  return (F - 32) * (5 / 9)
}

const celcius = convert(60)
console.log(celcius)
