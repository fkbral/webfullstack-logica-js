const nomeDasPessoas = [
  "Ana Peres", 
  "Maria Silva",
  "Cleide Peres",
  "Carlos Levir",
  "Zeca Silva",
  "Paulo Souza",
  "Roger Guimarães",
  "Carlos de Almeida",
  "Mayk Souza",
  "Paula Guimarães",
  "Edson Souza",
  "Milena Komatsu",
  "Zé Souza",
  "Joana Batisteti",
  "Carla Zuko",
  "Bruna de Almeida",
  "Jonas Peres"
  ]

// const ocorrenciaDeSobrenomes = {
  // "Peres": 0,
  // "Silva": 0,
// }

const ocorrenciaDeSobrenomes = {}

for (nomeDaPessoa of nomeDasPessoas) {
  const arrayNomes = nomeDaPessoa.split(" ")
  // rest operator
  const [_nome, ...sobrenomes] = arrayNomes

  const sobrenome = sobrenomes.join(" ")

  const ocorrencia = ocorrenciaDeSobrenomes[sobrenome]

  // ocorrenciaDeSobrenomes["Peres"] = 
  ocorrenciaDeSobrenomes[sobrenome] = 
  ocorrencia 
  ? ocorrencia + 1
  : 1
}

console.log(ocorrenciaDeSobrenomes)