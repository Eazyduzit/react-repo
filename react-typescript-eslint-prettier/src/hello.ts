'use strict'

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}.`)
}
greet('Marius', new Date())

// parameter type annotation
function greet1(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!')
}
greet1('Marius')

// return type annotations
function getFavouriteNumber(): number {
  return 26
}
getFavouriteNumber()

// functions which return promises
async function getFavouriteNumber1(): Promise<number> {
  return 26
}
getFavouriteNumber1()

export {}
