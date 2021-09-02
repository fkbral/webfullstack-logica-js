desejaContinuar = true

const alunos = []

const atividades = [
  {
    nome: "musculação",
    valor: 120
  },
  {
    nome: "esteira",
    valor: 40
  },
  {
    nome: "natação",
    valor: 50
  },
  {
    nome: "judô",
    valor: 90
  },
]

function cadastraAluno(alunos) {
  const novoNome = prompt("Entre com o nome do aluno")
  const novaIdade = parseInt(prompt("Entre com a idade do aluno"))
  const novoEmail = prompt("Entre com o email do aluno")

  alunos.push({
    nome: novoNome,
    idade: novaIdade, 
    email: novoEmail,
    nomeDasAtividades: []
  })
}

function adicionaAtividade(atividades, aluno) {
  if (!aluno) {
    return alert('Aluno não encontrado')
  }

  const indiceDaAtividade = parseInt(prompt(
    "Escolha uma Atividade para incluir:\n"
    + "0: Musculação\n"
    + "1: Esteira\n"
    + "2: Natação\n"
    + "3: Judô\n"
  ))

  const escolheuMusculacao = 
    atividades[indiceDaAtividade].nome.toLowerCase() 
    === "musculação"

  const escolheuEsteira = 
    atividades[indiceDaAtividade].nome.toLowerCase() 
    === "esteira"

  let praticaMusculacao = false

  for (const nomeDaAtividade of aluno.nomeDasAtividades) {
    if (nomeDaAtividade === "musculação") {
      praticaMusculacao = true
    }
  }

  if (praticaMusculacao && escolheuEsteira) {
    return alert(
      "Aluno já pratica musculação e não pode escolher esteira!"
    )
  }

  if (escolheuMusculacao && aluno.idade < 14) {
    return alert(
      "Aluno é menor de 14 anos e não pode praticar musculação"
    )
  }

  if (praticaMusculacao 
      && atividades[indiceDaAtividade].nome.toLowerCase() 
          === "musculação") {
    return alert(
      "Aluno é menor de 14 anos e não pode praticar musculação"
    )
  }

  if (indiceDaAtividade > 3 || indiceDaAtividade < 0) {
    return alert("Atividade não encontrada!")
  }

  for (const nomeDaAtividade of aluno.nomeDasAtividades) {
    if (
      atividades[indiceDaAtividade].nome.toLowerCase()
      === nomeDaAtividade.toLowerCase()
    ){
      return alert("Aluno já pratica atividade!")
    }
  }

  aluno.nomeDasAtividades.push(atividades[indiceDaAtividade].nome)

  alert(JSON.stringify(aluno))
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
    indiceAluno,
  }
}

function imprimeDadosDoAluno(aluno) {
  if (aluno){
    return alert(JSON.stringify(aluno))
  }
  
  return alert("Aluno não cadastrado")
}

function deletaAluno(alunos, indiceEncontrado) {
  if (indiceEncontrado){
    alunos.splice(indiceEncontrado, 1)
    return alert("Aluno deletado com sucesso!")
  }
  
  return alert("Aluno não cadastrado")
}

while(desejaContinuar){
  const opcao = parseInt(prompt(
    "Entre com uma opção:\n"
    + "1. Cadastrar \n"
    + "2. Buscar aluno por email\n"
    + "3. Remover aluno por email\n"
    + "4. Adicionar atividade ao aluno\n"
  ))

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

  if (opcao === 4) {
    const pesquisa = pesquisaAluno(alunos)
    adicionaAtividade(atividades, pesquisa.dadosAluno)

  }

  desejaContinuar = 
  prompt("Deseja continuar? (s/n)").toLowerCase() === "s"
}

alert(alunos)