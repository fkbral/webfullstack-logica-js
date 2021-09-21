// queremos tirar espaços em excesso e 
// também queremos convertê-lo para um número

const textoOriginal = " 230.60  "

// separadamente poderíamos fazer assim:

function tiraEspacos(texto) {
  return texto.trim()
}

const textoSemEspacos = tiraEspacos(textoOriginal)
const numero = parseFloat(textoSemEspacos)

// exemplo de "composição" que já fazíamos: parseFloat(prompt('Entre com um número'))
const textoSemEspacosETransformadoEmNumero =  parseFloat(tiraEspacos(textoOriginal))

// console.log(textoOriginal)
// console.log(textoSemEspacos)
// console.log(numero)

// como uma única função:

function tiraEspacosETransformaEmNumero(texto) {
  const semEspacos = texto.trim()
  const resultado = parseFloat(semEspacos)

  return resultado
}

const resultado = tiraEspacosETransformaEmNumero(textoOriginal)

// console.log(resultado)

// com composição de funções

function compoe(funcao1, funcao2) {

  return function() {
    return funcao2(funcao1(...arguments))
    // por debaixo dos panos JavaScript estaria fazendo isso:
    // return parseFloat(tiraEspacos(...arguments))

  }
}

const novaFuncao = compoe(tiraEspacos, parseFloat)
// console.log(novaFuncao)

console.log(" 230.60  ")

const resultadoDaNovaFuncao = novaFuncao(" 230.60  ")

console.log(resultadoDaNovaFuncao)

// Agora quero arredondar 
