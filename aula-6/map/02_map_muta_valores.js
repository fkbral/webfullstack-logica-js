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

// const novoUsuarios =
// usuarios.map((usuario, index) => ({...usuario, id: index + 1}))

usuarios.map((usuario, indice ) => {
  usuario.id = indice + 1

  return usuario
})

console.log(usuarios)