const axios = require("axios")

module.exports = async () => {
  const { data } = await axios.get("https://api.github.com/users")
  return data
}
