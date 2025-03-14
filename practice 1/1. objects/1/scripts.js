function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  const user = { name: "Alice", age: 25, city: "New York" };
  console.log(countProperties(user));  