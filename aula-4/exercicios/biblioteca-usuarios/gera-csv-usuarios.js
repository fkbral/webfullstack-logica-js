faker.locale = "pt_BR"

const usersAmount = 5
const users = []
let createdUsersAmount = 0

let csv="nome, email, telefone, avatar\n"

while (createdUsersAmount < usersAmount) {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    avatar: faker.image.avatar(),
  }

  users.push(user)

  createdUsersAmount = createdUsersAmount + 1
}

for (user of users) {
  const line = []

  for (property in user) {
    line.push(user[property])
  }

  csv = csv + line.join(', ') + "\n"
}

alert(csv)

// extra para salvar csv

// const url = URL.createObjectURL(
//   new Blob([csv], { type: 'text/csv' }),
// )

// const anchor = document.createElement('a')
// anchor.href = url
// anchor.download = "random-users.csv"
// anchor.click()


