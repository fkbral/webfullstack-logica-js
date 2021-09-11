// Utilize filter para retornar um novo array
// sem números repetidos.

const numeros = [1,2,3,2,1,3,3,5,4,6]

const numerosUnicosForEach = []
const numerosUnicosMap = []

const numerosUnicos = numeros.filter((numero, index, array) => {
  const arrayAteONumero = array.slice(0, index)
  // console.log(arrayAteONumero)
  const numeroJaOcorreu = arrayAteONumero.includes(numero)
  // utilizo ! para negar a condição e pegar se o número não ocorreu
  return !numeroJaOcorreu
})

numeros.forEach((numero, index, array) => {
  const arrayAteONumero = array.slice(0, index)
  const numeroJaOcorreu = arrayAteONumero.includes(numero)

  if(!numeroJaOcorreu) {
    numerosUnicosForEach.push(numero)
  }
})

const numerosUnicosMapRetorno = numeros.map((numero, index, array) => {
  const arrayAteONumero = array.slice(0, index)
  const numeroJaOcorreu = arrayAteONumero.includes(numero)

  if(!numeroJaOcorreu) {
    numerosUnicosMap.push(numero)
    return(numero)
  }

  return(undefined)
})

console.log(numerosUnicos)
console.log(numerosUnicosForEach)
console.log(numerosUnicosMap)
console.log(numerosUnicosMapRetorno)
console.log(numerosUnicosMapRetorno.filter(numero => !!numero))