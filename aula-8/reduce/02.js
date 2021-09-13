const alunos = [
  {
    Nome: "Jonas",
    materias: {
      "História": [9, 5, 6],
      "Matemática": [3, 7, 8],
      "Física": [10, 10, 6],
    }
  },    
  {
    Nome: "Bia",
    materias: {
      "História":[6, 5, 6],
      "Matemática": [7, 7, 8],
      "Física": [8, 6, 9],
    }
  },
  {
    Nome: "Renata",
    materias: {
      "História": [8, 7, 9],
      "Matemática": [9, 7, 7],
      "Física": [5, 5, 8],
    }
  }
]

// desejamos com o reduce criar um objeto com as seguintes propriedades:
// let mediaAlunos ={
//   Jonas: {
//     medias: {
//       "História": 10,
//       "Matemática": 8,
//       "Física": 8,
//     },
//   },
//   Bia: {
//     medias: {
//       "História": 10,
//       "Matemática": 8,
//       "Física": 8,
//     },
//   },
// }

// const mediaAlunos = alunos.reduce((mediasAcumuladas, aluno) => {
//   return {
//     ...mediasAcumuladas,
//     [aluno.Nome] : {
//       medias: {
//         "História": 
//         aluno.provas["História"]
//         .reduce(
//           (soma, nota) => soma + nota, 0 
//         )/3,

//         "Matemática":
//         aluno.provas["Matemática"]
//         .reduce(
//           (soma, nota) => soma + nota, 0 
//         )/3,

//         "Física": aluno.provas["Física"]
//         .reduce(
//           (soma, nota) => soma + nota, 0 
//         )/3,
//       }
//     }
//   }
// }, {})

const mediaAlunosResumido = alunos.reduce((mediasAcumuladas, aluno) => {
  let medias = {}

  for (materia in aluno.materias) {
    const notas = aluno.materias[materia]

    const media = notas.reduce((acc, nota) => acc + nota)/notas.length

    medias[materia] = media
  }

  mediasAcumuladas[aluno] = medias

  return mediasAcumuladas
}, {})

console.log(mediaAlunosResumido)
