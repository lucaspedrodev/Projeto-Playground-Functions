// Desafio 1

const um = true;
const dois = true;
const tres = false;

function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
  return true;
} else {
  return false;
}
}
compareTrue(um, dois);

// Desafio 2

function calcArea(base, height) {

  let valorArea = (base * height) / 2;
  return valorArea;
}

// Desafio 3
function splitSentence(param1) {
  let resultado = param1.split('');
  return resultado;
}

// Desafio 4
function concatName(array) {
let teste = array

return teste.length, teste[0]
}


// Desafio 5
function footballPoints(w, t) {
let win = 3
let tie = 1

let quantidadePontos = win * w + tie * t 
return quantidadePontos
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
