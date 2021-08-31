const lista = [300, 120, 11]

// arrow function
const minhaFuncao = (lista, numero) => {
  lista.push(numero)

  return lista
}

const retornaSaudacao = function(nome) {
  return "Bom dia, " + nome + "!"
}

const retornaSaudacaoArrow = (nome) => "Bom dia, " + nome + "!"

const retorno = minhaFuncao(lista, 22)
console.log(retorno)

console.log(retornaSaudacao("Felipe"))
console.log(retornaSaudacaoArrow("Felipe"))