// https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript?filter=me&sort=best_practice&invalids=false
// Check if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

function XO(str) {
  nbx = 0;
  nbo = 0;
  let array = str.split('');
  for(i = 0; i < array.length; i++) {
    if (array[i] == 'x' | array[i] == 'X') { nbx++; }
    if (array[i] == 'o' | array[i] == 'O') { nbo++; }
  }
  if (nbo == nbx && nbx == 0) { return true; }
  else if (nbo == nbx && nbx != 0) { return true; }
  else { return false; }
}
