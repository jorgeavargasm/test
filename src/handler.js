"use strict";

module.exports.testFunction = (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("the Random generated integer is: ", randomNumber);
  return randomNumber;
};
