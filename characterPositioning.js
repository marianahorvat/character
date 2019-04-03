function countLetters (mystring) {
  var nospace = mystring.split(" ").join('');  
  var myobject = {};

  for (var i = 0; i < nospace.length; i++) {
    var myletter = nospace[i];
    var index = i;

    if (myletter in myobject) {
      myobject[myletter].push(index);
    } else {
      myobject[myletter] = [];
      myobject[myletter].push(index);
    }
  }
  return myobject;
}

console.log(countLetters("lighthouse in the house"));

