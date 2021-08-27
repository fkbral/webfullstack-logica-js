console.log(4 == "4") //true
console.log(4 === "4") //false

// truthy e falsy
// truthy [], true, 1
// falsy null false undefined 0

const lista = []

const numero = 0

if (lista.length > 0) {
    console.log("lista tem elementos")
}

if (numero) {
    console.log("truthy")
}

// por debaixo dos panos estariamos fazendo:
if (!!numero) {
    console.log("truthy")
}

// if (!!numero) {
//     console.log("lista tem elementos")
// }