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
  let numeroDeRepeticao = 0;
  let maiorNumero = listaDeNumeros[0];
  for (let value of listaDeNumeros) {
    if (value > maiorNumero) {
      maiorNumero = value;
    }
  }
  for (let value of listaDeNumeros) {
    if (value === maiorNumero) {
      numeroDeRepeticao += 1;
    }
  }
  return numeroDeRepeticao;
}
// let listaDeNumeros = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(maiorNumero(listaDeNumeros), listaDeNumeros));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1ToMouse = Math.abs(cat1 - mouse);
  let cat2ToMouse = Math.abs(cat2 - mouse);
  if (cat1ToMouse < cat2ToMouse) {
    return 'cat1';
  } else if (cat1ToMouse > cat2ToMouse) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log('Requisito 7: caça ao rato: ' + catAndMouse(-1, 0, 1));

// Desafio 8

function divisivelPorCinco(value){
  if (value % 5 === 0){
    return 'fizzBuzz';
  } else {
    return 'fizz';
  }
}
function fizzBuzz(listaDesafio08) {
  let resultado = [];
  for (let value of listaDesafio08) {
    if (value % 3 === 0) {
      resultado.push(divisivelPorCinco(value));
    } else if (value % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
let listaDesafio08 = [10, 6, 7, 15];
console.log(fizzBuzz(listaDesafio08));

// Desafio 9
function encode(fraseDesafioEncode) {
  let listaDeLetras = fraseDesafioEncode.split("");
  for (let key in listaDeLetras) {
    switch (listaDeLetras[key]) {
    case 'a':
      listaDeLetras[key] = 1;
      break;
    case 'e':
      listaDeLetras[key] = 2;
      break;
    case 'i':
      listaDeLetras[key] = 3;
      break;
    case 'o':
      listaDeLetras[key] = 4;
      break;
    case 'u':
      listaDeLetras[key] = 5;
      break;
    default :
    }
  }
  return listaDeLetras.join("");
}
console.log(encode('hi there!'));

function decode(fraseDesafioDecode) {
  let listaDeLetras = fraseDesafioDecode.split("");
  let fraseDescodificada = "";
  for (let key in listaDeLetras) {
    switch (listaDeLetras[key]) {
    case '1':
      listaDeLetras[key] = 'a';
      break;
    case '2':
      listaDeLetras[key] = 'e';
      break;
    case '3':
      listaDeLetras[key] = 'i';
      break;
    case '4':
      listaDeLetras[key] = 'o';
      break;
    case '5':
      listaDeLetras[key] = 'u';
      break;
    default :
    }
  }
  for (let value of listaDeLetras) {
    fraseDescodificada += value;
  }
  return fraseDescodificada;
}
// console.log(decode('h3 th2r2!'));

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
