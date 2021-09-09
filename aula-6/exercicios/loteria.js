const numerosPossiveis = 30
const acertosParaGanhar = 5
const quantidadePorCartela = 10

const cartelas = Array.from({ length: 1000 }, () => {
  const numerosApostados = []

  Array.from(
    { 
      length: quantidadePorCartela 
    },
    () => {
      let numeroSorteado

      do {
        numeroSorteado =
        Math.floor(Math.random() * numerosPossiveis + 1)
      } while (numerosApostados.includes(numeroSorteado))

      numerosApostados.push(numeroSorteado)

      return numeroSorteado
    })
  

  return numerosApostados
})

const numerosSorteados = []

Array.from({ length: acertosParaGanhar }, () => {
  let numeroSorteado

  do {
    numeroSorteado = Math.round(Math.random() * numerosPossiveis + 1)
  } while (numerosSorteados.includes(numeroSorteado))

  numerosSorteados.push(numeroSorteado)

  return numeroSorteado
})

// modificar as minhas cartelas para que cada cartela
// não seja mais um array, mas sim um objeto com duas 
// propriedades: 
// vencedor: boolean
// numeros: number[]

const objetoDeCartelas = cartelas.map(numerosDaCartela => {
  let venceu = false
  let acertos = 0

  numerosSorteados.forEach(numeroSorteado => {
    const acertou = numerosDaCartela.includes(numeroSorteado)

    acertos = acertou ? acertos + 1 : acertos
  })

  if(acertos >= acertosParaGanhar){
    venceu = true
  }

  return {
    apostas: numerosDaCartela,
    venceu: venceu,
  }
})

console.log(numerosSorteados)

function mostraVencedores(cartelas) {
  cartelas.forEach(cartela => {
    if (cartela.venceu){
      console.log("Vencedor encontrado com a seguinte cartela: ")
      console.log(cartela.apostas)
      console.log("==========================================")
    }
  })
}

mostraVencedores(objetoDeCartelas)

