// Filtre uma lista de alunos para remover um
// aluno com uma propriedade id digitada pelo usuário.

// base 10
// 0 1 2 3 4 5 6 7 8 9

// base 16
// 0 1 2 3 4 5 6 7 8 9 A B C D E F
faker.locale = "pt_BR"

const usuarios = Array.from({length: 10}, () => ({
  nome: faker.name.findName(),
  id: faker.datatype.uuid(),
}))

usuarios.forEach(function(usuario) {
  console.log(usuario.id)
})

const idPesquisado = prompt(
  'Entre com o id do usuário que deseja buscar: '
)

const usuarioEncontrado = 
usuarios.find(usuario => usuario.id === idPesquisado)
// usuarios.filter(usuario => usuario.id === idPesquisado)

console.log(usuarios)
console.log(usuarioEncontrado)



