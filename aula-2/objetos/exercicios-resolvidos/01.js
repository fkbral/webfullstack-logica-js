desejaContinuar = true

console.log("1. Cadastrar")
console.log("2. Buscar aluno por email")
console.log("3. Remover aluno por email")

const alunos = []

while(desejaContinuar){
  const opcao = parseInt(prompt("Entre com uma opcao: "))

  if (opcao === 1) {
    const novoNome = prompt("Entre com o nome do aluno")
    const novaIdade = parseInt(prompt("Entre com a idade do aluno"))
    const novoEmail = prompt("Entre com o email do aluno")

    alunos.push(
      {
      nome: novoNome,
      idade: novaIdade, 
      email: novoEmail, 
      }
    )
  }

  if (opcao === 2) {
    const emailPesquisado = prompt("Busque aluno por email:")
    let alunoCadastrado = null

    for (const aluno of alunos) {
      if (aluno.email === emailPesquisado) {
        alunoCadastrado = aluno
      }
    }

    if (alunoCadastrado){
      console.log(alunoCadastrado)
    }
    else {
      console.log("Aluno não cadastrado")
    }
  }

  if (opcao === 3) {
    const emailPesquisado = prompt("Busque aluno por email:")
    let indiceEncontrado = null

    for (const indice in alunos) {
      if (alunos[indice].email === emailPesquisado) {
        indiceEncontrado = indice
      }
    }

    if (indiceEncontrado){
      alunos.splice(indiceEncontrado, 1)
      console.log("Aluno deletado com sucesso!")
    }
    else {
      console.log("Aluno não cadastrado")
    }
  }

  desejaContinuar = 
  prompt("Deseja continuar? (s/n)").toLowerCase() === "s"
}

console.log(alunos)