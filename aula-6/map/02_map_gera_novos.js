const usuarios = [
  {
    nome: "Bruna",
    idade: 22,
  },
  {
    nome: "Caio",
    idade: 29,
  },
  {
    nome: "João",
    idade: 21,
  },
]

const usuariosComId = usuarios.map((usuario, indice, todosUsuarios ) => {
  // console.log(usuario)
  // console.log(indice)
  // console.log(todosUsuarios)

  const usuarioComId = {
    nome: usuario.nome,
    idade: usuario.idade,
    id: indice + 1
  }

  return usuarioComId
})

console.log(usuariosComId)
console.log(usuarios)