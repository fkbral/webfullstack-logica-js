function soma(numero1, numero2, numero3) {
  console.log(...arguments)

  return numero1 + numero2 + numero3
}

function somaArgumentos(...numerosPassados) {
  // const numeros = [...arguments]

  // const resultado = numeros.reduce((acumulador, numero) => acumulador + numero, 0)

  let resultado = 0

  for (numero of numerosPassados) {
    resultado += numero
  }

  return resultado
}

function multiplica(numero1, numero2) {
  console.log(...arguments)

  return numero1 * numero2
}

console.log(soma(1, 2, 3, 10, 20))
console.log(multiplica(5, 10))
console.log(somaArgumentos(1, 2, 5, 2))