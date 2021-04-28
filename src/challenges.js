// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  }
  return false;
}
// console.log('Requisito 1 - Comparar booleanos: '+compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log('Requisito 2 - Área do triângulo: ' + calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
// console.log('Requisito 3: Fatiar string por espaços: ' + splitSentence('go trybe'));

// Desafio 4
function concatName(listaDeNomes) {
  return listaDeNomes[listaDeNomes.length - 1] + ', ' + listaDeNomes[0];
}
// let listaDeNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log('Requisito 4: concatenar itens de array em string: ' + concatName(listaDeNomes));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
// console.log('Requisito 5 - Quantidade de pontos no football: ' + footballPoints(1, 2));

// Desafio 6
function highestCount(listaDeNumeros) {
  let maiorNumero = listaDeNumeros[0];
  let numeroDeRepeticao = 0;
  for (let value of listaDeNumeros) {
    if(value > maiorNumero){
      maiorNumero = value;
    }
  }
  for (let value of listaDeNumeros){
    if(value === maiorNumero){
      numeroDeRepeticao += 1;
    }
  }
  return numeroDeRepeticao;
}
let listaDeNumeros = [9, 1, 2, 3, 9, 5, 7];
console.log('Requisito 6 - identificar quantidade de repetições do maior número: ' + highestCount(listaDeNumeros));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } else if (cat1 - mouse > cat2 - mouse) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// console.log('Requisito 7: caça ao rato: ' + catAndMouse(1, 4, 3));

// Desafio 8
function fizzBuzz(listaDesafio08) {
  let resultado = [];
  for(let value of listaDesafio08) {
    if (value % 3 === 0) {
      if (value % 5 === 0){
        resultado.push('fizzBuzz');
      } else {
        resultado.push('fizz');
      }
    } else if (value % 5 === 0) {
      resultado.push('Buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
let listaDesafio08 = [2, 15, 7, 9, 45];
// console.log('Requisito 8: FizzBuzz: ' + fizzBuzz(listaDesafio08));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
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
};
