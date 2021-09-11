// Utilize filter para retornar um novo array
// sem números repetidos.

const numeros = [1,2,3,2,1,3,3,5,4,6]

const numerosUnicos = numeros.filter((numero, index, array) => {
  const arrayAteONumero = array.slice(0, index)
  // console.log(arrayAteONumero)
  const numeroJaOcorreu = arrayAteONumero.includes(numero)
  // utilizo ! para negar a condição e pegar se o número não ocorreu
  return !numeroJaOcorreu
})

console.log(numerosUnicos)