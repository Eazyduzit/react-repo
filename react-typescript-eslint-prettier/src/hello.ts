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

// union types
function printID(id: number | string | object) {
  if (id === "string") {
    // in this branch, id is of type string
    console.log(id.toUpperCase())
  } else {
    // here, id is of type number
    console.log(id)
  }
}
printID(101)
printID("202")
printID({ myID: 22342 })

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // here, x is string[]
    console.log("Hello, " + x.join(" and "))
  } else {
    // here, x is string
    console.log("Welcome lone traveler " + x)
  }
}
welcomePeople(["Johhny", "Jenny"])
welcomePeople("Johhny")

// return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3)
}
getFirstThree([2, 4, 6, 8])
getFirstThree("Johnny")

// type aliases
type Point = {
  x: number
  y: number
}
// same example as before
function printCoord1(pt: Point) {
  console.log("The Coordinate's x value is " + pt.x)
  console.log("The Coordinate's y value is " + pt.y)
}
printCoord1({ x: 100, y: 100 })

// type aliases can name union types
// type ID = number | string

// type UserInputSanitizedString = string

// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str)
// }
// creat a sanitized input
// let userInput = sanitizeInput(getInput())

// can still be re-assigned with a string though
// userInput = "new input"

export {}
