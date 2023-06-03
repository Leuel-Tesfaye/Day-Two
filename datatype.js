// primitive data types can not be modified let's see an example 
let numOne = 3
const pi= 3.14 // for non-changing value we use const 
console.log(pi)
console.log(numOne)

//math method
const PI = Math.PI  
console.log(PI)

//random number generator 
let randomNum = Math.random()
console.log(randomNum)

// string 
let firstName = "Leuel"
let carrier = "Programmer"
let specialty = "Frontend developer"

// string concatenation 
let fullDisclosure = firstName + " "+ carrier +" "+ specialty
console.log(fullDisclosure)

// replace() this method take a parameter the old substring and new substring 
let string = '30 days of Javascript'
console.log(string.replace('Javascript', 'python'))

// concat() this method in js it takes many strings and joins them 
let String = '30'
console.log(String.concat('days', ' ', 'of', ' ', 'javascript'))

// search() this method takes substring as an argument and it returns the Index of the first match
let string3= "I love learning Javascript"
console.log(string3.search('love'))

// type of .... checks the datatypes of elements
console.log(typeof "Leuel Tesfaye")
console.log(typeof 10)
console.log(typeof 3.576)
console.log(typeof true)
console.log(typeof NAN)

//type casting 
let num1 = 10.4
let numInt = parseInt(num1)
console.log(numInt)

//example 2 for type casting 
let num2 = 20
let numFloat = parseFloat(num2)
console.log(numFloat)


// non-primitive data types are modifiable those are objects and arrays let's start with array data types

let numbers = [1,2,3]
numbers[0] = 10 
console.log(numbers)
// now let's see object data types 

let students = {
    name: "Leuel",
    role: "student",
    country: "dessie"
}
console.log(students)

