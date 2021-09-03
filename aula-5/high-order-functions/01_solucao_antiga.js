// operações bancárias
const contaJoao = {
  saldo: 0,
  numero: "(11)1234-5678"
}

function deposito(conta, valor) {
  const valorAbsoluto = Math.abs(valor)

  // conta.saldo = conta.saldo + valorAbsoluto
  conta.saldo += valorAbsoluto
}

function saque(conta, valor) {
  const valorAbsoluto = Math.abs(valor)

  if(valor > conta.saldo) {
    return alert("Saldo insuficiente para realizar operação")
  }

  // conta.saldo = conta.saldo - valorAbsoluto
  conta.saldo -= valorAbsoluto
}

function verSaldo(conta) {
  return alert(Intl.NumberFormat(
    'pt-BR', { currency: 'brl', style: 'currency' }
  ).format(conta.saldo))
}

let opcao = -1

while (opcao !== 4) {
  opcao = parseInt(prompt(
    "Escolha uma opcao\n 1.Depósito\n 2.Saque\n 3.Ver Saldo\n 4.Sair"
  ))

  switch(opcao) {
    case 1: {
      const valor = parseInt(prompt("Digite um valor em reais"))
      deposito(contaJoao, valor)
      break
    }
    case 2: {
      const valor = parseInt(prompt("Digite um valor em reais"))
      saque(contaJoao, valor)
      break
    }
    case 3: {
      verSaldo(contaJoao)
      break
    }
    case 4: {
      break
    }
    default: 
    alert("opcao invalida")
  }
}