const frutas = ['🍓', '🍈', '🍊', '🍈', '🍊']

const geraMorangos = frutas.map(fruta => '🍓')
const duplicaFrutas = frutas.map(fruta => fruta + fruta)

const laranjas = frutas.filter(fruta => fruta === '🍊')

// const laranjasDuplicadas = 
// duplicaFrutas.filter((fruta, indice, arrayFrutas) => 
//   [...fruta].some(pesquisaFruta => {
//     console.log(pesquisaFruta)
//     return pesquisaFruta === '🍊'
//   })
// )

// const laranjasGenérico = 

console.log('Frutas inciais: ' + frutas)
console.log('Gera morangos com map: ' + geraMorangos)
console.log('Duplica frutas com map: ' + duplicaFrutas)
console.log('Seleciona apenas laranjas com filter: ' + laranjas)
// console.log(laranjasDuplicadas)