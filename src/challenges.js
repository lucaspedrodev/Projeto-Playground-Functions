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
  let resultado = param1.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
let teste = array[array.length-1] + ', ' + array[0];
return teste
}


// Desafio 5 FEITO
function footballPoints(w, t) {
let win = 3
let tie = 1
                                            
let quantidadePontos = win * w + tie * t 
return quantidadePontos
}

// Desafio 6
function highestCount(arrayDeNumeros) {
 let r = 0

 let maiorNumero = Math.max.apply(null, arrayDeNumeros)

 for (let index = 0; index < arrayDeNumeros.length; index += 1) {
  if (maiorNumero < arrayDeNumeros[index]){
    maiorNumero = arrayDeNumeros[index]
  } else if (maiorNumero === arrayDeNumeros[index]){
    r++
  }
  }
  return r++
  }
 

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  if (cat2 > mouse && mouse < cat1) {
    return 'cat1'
  } else if(cat1 > mouse && mouse < cat2){
    return 'cat2'
  }else (cat1 === mouse && cat2 === mouse) {
    return 'os gatos trombam e o rato foge'
  }
   
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
