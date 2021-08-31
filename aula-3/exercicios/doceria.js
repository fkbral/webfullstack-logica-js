const estoqueInicial = {
  '🍰' : 64, 
  '🎂' : 8 ,
  '🍪' : 100, 
  '🍩' : 20, 
  '🍫' : 50,
}

const doces = {
  '🍰' : estoqueInicial['🍰'], 
  '🎂' : estoqueInicial['🎂'] ,
  '🍪' : estoqueInicial['🍪'], 
  '🍩' : estoqueInicial['🍩'], 
  '🍫' : estoqueInicial['🍫'],
}


function gerenciarDoces(doces, alteraDoces) {
  for (doce in alteraDoces){
    const resultado = doces[doce] + alteraDoces[doce]
    if (resultado >= 0){
      doces[doce] = doces[doce] + alteraDoces[doce]
    }
  }
}

function exibirDocesParaClientes(doces, estoqueInicial) {
  for (const doce in doces) {
    const quantidade = doces[doce]
    let emblema = null

      if (quantidade === 0) {
        emblema = '❌️'
      }
      else {
        if (quantidade > estoqueInicial[doce] * 0.2) {
          emblema = '🟢'
        }
        else {
          if (quantidade <= estoqueInicial[doce] * 0.2) {
            emblema = '🔴'
          }
        }
      }
    console.log(doce + ' ' + emblema)
  }
}

gerenciarDoces(doces, { '🍪' : -10, '🍩' : 5,})
gerenciarDoces(doces, { '🍩' : 5,})
gerenciarDoces(doces, { '🍩' : 5,})
gerenciarDoces(doces, { '🍩' : 5, '🎂': -8})
gerenciarDoces(doces, { '🍩' : -36})
exibirDocesParaClientes(doces, estoqueInicial)