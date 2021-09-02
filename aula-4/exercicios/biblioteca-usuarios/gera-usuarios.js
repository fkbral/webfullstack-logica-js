faker.locale = "pt_BR"

const usersAmount = 5
const users = []
let createdUsersAmount = 0

// for (i=0;i<numeroDeUsuarios;i++)
while (createdUsersAmount < usersAmount) {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    avatar: faker.image.avatar(),
  }

  users.push(user)

  // const name = faker.name.findName()
  // const email = faker.internet.email()
  // const phone = faker.phone.phoneNumber()
  // const avatar = faker.image.avatar()

  // users.push({
  //   name: name,
  //   email: email,
  //   phone: phone,
  //   avatar: avatar,
  // })

  // users.push({
  //   name,
  //   email,
  //   phone,
  //   avatar,
  // })

  createdUsersAmount = createdUsersAmount + 1
  // createdUsersAmount += 1
  // createdUsersAmount++
}

console.log(users)