const b = require("b")

const main = async () => {
  const users = await b()
  console.log(users.map((user) => user.login))
}

main()
