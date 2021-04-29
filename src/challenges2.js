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
function generatePhoneNumber() {
  // seu código aqui
}

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
