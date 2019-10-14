// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  const wordLen = str.length;
  let revWord = "";
  for(let i=wordLen-1; i>=0; i--) {
    revWord += str[i];
  }
  return revWord
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');

  return revString === str;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revInt = int.toString().split('').reverse().join('');
  
  return parseInt(revInt)
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let finalStr = str.split(" ")
  let strAdd = ""
  let finalArray = []
  for (i of finalStr) {
    strAdd = i[0].toUpperCase() + i.substring(1);
    finalArray.push(strAdd);
  }
  finalArray.join(" ");
  return finalArray
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  maxChar = ""
  currentChar = ""
  for (i of str){
    console.log(i);
  }

}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {

}



// Call Function
const output = reverseString('goodbye');
const palin = isPalindrome("tacocat");
const tryReverse = reverseInt(521);
const capLet = capitalizeLetters("i love javascript");

console.log(output);
console.log(palin);
console.log(tryReverse);
console.log(capLet);