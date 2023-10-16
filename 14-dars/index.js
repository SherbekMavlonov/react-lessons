// unit, integration test, e2e test, visual

// jest, vitest

function foo(a, b) {
  return a + b
}
function boo(a, b) {
  return a - b
}

function sum(arr) {
  if (!arr.length) return null
  return arr.reduce((acc, curr) => (acc += curr), 0)
}

module.exports = {
  foo,
  boo,
  sum,
}
