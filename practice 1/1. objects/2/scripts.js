function hasProperty(obj, key) {
  return obj.hasOwnProperty(key);
}

const user = { name: "Bob", age: 30 };
console.log(hasProperty(user, "age")); // true
console.log(hasProperty(user, "city")); // false