const frutas = ['๐', '๐', '๐', '๐', '๐']

const geraMorangos = frutas.map(fruta => '๐')
const duplicaFrutas = frutas.map(fruta => fruta + fruta)

const laranjas = frutas.filter(fruta => fruta === '๐')

// const laranjasDuplicadas = 
// duplicaFrutas.filter((fruta, indice, arrayFrutas) => 
//   [...fruta].some(pesquisaFruta => {
//     console.log(pesquisaFruta)
//     return pesquisaFruta === '๐'
//   })
// )

// const laranjasGenรฉrico = 

console.log('Frutas inciais: ' + frutas)
console.log('Gera morangos com map: ' + geraMorangos)
console.log('Duplica frutas com map: ' + duplicaFrutas)
console.log('Seleciona apenas laranjas com filter: ' + laranjas)
// console.log(laranjasDuplicadas)