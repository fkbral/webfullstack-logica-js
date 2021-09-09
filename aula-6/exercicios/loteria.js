const numerosPossiveis = 30
const acertos = 5
const quantidadePorCartela = 10

const cartelas = Array.from({ length: 3 }, () => {
  const numerosApostados = []

  Array.from(
    { length: quantidadePorCartela },
    () => {
      let numeroSorteado = Math.floor(Math.random() * numerosPossiveis + 1)

      while (numerosApostados.includes(numeroSorteado)) {
        numeroSorteado = Math.round(Math.random() * numerosPossiveis + 1)
      }

      numerosApostados.push(numeroSorteado)

      return numeroSorteado
    })
  

  console.log(numerosApostados)
  return numerosApostados
})

const numerosSorteados = []

const resultado = Array.from({ length: acertos}, () => {
  let numeroSorteado = Math.floor(Math.random() * numerosPossiveis + 1)

  while (numerosSorteados.includes(numeroSorteado)) {
    numeroSorteado = Math.round(Math.random() * numerosPossiveis + 1)
  }

  numerosSorteados.push(numeroSorteado)

  return numeroSorteado
})

console.log(cartelas)
console.log(resultado)