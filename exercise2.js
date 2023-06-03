//1. sing console.log() print out the following statement:
console.log('There is no exercise better for the heart than reaching down and lifting people up.')

//2. Using console.log() print out the following quote by Mother Teresa:
console.log('Love is not patronizing and charity isn`t about pity, it is about love. Charity and love are the same -- with charity you give love, so don`t just give money but reach out your hand instead.')

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof 10)

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let numOne = 9.8 
let numInt = parseInt(numOne)
console.log(numInt)

//5. Check if 'on' is found in both python and jargon
let checkOne = 'python and jargon'
console.log(checkOne.indexOf('on'))
console.log(checkOne.lastIndexOf('on'))

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let checkTwo = 'I hope this course is not full of jargon'
console.log(checkTwo.match('jargon'))

//7. Generate a random number between 0 and 100 inclusively.
let randomNumber = Math.random(0-100)
console.log(randomNumber)