function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 }; 
}

const obj1 = { name: "Alice", age: 25 };
const obj2 = { age: 30, city: "London" };

console.log(mergeObjects(obj1, obj2)); 
