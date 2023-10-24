"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "."));
}
greet("Marius", new Date());
// parameter type annotation
function greet1(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet1("Marius");
// return type annotations
function getFavouriteNumber() {
    return 26;
}
getFavouriteNumber();
// functions which return promises
function getFavouriteNumber1() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 26];
        });
    });
}
getFavouriteNumber1();
// anonymous functions
// contextual typing for function
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// contextual typing also applies to arrow functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// object types
// the parameters type annotation is an object type
function printCoord(pt) {
    console.log("The Coordinate's x value is " + pt.x);
    console.log("The Coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// optional properties
function printName(obj) {
    if (obj.last == undefined) {
        console.log("".concat(obj.first));
    }
    else {
        console.log("".concat(obj.first, " ").concat(obj.last));
    }
}
printName({ first: "John" });
printName({ first: "John", last: "Cena" });
// union types
function printID(id) {
    if (id === "string") {
        // in this branch, id is of type string
        console.log(id.toUpperCase());
    }
    else {
        // here, id is of type number
        console.log(id);
    }
}
printID(101);
printID("202");
printID({ myID: 22342 });
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // here, x is string[]
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // here, x is string
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(["Johhny", "Jenny"]);
welcomePeople("Johhny");
// return type is inferred as number[] | string
function getFirstThree(x) {
    return x.slice(0, 3);
}
getFirstThree([2, 4, 6, 8]);
getFirstThree("Johnny");
// same example as before
function printCoord1(pt) {
    console.log("The Coordinate's x value is " + pt.x);
    console.log("The Coordinate's y value is " + pt.y);
}
printCoord1({ x: 100, y: 100 });
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
function doSomething(x) {
    if (x === null) {
        // do nothing
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
doSomething("World");
// non-null assertion operator (postfix !)
function liveDangerously(x) {
    // no error
    console.log(x === null || x === void 0 ? void 0 : x.toFixed());
}
liveDangerously(44);
// narrowing
function padLeft(padding, input) {
    //   throw new Error("Not implemented yet!")
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
padLeft(10, "Hello");
// more type guards
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
printAll("Hello, Fellow");
// thruthiness narrowing
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return "There are ".concat(numUsersOnline, " online now!");
    }
    return "Nobody's herre. :(";
}
getUsersOnlineMessage(3);
// both of these result in true value
// Boolean("Hello, m8") // type boolean, value true
// !!"and World" // type true, value true
// boolean negations with ! filter out from negated branches
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(function (x) { return x * factor; });
    }
}
multiplyAll([3], 5);
// equality narrowing
function example(x, y) {
    if (x === y) {
        // we can now call any "string" method on "x" or "y"
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
example(3, "Hellaw");
function multiplyValue(container, factor) {
    // remove both null and undefined from the type
    if (container.value != null) {
        console.log(container.value * factor);
        // now we can safely multiply container.value
        container.value *= factor;
    }
}
multiplyValue({ value: 9 }, 3);
function moveAnimal(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
var fish = {
    swim: function () {
        console.log("Fish is swimming");
    },
};
moveAnimal(fish);
// example 2
// type Fish1 = { swim: () => void }
// type Bird1 = { fly: () => void }
// type Human1 = { swim?: () => void; fly?: () => void }
// function moveAnimal1(animal1: Fish1 | Bird1 | Human1) {
//   if ("swim" in animal1) {
//     animal1
//   } else {
//     animal1
//   }
// }
// MORE ON FUNCTIONS
// function type expressions
function greeter(fn) {
    fn("Hello, Today");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething1(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description";
doSomething1(myFunc);
function fn(ctor) {
    return new ctor("Hei");
}
