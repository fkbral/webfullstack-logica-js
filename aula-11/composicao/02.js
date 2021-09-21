function compoe(...funcoes) {

  return function(texto) {
    let resultadoDaUltimaFuncao = texto

    for (funcao of funcoes) {
      resultadoDaUltimaFuncao = funcao(resultadoDaUltimaFuncao)
    }

    return resultadoDaUltimaFuncao
  }
}

function tiraEspacos(texto) {
  console.log(texto)
  return texto.trim()
}

function deixaMinusculo(texto) {
  return texto.toLowerCase()
}

const tiraEspacosEDeixaMinusculo = compoe(tiraEspacos, deixaMinusculo)

const resultado = tiraEspacosEDeixaMinusculo("    TExto paRA forMAtar   ")

console.log(resultado)