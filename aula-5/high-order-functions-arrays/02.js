const users = [
  {mood: '😁', name: 'Roberta Saraiva', email: 'Laura_Carvalho@yahoo.com', phone: '(22) 77400-0816', avatar: 'https://cdn.fakercloud.com/avatars/karthipanraj_128.jpg'},
  {mood: '😁', name: 'Beatriz Souza', email: 'Beatriz_Souza@live.com', phone: '+55 (48) 2346-9005', avatar: 'https://cdn.fakercloud.com/avatars/juangomezw_128.jpg'},
  {mood: '😁', name: 'Dr. Lara Franco', email: 'Feliciano_Xavier24@hotmail.com', phone: '(98) 8428-0422', avatar: 'https://cdn.fakercloud.com/avatars/naupintos_128.jpg'},
  {name: 'Lorena Costa', email: 'Isadora.Carvalho@bol.com.br', phone: '(48) 6447-3922', avatar: 'https://cdn.fakercloud.com/avatars/gt_128.jpg'},
]

const user = users.find(
  usuario => usuario.email === 'Beatriz_Souza@live.com'
)

const userIndex = users.findIndex(
  usuario => usuario.email === 'Beatriz_Souza@live.com'
)

users.forEach(
  usuario => {
    // Math.random() retorna numero de 0 a 1, então multiplicamos
    // por 22 para ir de 0 a 22 e sortear uma camisa
    const randomNumber = Math.round(Math.random() * 22)
    usuario.jerseyNumber = randomNumber 
  } 
)

const someUsersHaveMoodProperty = users.some(user => user.mood)

const allUsersHaveMoodProperty = users.every(user => user.mood)

console.log(user)
console.log(userIndex)
console.log(users)
console.log({someUsersHaveMoodProperty})
console.log({allUsersHaveMoodProperty})

