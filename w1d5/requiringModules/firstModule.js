function cubed(number) {
  return number * number * number;
}


function sphereVolume(radius) {
  return 4/3 * Math.PI * cubed(radius);
}



module.exports = {
  sphereVolume: sphereVolume
}