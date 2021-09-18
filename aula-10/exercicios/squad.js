const sistemas = ["Plataforma de Ensino", "Projeto Marketing", "HomePage"]
const areas = [
  "backend developer",
  "frontend developer",
  "manual tester", 
  "QA tester"
]

const times = [
  {
    projeto: "Plataforma de Ensino",
    membros: [
      {  
        nome: "Felipe",
        cpf: "123456789",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "Bia",
        cpf: "3142415421",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "José",
        cpf: "1251252131",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "Bia",
        cpf: "2152152213",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "João",
        cpf: "212132142",
        cargo: "backend developer",
        profissao: "developer"
      },
    ]
  },

  {
    projeto: "Projeto Marketing",
    membros: [
      {  
        nome: "Felipe",
        cpf: "123456789",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "Bia",
        cpf: "3142415421",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "José",
        cpf: "1251252131",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "Bia",
        cpf: "2152152213",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "João",
        cpf: "212132142",
        cargo: "backend developer",
        profissao: "developer"
      },
    ]
  },
  {
    projeto: "HomePage",
    membros: [
      {  
        nome: "Felipe",
        cpf: "123456789",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "Bia",
        cpf: "3142415421",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "José",
        cpf: "1251252131",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "Bia",
        cpf: "2152152213",
        cargo: "backend developer",
        profissao: "developer"
      },
      {
        nome: "João",
        cpf: "212132142",
        cargo: "backend developer",
        profissao: "developer"
      },
    ]
  }
]

// para o sistema HomePage funcionar bem, preciso de pelo menos um membro de cada área
// para a HomePage funcionar bem, preciso que todos os envolvidos de 2 devs e 2 testers no mínimo
// para o sistema de Marketing funcionar bem, preciso que todos os envolvidos sejam developers

times.forEach(time => {

  if (time.projeto === "Projeto Marketing"){
    // solução 1 para marketing
    let timeDeMarketingEstaOkForEach = true
    
    time.membros.forEach((membro) => {
      if (membro.profissao !== "developer"){
        timeDeMarketingEstaOkForEach = false
      }
    })

    console.log(timeDeMarketingEstaOkForEach)

    // solução 2 para marketing
    const timeDeMarketingFiltrado = time.membros.filter((membro) => {
      return membro.profissao === "developer"
    })

    const timeDeMarketingEstaOkFilter = timeDeMarketingFiltrado.length === time.membros.length

    console.log(timeDeMarketingFiltrado.length)

    console.log(timeDeMarketingEstaOkFilter)

    // solução 3 para marketing
    const timeDeMarketingEstaOkEvery = time.membros.every((membro) => {
      return membro.profissao === "developer"
    })

    console.log(timeDeMarketingEstaOkEvery)
  }
})
