"use strict"

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}.`)
}
greet("Marius", new Date())

// parameter type annotation
function greet1(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!")
}
greet1("Marius")

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

// anonymous functions
// contextual typing for function
const names = ["Alice", "Bob", "Eve"]
names.forEach(function (s) {
  console.log(s.toUpperCase())
})
// contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase())
})

// object types
// the parameters type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The Coordinate's x value is " + pt.x)
  console.log("The Coordinate's y value is " + pt.y)
}
printCoord({ x: 3, y: 7 })

// optional properties
function printName(obj: { first: string; last?: string }) {
  if (obj.last == undefined) {
    console.log(`${obj.first}`)
  } else {
    console.log(`${obj.first} ${obj.last}`)
  }
}
printName({ first: "John" })
printName({ first: "John", last: "Cena" })

export {}
