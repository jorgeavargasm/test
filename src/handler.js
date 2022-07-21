"use strict";

module.exports.testFunctionNumber2 = (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("the Random generated integer is: ", randomNumber);
  return randomNumber;
};
