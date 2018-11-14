var realNumber = "1234";

const guess = function(number1) {
  // TODO: Logic Here
  let result = "";
  console.log(realNumber);

  let real = realNumber.split("");
  let actual = number1.split("");

  actual.forEach(element => {
    // TODO: Si elemnt esta en real entonces agregue una O o una X a result
  });


  return result;
}

const setNumber = function (number1) {
  realNumber = number1;
}

module.exports.guess = guess;
module.exports.setNumber = setNumber;