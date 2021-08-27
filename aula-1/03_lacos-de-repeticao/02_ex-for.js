const atletas = ["Rebeca", "Ítalo"]

for (let contador = 0; contador < atletas.length; contador++) {
  console.log(atletas[contador])
}

for (contador in atletas) {
  console.log(atletas[contador])
}

for (const atleta of atletas) {
  console.log(atleta)
}