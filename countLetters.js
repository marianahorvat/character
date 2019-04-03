function countLetters (mystring) {
  var nospace = mystring.split(" ").join('');   // removed spaces of string
  var myobject = {};

  for (var i = 0; i < nospace.length; i++) {

    if (myobject[nospace[i]] === undefined) {
      myobject[nospace[i]] = 1;
    } else { 
      myobject[nospace[i]] +=1;
    }
  }
  return myobject;
}

console.log(countLetters("lighthouse in the house"));
//return to us all the unique characters that exist in a string that is passed into the function.
