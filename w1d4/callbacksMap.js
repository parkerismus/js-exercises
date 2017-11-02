var words = ["ground", "control", "to", "major", "tom"];

map = function(array, cb) {
 var result = [];
 for(var i = 0; i < array.length; i++) {
    result.push(cb(words[i]));
 }
 return result;
};

var lengthOfWords = map(words, function(word) {
  return word.length;
});

console.log(lengthOfWords);


var capitals = map(words, function(word) {
  return word.toUpperCase();
});

console.log(capitals);


var backwards = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(backwards);