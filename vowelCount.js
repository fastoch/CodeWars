// Program to count the number of vowels in a string
function vowelCount (str) {
    //initialize the result to avoid null pointer exception with .length property
    let result = 0;

    //find the number of vowels
    const count = str.match(/[aeiou]/gi);

    //we can't apply .length property to null, so we check if the match() method doesn't return null
    if (count !== null) {
        result = count.length;
    }
    
    return result;
}


/* The regular expression (RegEx) pattern is used with the match() method to find the number of vowels in a string.
The pattern /[aeiou]/gi checks for all the vowels (case-insensitive) in a string.
g = global search (otherwise it returns only the first result)
i = case insensitive */