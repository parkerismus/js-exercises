var countdownGenerator = function(x) {
  var tminus = x;
  return function() {
    if(tminus > 0) {
      console.log("T-minus " + tminus);
    } else if (tminus === 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rocket's already gone, bub!");
    }
    tminus = tminus - 1;
  }
}

var countdown = countdownGenerator(4);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rocket's already gone, bub!
countdown(); // Rocket's already gone, bub!