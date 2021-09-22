// Create a function that returns the sum of the two lowest positive numbers, given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.

const sumTwoSmallestNumbers = (numbers) => {  
    
    let sum = 0;
  
    // put array on crescent order
    // https://www.codegrepper.com/code-examples/javascript/frameworks/reafunction./put+array+on+crescent+order+javascript
    let lowestToHighest = numbers.sort((a, b) => a - b);
  
    for(let x in lowestToHighest) {
        // checking the number is a positive integer and the array size is >= 4
        if (Number.isInteger(lowestToHighest[x]) && lowestToHighest[x] >= 0 && lowestToHighest.length >= 4) {
          sum = lowestToHighest[0] + lowestToHighest[1];
          return sum;
        }
        else{
          return console.error('Please don\'t pass float or negative integers');
        }
    } 
}