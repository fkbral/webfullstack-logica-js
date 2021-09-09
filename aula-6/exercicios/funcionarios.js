const funcionarios = [
  {
    nome: "Renata",
    area: "Vendas",
    salario: 3000,
  },
  {
    nome: "Marcela",
    area: "Dev",
    salario: 8000,
  },
  {
    nome: "Jonas",
    area: "Vendas",
    salario: 3500,
  },
  {
    nome: "Carlos",
    area: "Vendas",
    salario: 2000,
  },
  {
    nome: "Rick",
    area: "Dev",
    salario: 7000,
  },
  {
    nome: "Yara",
    area: "Finanças",
    salario: 6500,
  },
  {
    nome: "Zeca",
    area: "Finanças",
    salario: 5500,
  },
  {
    nome: "Josué",
    area: "RH",
    salario: 4500,
  },
  {
    nome: "Sheila",
    area: "RH",
    salario: 5500,
  },
  {
    nome: "Cleber",
    area: "Finanças",
    salario: 4500,
  },
]

function daAumentoPorAreaEscolhida(employees){
  const area = 
  prompt("Digite uma área para reajustar o salário")

  const funcionariosComReajuste = employees.map(employee => {
    if (employee.area === area){
      employee.salario = employee.salario * 1.05
      employee.reajuste = true 
    }

    return employee
  })

  funcionariosComReajuste.forEach(employee => {
    if(employee.reajuste){
      const salarioFormatado =
      Intl.NumberFormat(
        'pt-BR',
        { currency: 'brl', style: 'currency' }
      ).format(employee.salario)
      
      console.log(
        employee.nome + " teve um aumento e seu "
        + "novo salário é de " + salarioFormatado
      )
    }
  })
}

daAumentoPorAreaEscolhida(funcionarios)
