function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b){
  if (b === 0){
    return "You cannot divide by zero";
  }
  else {
    return a / b;
  }
}

function inc(n){
  return n++;
}

function dec(n){
  return n--;
}

function makeInt(n){
  if (typeof(n) === "number") {
    return n + " is already a number";
  }
  else {
    return parseInt(n, 10);
  }
}

function preserveDecimal(n) {
  if (typeof(n) === "number") {
    return n + " is already a number";
  }
  else {
    return parseFloat(n);
  }
}
