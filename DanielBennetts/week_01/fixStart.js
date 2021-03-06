/*FixStart

Create a function called fixStart. It should take a single argument, a string,
 and return a version where all occurences of its first character have been
 replaced with '*', except for the first character itself. You can assume that
  the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
*/

var fixStart = function(string) {
  var str = string[0];
  return str + string.slice(2).replace(new RegExp(str, 'g'), '*');
}

fixStart("babble")
