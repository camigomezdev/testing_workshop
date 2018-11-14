// Import test
let test = require('assert');
var codebreaker = require('../codebreaker');

describe('Test pass', function () {
  it('is true', function () {
    let saludo = "Hola";
    test.equal(saludo, "Hola", "Saludo es no igual a Hola");
  })
})

describe('Codebreaker Test', function () {

  beforeEach(function () {
    codebreaker.setNumber('5612')
  })

  it('Debe retornar un o', function () {
    let result = codebreaker.guess("0981");
    test.equal(result, "o", "Tiene mas o menos de un numero correcto en la posicion equivocada");
  })

  it('Debe retornar un ox', function () {
    let result = codebreaker.guess("1928");
    test.equal(result, "ox", "Esta equivocado");
  })
})
