// iife
// immediately invoked function expression

const lista = [300, 120, 11]
console.log(lista)

;(function mudaLista (lista, numero) {
  lista.push(numero)

  return lista
})(lista, 22)


console.log(lista)
console.log(mudaLista(lista,23))