'use strict'

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}.`)
}
greet('Marius', new Date())

export {}
