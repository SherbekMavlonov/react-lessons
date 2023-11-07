// function foo(arr, callback, initialValue) {}

// currying

// const foo = (a) => {
//   return (b) => {
//     return b ? foo(a + b) : a
//   }
// }

// console.log(foo(1)(2)(3)(5))

// 'use strict'
// const a = 'Hello world'
// a[0] = 'h'

// console.log(a)

// const arr = [1, 2, 3]

// const arr1 = arr.reverse().push(123)

// const arr2 = arr.push(12312312312312)

// console.log(arr)
// console.log(arr1)
// console.log(arr2)

// const obj = {
//   key1: 'Val1',
//   key2: 'Val2',
// }

// obj.__proto__.key3 = 'Val3'

// for (const iterator of Object.keys(obj)) {
//   console.log(iterator)
// }

// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(key)
//   }
// }
// console.log(null == undefined)

// const obj = {
//   key: 'value',
// }
// const obj1 = {
//   key: 'value',
// }

// console.log(Object.is(obj, obj1))

// console.log(obj === obj)
// console.log({} === {})

// const a = {
//   foo() {
//     console.log(this)
//   },

//   bar() {
//     const a = () => {
//       console.log(this)
//     }
//     a()
//   },
// }

// a.bar()
// a.foo()

// const d = 56
// one()
// function one() {
//   var a = 10
//   two()
//   function two() {
//     const b = 30
//     third()
//   }
// }

// function third() {
//   let c = 11
//   console.log(a + b + c + d)
// }

// console.log('Begin')

// setTimeout(() => {
//   console.log('1')
// }, 0)

// new Promise((resolve, reject) => resolve('2')).then((res) => console.log(res))

// new Promise((resolve, reject) => {
//   for (let i = 0; i < 1000; i++) {}
//   resolve('3')
// }).then((res) => console.log(res))

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('4')
//   }, 0)
//   setTimeout(() => {
//     resolve('4')
//   }, 1000)
// }).then((res) => console.log(res))

// console.log('Finish')

// Baxriddin

// Begin, 2, 3, 4, finish, 1

// Suhrob
// Begin, Finish, 2,3,4,1

// Asadbek

// Begin, Finish, 2,1,4,3

// const btn = document.querySelector('#test')

// btn.addEventListener('click', function (e) {
//   console.log(e.currentTarget)
// })
