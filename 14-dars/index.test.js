const { foo, boo, sum } = require('./index')

describe('#foo', () => {
  test('biz foo degan funksiyani tekshiryabmiz', () => {
    expect(foo(1, 2)).toBe(3)
    expect(foo(1, 4)).toBe(5)
  })
})

describe('#boo', () => {
  test('biz boo degan funksiyani tekshiryabmiz', () => {
    expect(boo(1, 2)).toBe(-1)
  })
})

describe('#sum', () => {
  test('biz sum degan funksiyani tekshiryabmiz', () => {
    expect(sum([1, 2, 3])).toBe(6)
  })

  test('sumni null uchun tekshirish', () => {
    expect(sum([])).toBeNull()
  })
})
