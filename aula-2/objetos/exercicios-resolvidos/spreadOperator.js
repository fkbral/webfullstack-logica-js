const numeros = [21, "Bruno", [200,100], 500, 123, 4, 5]
const [primeiro, segundo, terceiro, ...demais] = numeros

console.log(primeiro)
console.log(segundo)
console.log(terceiro)
console.log(demais)

// não pode fazer, vai dar erro, pois número não tem índice
// const [algarismo1, algarismo2] = 300

const [primeiraLetra, segundaLetra, ...demaisLetras] = "Fulano de Tal"

console.log(primeiraLetra)
console.log(segundaLetra)
console.log(demaisLetras)