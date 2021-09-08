const numeros = [0, 3, 4, 6, 12]

// gostaria de multiplicar todos os números do array por 2

const numerosMutiplicados = []

numeros.forEach((numero) => {
 const resultado = numero * 2
 numerosMutiplicados.push(resultado)
})

console.log(numerosMutiplicados)