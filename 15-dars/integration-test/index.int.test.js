const fs = require('fs')
const { loginUser } = require('./index')

describe('#loginUser', () => {
  test('login Success', () => {
    const data = loginUser('John')
    expect(data).toBe(true)

    const isLogged = fs.readFileSync('John.text', 'utf-8', (err) => {
      console.log(err)
    })
    expect(isLogged).toBe('John')
  })
})
