const { sayHello, diff } = require('./script')

describe('#sayHello', () => {
  test('John Doe', () => {
    expect(sayHello('John Doe')).toBe('Hello John Doe')
  })
})

describe('#diff', () => {
  test('5 and 6 difference', () => {
    expect(diff(5, 6)).toBe(-1)
  })
})
