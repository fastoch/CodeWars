// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

    /* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
    Implement a function that determines whether a string that contains only letters is an isogram. 
    Assume the empty string is an isogram. Ignore letter case. */

function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)            // https://www.baeldung.com/cs/pre-increment-vs-post-increment
    for (j = i + 1; j < str.length; ++j)
      if (str[i] === str[j])
        return false;
  return true;
}

// Refactoring
function isIsogram(str){ 
  return !/([a-z]).*\1/i.test(str)
}

// Refactoring explanation

    /* The above regex is testing the string to check if it has repeating letters.
    The ! means "return true if the given string does not match the following regex".
    So, our regex must look for repeating letters.

    The regex itself is contained between the first slash and the last one, which gives : ([a-z]).*\1

    The parentheses define a capturing group.
    The period signifies any character at all - whether a letter, number, space, symbol etc.
    The n* quantifier matches any string that contains zero or more occurrences of n. 
    In our case, n is the period (any character).

    So far, we look for an expression that contains a letter, followed by zero or more occurrences of any character.

    The next part is \1 - A backslash followed by a number is used to point to the capture group defined earlier ([a-z]). 
    Essentially, the engine treats the first matched letter as a variable, and looks for the exact same letter again.

    Finally, the i flag indicates that case should be ignored while attempting a match in a string. */
