desejaContinuar = true

console.log("1. Cadastrar")
console.log("2. Buscar aluno por email")
console.log("3. Remover aluno por email")

const alunos = []

function cadastraAluno(alunos) {
  const novoNome = prompt("Entre com o nome do aluno")
  const novaIdade = parseInt(prompt("Entre com a idade do aluno"))
  const novoEmail = prompt("Entre com o email do aluno")

  alunos.push({
    nome: novoNome,
    idade: novaIdade, 
    email: novoEmail, 
  })
}

function pesquisaAluno(alunos) {
  const emailPesquisado = prompt("Busque aluno por email:")
  let dadosAluno = null
  let indiceAluno = null

  for (const indice in alunos) {
    if (alunos[indice].email === emailPesquisado) {
      dadosAluno = alunos[indice]
      indiceAluno = indice
    }
  }

  return {
    dadosAluno,
    indiceAluno
  }
}

function imprimeDadosDoAluno(aluno) {
  if (aluno){
    return console.log(aluno)
  }
  
  return console.log("Aluno não cadastrado")
}

function deletaAluno(alunos, indiceEncontrado) {
  if (indiceEncontrado){
    alunos.splice(indiceEncontrado, 1)
    console.log("Aluno deletado com sucesso!")
  }
  else {
    console.log("Aluno não cadastrado")
  }
}

while(desejaContinuar){
  const opcao = parseInt(prompt("Entre com uma opcao: "))

  if (opcao === 1) {
    cadastraAluno(alunos)
  }

  if (opcao === 2) {
    const pesquisa = pesquisaAluno(alunos)
    imprimeDadosDoAluno(pesquisa.dadosAluno)  
  }

  if (opcao === 3) {
    const pesquisa = pesquisaAluno(alunos)
    imprimeDadosDoAluno(pesquisa.dadosAluno)  
    deletaAluno(alunos, pesquisa.indiceAluno)
  }

  desejaContinuar = 
  prompt("Deseja continuar? (s/n)").toLowerCase() === "s"
}

console.log(alunos)