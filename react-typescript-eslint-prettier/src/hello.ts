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

// interface vs type
// they are very similar and can be chosen between almost freely.
// key difference is that interface can be expanded upon while type is not
// interface Animal {
//   name: string
// }
// interface Bear extends Animal {
//   honey: boolean
// }
// const bear = getBear()
// bear.name
// bear.honey

// type Animal1 = {
//   name: string
// }
// type Bear1 = Animal1 & {
//   honey: boolean
// }
// const bear1 = getBear1()
// bear.name
// bear.honey

// type assertions
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")

// literal types
// let changingString = "Hello World"
// changingString = "Hola Mundo"
// changingString

// strict null checks on
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase())
  }
}
doSomething("World")

// non-null assertion operator (postfix !)
function liveDangerously(x?: number | null) {
  // no error
  console.log(x?.toFixed())
}
liveDangerously(44)

// narrowing
function padLeft(padding: number | string, input: string): string {
  //   throw new Error("Not implemented yet!")
  if (typeof padding === "number") {
    return " ".repeat(padding) + input
  }
  return padding + input
}
padLeft(10, "Hello")

// more type guards
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s)
    }
  } else if (typeof strs === "string") {
    console.log(strs)
  } else {
    // do nothing
  }
}
printAll("Hello, Fellow")

// thruthiness narrowing
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`
  }
  return "Nobody's herre. :("
}
getUsersOnlineMessage(3)

// both of these result in true value
// Boolean("Hello, m8") // type boolean, value true
// !!"and World" // type true, value true

// boolean negations with ! filter out from negated branches
function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
  if (!values) {
    return values
  } else {
    return values.map((x) => x * factor)
  }
}
multiplyAll([3], 5)

// equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // we can now call any "string" method on "x" or "y"
    x.toUpperCase()
    y.toLowerCase()
  } else {
    console.log(x)
    console.log(y)
  }
}
example(3, "Hellaw")

// example with interface
interface Container {
  value: number | null | undefined
}
function multiplyValue(container: Container, factor: number) {
  // remove both null and undefined from the type
  if (container.value != null) {
    console.log(container.value * factor)
    // now we can safely multiply container.value
    container.value *= factor
  }
}
multiplyValue({ value: 9 }, 3)

export {}
