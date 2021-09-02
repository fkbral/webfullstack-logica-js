const alunos = [
  {
    Nome: "Jonas",
    "História": [9, 5, 6],
    "Matemática": [3, 7, 8],
    "Física": [10, 10, 6],
  },    
  {
    Nome: "Bia",
    "História":[6, 5, 6],
    "Matemática": [7, 7, 8],
    "Física": [8, 6, 9],
  },
  {
    Nome: "Renata",
    "História": [8, 7, 9],
    "Matemática": [9, 7, 7],
    "Física": [5, 5, 8],
  }
]

function calculaMedias(listaAlunos) {
  for (aluno of listaAlunos) {
    for (chave in aluno) {
      if (chave !== "Nome") {
        let soma = 0

        for (nota of aluno[chave]) {
          soma = soma + nota
        }
        
        const media = soma/aluno[chave].length

        aluno["Media" + chave] = media
      }
    }
  }

  console.log(listaAlunos)
}

calculaMedias(alunos)