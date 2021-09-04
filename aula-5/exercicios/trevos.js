// const trevos = Array.from({length: 100}, (valor, indice) => {
//   console.log(indice)
//   return Math.random() < 0.9999 ? '☘️' : '🍀'
// })


// const trevos = Array.from({ length: 10000 },
//   () => {
//     // mesma coisa que a ternária
//     // if (Math.random() < 0.9999){
//     //   return '☘️'
//     // }
//     // else {
//     //   '🍀'
//     // }
//     return Math.random() < 0.9999 ? '☘️' : '🍀'
//   }
// )

const trevos = Array.from({ length: 10000 },
  () => Math.random() < 0.9999 ? '☘️' : '🍀'
)

const posicaoDoTrevo = trevos.findIndex(trevo => trevo === '🍀')

function exibeTrevo(posicao) {
  if (posicao === -1) {
    return console.log('Nenhum trevo de quatro folhas foi encontrado')
  }

  return console.log('Trevo encontrado na posição ' + posicaoDoTrevo)
}

exibeTrevo(posicaoDoTrevo)