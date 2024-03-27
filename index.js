console.log("Hello World!");

function add(a, b) {
  return a + b;
}

module.exports = add;
// Path: index.test.js

const add = require("./index");

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

test("add", () => {
    expect(add(1, 2)).toBe(3);
    });

// Path: package.json
const { jest } = require("jest");