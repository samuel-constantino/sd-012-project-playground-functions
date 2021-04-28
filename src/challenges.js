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
