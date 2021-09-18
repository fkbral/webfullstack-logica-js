// find
const pessoas = [
  {  
    nome: "Felipe",
    cpf: "123456789",
    profissao: "professor"
  },
  {
    nome: "Bia",
    cpf: "3142415421",
    profissao: "dev"
  },
  {
    nome: "José",
    cpf: "1251252131",
    profissao: "dev"
  },
  {
    nome: "Bia",
    cpf: "2152152213",
    profissao: "dev"
  },
  {
    nome: "João",
    cpf: "212132142",
    profissao: "dev"
  },
]

const nomes = ["Felipe", "Bia"]

// os parâmetros das funções de alta ordem são valor,} índice e array
// o único que foge deste padrão é o reduce

// const procuraNome = pessoas.find((pessoa, index, arraypessoas) => {
//   console.log(index)
//   return false
// })

const procuraNome = nomes.find((nome) => {
  return nome === 'Bia'
})

const procuraPessoa = pessoas.find((pessoa) => {
  return pessoa.nome === 'Bia'
})

const procuraIndicePorNome = nomes.findIndex((nome) => {
  return nome === 'João'
})

const procuraIndicePorPessoa = pessoas.findIndex((pessoa) => {
  return pessoa.nome === 'João'
})

console.log(procuraNome)
console.log(procuraPessoa)
console.log(procuraIndicePorNome)
console.log(procuraIndicePorPessoa)

console.log(pessoas[procuraIndicePorPessoa])

console.log(pessoas[1])

// const procuraPessoa = pessoas.find((pessoa, index, arraypessoas) => {
//   return pessoa === 'Bia'
// })

// let encontrou = false

// opção usando for
// for (const nome of pessoas) {
//   if (nome === 'Bia'){
//     encontrou = true
//   }
// }


// opção usando for
// for (const nome of pessoas) {
//   if (nome === 'Bia'){
//     encontrou = true
//   }
// }

// console.log(encontrou)


// Every: checa se todos os valores do array cumprem condição
const todosSaoDevs = pessoas.every((pessoa, indice, arrayOriginal) => {
  console.log(indice)
  return pessoa.profissao === "dev"
})

// Some: checa se algum valor do array cumpre condição
const alguemEhDev = pessoas.some((pessoa, indice) => {
  console.log(indice)
  return pessoa.profissao === "dev"
})

const alguemEhProfessor = pessoas.some((pessoa, indice) => {
  console.log(indice)
  return pessoa.profissao === "professor"
})

// find, findIndex, every, some, 

console.log(todosSaoDevs)
console.log(alguemEhDev)
console.log(alguemEhProfessor)