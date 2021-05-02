// Desafio 10
function techList(listaDeTecnologias, name) {
  if (listaDeTecnologias.length === 0) {
    return 'Vazio!';
  }
  // let listaOrdenada = listaDeTecnologias.sort();
  let listaDeObjetos = [];
  // percorre listaDeTecnologias ordenada
  for (let value of listaDeTecnologias.sort()) {
    listaDeObjetos.push(
      {
      tech: value,
      name: name,
    });
  }
  return listaDeObjetos;
}
let listaDeTecnologias = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
console.log(techList(listaDeTecnologias, 'Samuel'));

// Desafio 11
function generatePhoneNumber(listaDeNumeros) {
  if (listaDeNumeros.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  let numeroDeRepeticoes;
  let valorNegativoOuMaiorQueNove = false;
  for (let value of listaDeNumeros) {
    numeroDeRepeticoes = 0;
    for (let value2 of listaDeNumeros) {
      if (value == value2) {
        numeroDeRepeticoes += 1;
      }
    }
    if (value < 0 || value > 9) {
      valorNegativoOuMaiorQueNove = true;
    }
    if (numeroDeRepeticoes >= 3 || valorNegativoOuMaiorQueNove) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${listaDeNumeros[0]}${listaDeNumeros[1]}) ${listaDeNumeros[2]}${listaDeNumeros[3]}${listaDeNumeros[4]}${listaDeNumeros[5]}${listaDeNumeros[6]}-${listaDeNumeros[7]}${listaDeNumeros[8]}${listaDeNumeros[9]}${listaDeNumeros[10]}`;
}
// let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(listaDeNumeros));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangulo = false;
  let medidaABC = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
  let medidaBAC = (lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC));
  let medidaCAB = (lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB));
  if (medidaABC && medidaBAC && medidaCAB) {
    triangulo = true;
    return triangulo;
  }
  return triangulo;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(frase) {
  let numerosEmString = frase.replace(/([^\d])+/gim, '');
  let numerosSomados = 0;
  for (let key in numerosEmString) {
    numerosSomados += parseInt(numerosEmString[key]);
  }
  if (numerosSomados > 1) {
    return numerosSomados + ' copos de água';
  }
  return numerosSomados + ' copo de água';
  
}
// console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
