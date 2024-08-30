// b 의 package.json 에 등록되지 않은 패키지를 불러 올 수 있습니다. -> 의도치 않은 문제 발생 가능
import axios from "axios"

export default async () => {
  const { data } = await axios.get("https://api.github.com/users")
  return data
}
