const idade = parseInt(prompt("Entre com sua idade"))

console.log(idade)

if (idade < 18){
  console.log("Você não está apto a dirigir")
}
else {
  const cnh = prompt("Você tem carteira de motorista?(s/n):")
  if (cnh.toLowerCase() === "s"){
  // if (cnh === "s" || cnh === "S"){
    console.log("Você pode dirigir")
  }
  else {
    console.log("Você não está apto a dirigir")
  }
}