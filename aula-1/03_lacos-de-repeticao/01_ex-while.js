const alunos = []
let continua = true

while (continua) {
  // const aluno = prompt("Entre com o nome do aluno")
  // const [inicial, ...restoDoNome] = prompt("Entre com o nome do aluno")

  // console.log(inicial)
  // console.log(restoDoNome)

  const alunoCapitalize = 
  aluno[0].toUpperCase() + aluno.substr(1).toLowerCase()

  // const alunoCapitalize = inicial.toUpperCase() + restoDoNome.join('').toLowerCase()

  alunos.push(alunoCapitalize)
  // não posso fazer
  // alunos = [aluno]
  // continua = Number(prompt("Deseja continuar? (1/0)"))
  continua = prompt("Deseja continuar? (s/n)").toLowerCase() === "s"
}

document.write(alunos)
console.log(alunos)