function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i; 
  }
  return result;
}

console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(3)); 