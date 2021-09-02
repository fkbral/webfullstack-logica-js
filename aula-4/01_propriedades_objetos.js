const carro = {
  marca: "Ford",
  tipo: "sedan",
}

const marcaCarro2 = "Ford"
const tipoCarro2 = "sedan"

const carro2 = {
  marca: marcaCarro2,
  tipo: tipoCarro2,
}

const marca = "Ford"
const tipo = "sedan"

// método longo de declarar propriedades
// const carro3 = {
//   marca: marca,
//   tipo: tipo
// }

// short synthax
const carro3 = {
  marca,
  tipo,
}

console.log(carro)
console.log(carro2)
console.log(carro3)