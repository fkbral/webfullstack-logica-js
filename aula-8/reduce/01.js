const numeros = [23, 12, 24, 34, 66, 100]

let soma = 0

for (let numero of numeros) {
  // soma = soma + numero
  soma += numero
  // se eu não tivesse declarado o valor incial como zero poderia
  // fazer como uma das duas formas abaixo:
  
  // soma = typeof(soma) === 'undefined' ? numero : soma + numero
  // soma = 0 ? soma + numero : 0
}
// console.log(soma)

soma = 0

numeros.forEach(numero => {
  soma += numero
})

// console.log(soma)

soma = 0

numeros.map(numero => {
  soma += numero
  return soma
})

// console.log(soma)

const somaReduce = numeros.reduce((acumulador, numero) => {
  const somaInterna = acumulador + numero
  // console.log(somaInterna)
  return somaInterna
}, 0)

const somaFinal = numeros.reduce((acumulador, numero) => acumulador + numero, 0)

console.log(somaReduce)
console.log(somaFinal)
