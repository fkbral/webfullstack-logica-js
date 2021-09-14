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

// método 1
const contadorSobrenomes1 = 
nomeDasPessoas.reduce((acumuladorSobrenomes, nomeCompleto) => {
  
  const arrayNomes = nomeCompleto.split(' ')
  
  const [primeiroNome, ...arraySobrenomes] = arrayNomes

  const sobrenome = arraySobrenomes.join(' ')
  
  acumuladorSobrenomes[sobrenome] = acumuladorSobrenomes[sobrenome]
  ? acumuladorSobrenomes[sobrenome] + 1
  : 1

  return acumuladorSobrenomes
}, {})

// método 2
const contadorSobrenomes2 = 
nomeDasPessoas.reduce((acumuladorSobrenomes, nomeCompleto) => {
  
  const arrayNomes = nomeCompleto.split(' ')
  
  const [primeiroNome, ...arraySobrenomes] = arrayNomes

  const sobrenome = arraySobrenomes.join(' ')

  return {
    ...acumuladorSobrenomes,
    [sobrenome] :
    acumuladorSobrenomes[sobrenome]
    ? acumuladorSobrenomes[sobrenome] + 1
    : 1
  }
}, {})

console.log(contadorSobrenomes2)