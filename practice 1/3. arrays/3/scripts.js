function mergeUnique(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(mergeUnique([1, 2, 3], [3, 4, 5])); 
console.log(mergeUnique([7, 8], [8, 9, 10]));    
console.log(mergeUnique([], [1, 2, 3]));      