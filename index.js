function add(a,b) {
  return a+b;
}
function subtract(a,b) {
  return a-b;
}
function multiply(a,b) {
  return a*b;
}
function divide(a,b) {
  return a/b;
}
var n = 0;
function inc(n) {
  n++;
  return n;
}
function dec(n) {
n--;
  return n;
}

function makeInt(n, base) {
var parsed = parseInt(n, base);
  if (isNaN(parsed)) {
    return 0;
  }
  else {
    return parsed * 10;
}
}
// function preserveDecimal(n) {
//   if (isNaN(n)) {
//     return NaN;
//   }
//   else {
//     return parseFloat(n);
//   }
// }
