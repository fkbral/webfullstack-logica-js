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

  for (nomeDaPessoa of nomeDasPessoas) {
    const arrayNomeSobrenome = nomeDaPessoa.split(" ")

    let sobrenome = null

    for (indice in arrayNomeSobrenome) {
      if (indice > 0){
        sobrenome = sobrenome
        ? sobrenome + " " + arrayNomeSobrenome[indice]
        : arrayNomeSobrenome[indice]
      }
    }

    console.log(sobrenome)
  }