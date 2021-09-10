// De um array de números aleatórios de 100 elementos, 
// gere um novo array apenas com números divisíveis por 3.

const numeros = Array.from({ length: 10 }, () => {
  const numero = Math.round(Math.random() * 9999)
  return numero
})

const numerosDivisiveisPorTres = 
numeros.filter(numero => numero % 3 === 0)

// com forEach seria assim:
// const numerosDivisiveisPorTres = []

// // numeros.forEach(function(numero){})
// numeros.forEach(numero => {
//   if (numero % 3 === 0) {
//     numerosDivisiveisPorTres.push(numero)
//   }
// })

console.log(numerosDivisiveisPorTres)
