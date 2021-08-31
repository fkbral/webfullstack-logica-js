const numeros = [3, 1, 20]

function exibeNaTela() {
  console.log('Navegador conectado!')
}

function colocaNumeroNaLista(lista, numero) {
  console.log(lista)
  lista.push(numero)

  return lista
}

const listaAtualizada = colocaNumeroNaLista(numeros, 100)

// depois de executar colocaNumeroNaLista(numeros, 100)
// Por debaixo dos panos a funcao fará o seguinte:
// const lista = numeros
// const numero = 100
// console.log(lista)
// lista.push(numero)
// return lista

// exibeNaTela()

// console.log(numeros)


// console.log(listaAtualizada)

// javascript
// passagem de parametro por referencia e por valor
// referencia


const listaNomes = ["Felipe", "Bia"]
// quando ... está do lado direito da igualdade é o spread operator
const listaNomesPassadoPorValor = [...listaNomes]
const listaNomesPassadoPorReferencia = listaNomes

listaNomesPassadoPorReferencia.push("Guilherme")
listaNomesPassadoPorValor.push("Jonas")

console.log(listaNomes)
console.log(listaNomesPassadoPorReferencia)
console.log(listaNomesPassadoPorValor)

// quando ... está do lado esquerdo da igualdade é o rest operator
const [elemento1, ...rest] = listaNomes 
console.log(elemento1)
console.log(rest)