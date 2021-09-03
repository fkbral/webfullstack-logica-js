// operações bancárias
const contaJoao = {
  saldo: 0,
  numero: "(11)1234-5678"
}

const operacoes = {
  "1" : deposito,
  "2" : saque,
  "3" : verSaldo,
}

function deposito(conta) {
  const valor = parseInt(prompt("Digite um valor em reais"))
  const valorAbsoluto = Math.abs(valor)
  conta.saldo += valorAbsoluto
}

function saque(conta) {
  const valor = parseInt(prompt("Digite um valor em reais"))
  const valorAbsoluto = Math.abs(valor)

  if(valor > conta.saldo) {
    return alert("Saldo insuficiente para realizar operação")
  }

  conta.saldo -= valorAbsoluto
}

function verSaldo(conta) {
  return alert(Intl.NumberFormat(
    'pt-BR', { currency: 'brl', style: 'currency' }
  ).format(conta.saldo))
}

function executaOperacao(operacao, conta){
  // se operacao = deposito
  // deposito(conta)
  // é exatamente a mesma coisa:
  operacao(conta)
}

let opcao = -1

while (opcao !== 4) {
  opcao = parseInt(prompt(
    "Escolha uma opcao\n 1.Depósito\n 2.Saque\n 3.Ver Saldo\n 4.Sair"
  ))

  if(opcao > 0 && opcao < 4) {
    executaOperacao(operacoes[opcao], contaJoao)
  }
  else {
    if (opcao !== 4){
      alert("opção inválida")
    }
  }
}