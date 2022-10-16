// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case. */

function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)        // https://www.baeldung.com/cs/pre-increment-vs-post-increment
    for (j = i + 1; j < str.length; ++j)
      if (str[i] === str[j])
        return false;
  return true;
}

// refactoring
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}
