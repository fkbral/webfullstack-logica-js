const students = [
  {
    name: "Pedro",
    age: 22,
    class: 736,
    grades: [10, 8, 7]
  },
  {
    name: "Bia",
    age: 20,
    class: 736,
    grades: [6, 10, 10]
  }
]

const studentsCopy = students

const nomeDoAlunoSelecionado = "Bia"

for (const student of students) {
  // const property = "name"
  // console.log(student.name)
  // console.log(student[property])
  // console.log(student["name"])
  if (student.name === nomeDoAlunoSelecionado) {
    student.matriculada = true
    const newClassNumber = 
    parseInt(prompt("Digite o novo numero da turma:"))
    student.class = newClassNumber
  }
}

console.log(students)
console.log(studentsCopy)