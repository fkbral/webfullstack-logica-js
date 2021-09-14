const carrinho = [
  {
    produto: "Camisa branca:",
    quantidade: 4,
    valorDaUnidade: 25.50,
  },
  {
    produto: "Calça jeans:",
    quantidade: 2,
    valorDaUnidade: 180.25,
  },
  {
    produto: "Jaqueta",
    quantidade: 1,
    valorDaUnidade: 299.99,
  },
  {
    produto: "Tênis de Corrida",
    quantidade: 1,
    valorDaUnidade: 150.50,
  },
  {
    produto: "Par de meias",
    quantidade: 3,
    valorDaUnidade: 15.00,
  },
  {
    produto: "Relógio esportivo",
    quantidade: 1,
    valorDaUnidade: 350.00,
  },
]

const valorDoFrete = 15

//método 1
const total1 = carrinho.reduce((soma, produto) => {
  soma += produto.valorDaUnidade * produto.quantidade
  return soma
}, valorDoFrete)

//método 2
const total2 = carrinho.reduce(
  (soma, produto) => soma += produto.valorDaUnidade * produto.quantidade,
  valorDoFrete
)

const moedasDisponiveis = {
  'BRL': 'pt-BR',
  'USD': 'en-US',
  'CAD': 'en-US',
}

const moeda = prompt('Entre com sua moeda: (BRL, USD, CAD):').toUpperCase()

const totalEmReais = Intl.NumberFormat(
  moedasDisponiveis[moeda],
  {
    style: 'currency',
    currency: moeda
  }
).format(total2)

console.log(totalEmReais)