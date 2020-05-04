/* eslint-env jest */

describe('Filter function', () => {
  test('it should filter by a search term (link)', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' }
    ]
    const output = [{ id: 3, url: 'https://www.link3.dev' }]

    expect(filterByTerm(input, 'link')).toEqual(output)

    expect(filterByTerm(input, 'LINK')).toEqual(output)
  })

  test('it should filter by a search term (url)', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' }
    ]
    const output = [{ id: 1, url: 'https://www.url1.dev' }, { id: 2, url: 'https://www.url2.dev' }]

    expect(expect(filterByTerm(input, 'uRl')).toEqual(output))
  })
})

test(' it should throw when searchTerm is empty string', () => {
  const input = [
    { id: 1, url: 'https://www.url1.dev' },
    { id: 2, url: 'https://www.url2.dev' },
    { id: 3, url: 'https://www.link3.dev' }
  ]

  const arr = []

  expect(() => {
    filterByTerm(input, '')
  }
  ).toThrowError(new Error('searchTerm cannot be empty'))
  expect(() => {
    filterByTerm(arr, 'link')
  }
  ).toThrowError(new Error('inputArr cannot be empty'))
})

const filterByTerm = require('../src/filterByTerm')
// function filterByTerm (inputArr, searchTerm) {
//   if (!searchTerm) throw Error('Search term must be present')
//   const regex = new RegExp(searchTerm, 'i')
//   return inputArr.filter(function (arrayElement) {
//     return arrayElement.url.match(regex)
//   })
// }
