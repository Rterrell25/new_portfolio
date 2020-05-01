import { useEffect, useCallback, useState } from "react"
import axios from "axios"
const Github = (INITIAL) => {
  const [data, setData] = useState(INITIAL)
  const fetchGit = useCallback(async () => {
    return axios
      .get(`https://api.github.com/users/rterrell25/repos?`)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [setData])

  useEffect(() => {
    fetchGit()
  }, [fetchGit])

  return { data, setData }
}

export default Github
