var buttonGuess = document.getElementById("guess");
var number = document.getElementById("number");
var list = document.getElementById("list");

buttonGuess.addEventListener("click", function () {
  newNumber = number.value;
  result = guess(newNumber);

  console.log(newNumber);

  list.innerHTML += `
  <tr>
    <td>${newNumber}</td>
    <td>${result}</td>
  </tr>
  `;
});
