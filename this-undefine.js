const person = {
  name: "Max",
  age: 29,
  greet: () => {
    console.log("Hi, I am " + this.name);
    // this is undefined because this refers to the global object
  },
};
person.greet();
