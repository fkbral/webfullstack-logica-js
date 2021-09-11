// Utilize filter para selecionar todos
// os números primos do array

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// numeros primos são aqueles divisíveis apenas por 1 e ele mesmo

function checaSeEhPrimo(numero) {
  // checando se 8 é primo
  // começa em 2 e vai até 4
  // for(let i=2; i<n/2; i++) {}
  let divisor = 2
  let ehPrimo = true

  if (numero <= 1 ) {
    return false
  }

  const divisores = Array.from(
    {length: Math.floor(numero/2 - 1)},
    (_valor, index) => {
      return index + 2
    }
  )

  divisores.forEach(divisor => {
    if(numero % divisor === 0){
      ehPrimo = false
    }
  })

  // console.log(divisores)

  // while(divisor <= numero/2) {
  //   if(numero % divisor === 0){
  //     ehPrimo = false
  //     break
  //   }
  //   divisor += 1
  // }

  return ehPrimo
}

// const primos = array.filter(numero => checaSeEhPrimo(numero))

// const primos = array.filter(function (numero) {
const primos = array.filter(numero => {
  let ehPrimo = true

  if (numero <= 1 ) {
    return false
  }

  const divisores = Array.from(
    {length: Math.floor(numero/2 - 1)},
    (_valor, index) => {
      return index + 2
    }
  )

  divisores.forEach(divisor => {
    if(numero % divisor === 0){
      ehPrimo = false
    }
  })

  return ehPrimo
})

console.log(primos)
// console.log(checaSeEhPrimo(8))