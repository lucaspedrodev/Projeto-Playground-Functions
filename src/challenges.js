// Desafio 1

const um = true;
const dois = true;
const tres = false;

function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}
compareTrue(um, dois);

// Desafio 2

function calcArea(base, height) {
  let valorArea = (base * height) / 2;
  return valorArea;
}

// Desafio 3
function splitSentence(param1) {
  let resultado = param1.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let teste = `${array[array.length - 1]}, ${array[0]}`;
  return teste;
}

// Desafio 5 FEITO
function footballPoints(w, t) {
  let win = 3;
  let tie = 1;

  let quantidadePontos = win * w + tie * t;
  return quantidadePontos;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let r = 0;

  let maiorNumero = Math.max.apply(null, arrayDeNumeros);

  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (maiorNumero === arrayDeNumeros[index]) {
      r++;
    }
  }
  return r++;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let poscat1 = Math.abs(mouse - cat1);
  let poscat2 = Math.abs(mouse - cat2);

  if (poscat1 < poscat2) {
    return 'cat1';
  } if (poscat2 < poscat1) {
    return 'cat2';
  } if (poscat1 === poscat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array1) {
  let resultado = [];

  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] % 5 === 0 && array1[index] % 3 === 0) {
      resultado.push('fizzBuzz');
    } else if (array1[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (array1[index] % 5 === 0) {
      resultado.push('buzz');
    } else if (array1[index] % 5 && 3 !== 0) {
      resultado.push('bug!');
    }
  }
  return resultado;
}
console.log(fizzBuzz(3, 5));
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
