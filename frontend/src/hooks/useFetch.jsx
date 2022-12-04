import axios from "axios"
import { useState } from "react"

function useFetch() {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchData(url, method, data) {
    setLoading(true)
    try {
      const res = await axios({
        method: method ? method : "GET",
        url: url,
        data: data,
      })
      setResponse(res.data)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }
  return { response, error, loading, fetchData }
}

export default useFetch
