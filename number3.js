function numeric(input) {
  if (typeof input === 'number' && !isNaN(input)) {
    return true;
  } else if (typeof input === 'string' && !isNaN(input) && input.trim() !== '') {
    return true;
  } else {
    return false;
  }
}

console.log(numeric(12));
console.log(numeric('abcd'));
console.log(numeric('12'));
console.log(numeric(' '));
console.log(numeric(1.2));
console.log(numeric(-200));
