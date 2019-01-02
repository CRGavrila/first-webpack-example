require("@babel/runtime/regenerator");
require("./main.css");
require("./index.html");

const a = async (args) => {
  const { a, b } = args;
  await  console.log("Hello async fat arrow", a, b);
  console.log("Then");
  console.log("Then");
}
a({ a:1, b:2 })