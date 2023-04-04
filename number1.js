function randomInteger(min, max) {
  if (min == null || max == null) {
    return 0;
  } else if (max === 0) {
    max = min;
    min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.round(Math.random() * (max - min + 1)) + min;
  }
}

console.log(randomInteger(20, 1));
console.log(randomInteger(null, null));
console.log(randomInteger(1, 10));
console.log(randomInteger(6));
console.log(randomInteger());
