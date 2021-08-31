const lista = [300, 120, 11]
console.log(lista)

function colocaNumeroNaLista(lista, numero) {
  lista.push(numero)

  return lista
}

const retorno = colocaNumeroNaLista(lista, 22)

console.log(colocaNumeroNaLista(lista, 22))
console.log(retorno)