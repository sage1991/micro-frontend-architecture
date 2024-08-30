import axios from "axios"

export default async () => {
  const { data } = await axios.get("https://api.github.com/users")
  return data
}
