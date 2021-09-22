// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// The length of the array will always be at least 2. The array will always contain letters in only one case.

// arrow function notation : https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/review-functions
// more on arrow function : https://www.w3schools.com/Js/js_arrow_function.asp
const findMissingLetter = (array) => {
  
  // The sort() method sorts an array alphabetically 
  array.sort();
  
  for (let i = 0; i < array.length; i++) {
    // get the char code of the current letter
    let current = array[i].charCodeAt();
    // get the char code of the next letter
    let next = array[i+1].charCodeAt();
  
    if (next - current !== 1) {
      // get the character after the current one
      return String.fromCharCode(current+1); 
    }
  }
  // if nothing is found
  return null;
}

// https://stackoverflow.com/questions/53144631/find-the-missing-letter-in-an-array