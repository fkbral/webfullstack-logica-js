faker.locale = "pt_BR"

const usersAmount = 100

const usuarios = Array.from({ length: usersAmount }, () => {
  return  {
    nome: faker.name.findName(),
    estado: faker.address.stateAbbr()
  }
})

const meuEstado = "SP"

const valorInicialDeAgrupaUsuariosPorEstado = {
  usuariosDoMeuEstado: [],
  usuariosDeOutrosEstados: [],
}

const agrupaUsuariosPorEstado = 
usuarios.reduce(
  function(usuariosAgrupados, usuario) {
    if (usuario.estado === meuEstado) {
      // Teria que fazer essa verificação caso não tivesse inicializado a
      // propriedade usuariosDoMeuEstado como array vazio

      // if (!usuariosAgrupados.usuariosDoMeuEstado) {
      //   usuariosAgrupados.usuariosDoMeuEstado = []
      // }
      usuariosAgrupados.usuariosDoMeuEstado.push(usuario.nome)
      return usuariosAgrupados
    }

    // Teria que fazer essa verificação caso não tivesse inicializado a
    // propriedade usuariosDeOutrosEstados como array vazio

    // if (!usuariosAgrupados.usuariosDeOutrosEstados) {
    //   usuariosAgrupados.usuariosDeOutrosEstados = []
    // }
    usuariosAgrupados.usuariosDeOutrosEstados.push(usuario.nome)

    return usuariosAgrupados
  },
  valorInicialDeAgrupaUsuariosPorEstado
)

console.log(agrupaUsuariosPorEstado.usuariosDoMeuEstado)