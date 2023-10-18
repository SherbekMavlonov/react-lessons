const fs = require('fs')

function loginUser(name) {
  try {
    fs.writeFileSync(`${name}.text`, name, (err) => {
      console.log(err)
    })
    return true
  } catch (err) {
    return false
  }
}

module.exports = { loginUser }
