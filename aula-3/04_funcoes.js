const lista = [300, 120, 11]

const minhaFuncao = function colocaNumeroNaLista(lista, numero) {
  lista.push(numero)

  return lista
}

// se quiser posso utilizá-la como anônima
// const minhaFuncao = function (lista, numero) {
//   lista.push(numero)

//   return lista
// }

const retorno = minhaFuncao(lista, 22)
console.log(retorno)