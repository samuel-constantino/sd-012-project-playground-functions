// Desafio 10
function techList(listaDeTecnologias, name) {
  if (listaDeTecnologias.length === 0) {
    return 'Vazio!';
  }
  let listaOrdenada = listaDeTecnologias.sort();
  let listaDeObjetos = [];
  for (let value of listaOrdenada) {
    listaDeObjetos.push({
      tech: value,
      name: name,
    });
  }
  return listaDeObjetos;
}
// let listaDeTecnologias = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
// console.log(techList(listaDeTecnologias, 'Samuel'));

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
  let listaFormatada = '('
  for (let key in listaDeNumeros) {
    if (key == 0) {
      listaFormatada += listaDeNumeros[key];
    } else if (key == 1) {
      listaFormatada += listaDeNumeros[key] + ') '
    } else if (key > 1 && key <= 6){
      listaFormatada += listaDeNumeros[key];
    } else if (key >= 7) {
      if (key == 7) {
        listaFormatada += '-' + listaDeNumeros[key];
      } else {
        listaFormatada += listaDeNumeros[key];
      }
    }
  }
  return listaFormatada;
}
let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(listaDeNumeros));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
