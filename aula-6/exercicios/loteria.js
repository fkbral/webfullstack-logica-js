const numerosPossiveis = 30
const acertos = 5
const quantidadePorCartela = 10

const cartelas = Array.from({ length: 3 }, () => {
  const numerosApostados = Array.from(
    {length: quantidadePorCartela},
    () => {
      const numeroSorteado = Math.round(Math.random() * numerosPossiveis + 1)

      return numeroSorteado
    })
  

  console.log(numerosApostados)
  return numerosApostados
})

const resultado = Array.from({ length: acertos}, () => {
  const numeroSorteado = Math.round(Math.random() * numerosPossiveis + 1)

  return numeroSorteado
})

console.log(cartelas)
console.log(resultado)