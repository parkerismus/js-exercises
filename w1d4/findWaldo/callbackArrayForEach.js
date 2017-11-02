// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, i) {
//  for (var i = 0; i < arr.length; i++) {
    if (element === "Waldo") {
      found(i);   // execute callback - added i as parameter
    }
  });
}

function actionWhenFound(i) { // added i as parameter
  console.log("Found Waldo at " + i); // modified output statement with i
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);