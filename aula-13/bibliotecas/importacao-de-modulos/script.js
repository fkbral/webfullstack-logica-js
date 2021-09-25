import { imprimeNumeros, mensagem } from './script2.js'
import { adicionaNumero } from './script3.js'

import v4 from './node_modules/uuid/dist/esm-browser/v4.js'

export const numeros = [1,4,5]

imprimeNumeros(numeros)
console.log(mensagem)

adicionaNumero(10)

imprimeNumeros(numeros)

const idUnico = v4()

console.log(idUnico)