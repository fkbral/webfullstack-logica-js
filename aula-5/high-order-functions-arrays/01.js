const users = [
  {name: 'Roberta Saraiva', email: 'Laura_Carvalho@yahoo.com', phone: '(22) 77400-0816', avatar: 'https://cdn.fakercloud.com/avatars/karthipanraj_128.jpg'},
  {name: 'Beatriz Souza', email: 'Beatriz_Souza@live.com', phone: '+55 (48) 2346-9005', avatar: 'https://cdn.fakercloud.com/avatars/juangomezw_128.jpg'},
  {name: 'Dr. Lara Franco', email: 'Feliciano_Xavier24@hotmail.com', phone: '(98) 8428-0422', avatar: 'https://cdn.fakercloud.com/avatars/naupintos_128.jpg'},
  {name: 'Lorena Costa', email: 'Isadora.Carvalho@bol.com.br', phone: '(48) 6447-3922', avatar: 'https://cdn.fakercloud.com/avatars/gt_128.jpg'},
]

// solução 1
let emailEncontrado 

// for (const user of users ) {
//   console.count('loop de usuarios')
//   if (user.email === 'Beatriz_Souza@live.com'){
//     emailEncontrado = true
//   }
// }

// // solução 2
// for (const user of users ) {
//   console.count('loop de usuarios')
//   if (user.email === 'Beatriz_Souza@live.com'){
//     emailEncontrado = true
//     break
//   }
// }

// solução 3
// const user = users.find(function(pesquisaUsuario) {
//   const condicao = pesquisaUsuario.email === 'Beatriz_Souza@live.com'
//   return condicao
// })

// solução 4
// const user = users.find(function(pesquisaUsuario) {
//   return pesquisaUsuario.email === 'Beatriz_Souza@live.com'
// })

// solução 5
// const user = users.find(
//   usuario => {
//     console.log('oi')
//     return usuario.email === 'Beatriz_Souza@live.com'
//   }
// )

// solução 6
const user = users.find(
  usuario => usuario.email === 'Beatriz_Souza@live.com'
)

console.log(user)

// console.log(emailEncontrado)