function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4));  
console.log(sumAll(5, 10, 15));   
console.log(sumAll());            