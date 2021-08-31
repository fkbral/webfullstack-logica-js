const alunos = [
  {
    nome: "Bruno",
    calendarioEsportes: [
      {
        esporte: "futebol",
        horario: "12:00"
      },
    ],
  },
  {
    nome: "Bia",
    calendarioEsportes: [
      {
        esporte: "futebol",
        horario: "16:00"
      },
      {
        esporte: "natacao",
        horario: "18:00"
      }
    ],
  }
]

function formataFraseCalendarioEsportivoDoAluno(aluno) {
  for (calendario of aluno.calendarioEsportes) {
    aluno[calendario.esporte + "_frase"] = aluno.nome + ", seu treino de " + 
    calendario.esporte + " está marcado para às "
    + calendario.horario
  }
}

formataFraseCalendarioEsportivoDoAluno(alunos[1])

console.log(alunos[1])