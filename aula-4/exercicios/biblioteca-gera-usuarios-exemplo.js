faker.locale = "pt_BR"

const randomName = faker.name.findName();
const vehicle = faker.vehicle.manufacturer()

console.log(randomName)
console.log(vehicle)