const numeros = [21, "Bruno", [200,100], 500, 123, 4, 5]
const [primeiro, segundo, terceiro, ...demais] = numeros

// console.log(primeiro)
// console.log(segundo)
// console.log(terceiro)
// console.log(demais)

// não pode fazer, vai dar erro, pois número não tem índice
// const [algarismo1, algarismo2] = 300

const [primeiraLetra, segundaLetra, ...demaisLetras] = "Fulano de Tal"
console.log("fulano"[0])
console.log("fulano"[1])
console.log("fulano"[2])
console.log("fulano"[3])

const lista = ["Ligia", "Carlos", "Jonas", "Paulo"]
const [a, b, ...rest] = ["Ligia", "Carlos", "Jonas", "Paulo"]
// console.log(lista)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(nome)

console.log(a)
console.log(b)
console.log(rest)

// console.log(primeiraLetra)
// console.log(segundaLetra)
// console.log(demaisLetras)