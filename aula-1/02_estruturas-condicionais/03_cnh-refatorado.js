const idade = parseInt(prompt("Entre com sua idade"))

podeDirigir(idade)

function podeDirigir(idade) {
  if(idade >= 18){
    const cnh = prompt("Você tem carteira de motorista?(s/n):")
    if (cnh.toLowerCase() === "s"){
      // return console.log("Você pode dirigir")
      return document.write("Você pode dirigir")
    }
  }

  // return console.log("Você não está apto a dirigir")
  return document.write("Você não está apto a dirigir")
}