function filterByTerm (inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, 'i')
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(regex)
  })
}

// Describe is a jest method for containing one or more
// related tests. New suite of tests for functionality
// must be written here

// Two arguments string for describing test suite
// and a callback function

describe('Filter function', () => {
  test('it should filter by a search term (link)', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' }
    ]

    const output = [{ id: 3, url: 'https://www.link3.dev' }]

    expect(filterByTerm(input, 'link')).toEqual(output) // first test
    expect(filterByTerm(input, 'LINK')).toEqual(output) // New test
    expect(filterByTerm(input, 'uRl')).not.toBe(output) // Exercise Test 1.
    expect(filterByTerm(input, '')).not.toBe(output) // Exercise Test 2.
  })
})
