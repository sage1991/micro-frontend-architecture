import b from "b"

const main = async () => {
  const users = await b()
  console.log(users.map((user) => user.login))
}

void main()
