import axios from "axios"
import { useState } from "react"
import PrimaryBtn from "../UIComponents/Buttons/PrimaryBtn"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    if (!email || !password) {
      console.log("Fill all fields")
      return
    }
    const data = {
      email,
      password,
    }
    try {
      const response = await axios.post("/api/users/login", data)
      if (response.data.success) {
        navigate("/home")
        localStorage.setItem(
          "expense-tracker-user",
          JSON.stringify(response.data)
        )
      }
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return (
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={onSubmit} className="flex flex-col items-center">
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-element">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <h1 className="text-red-500">Invalid Credentials</h1>}
          <div className="form-submit">
            <PrimaryBtn type="submit" text="Login"></PrimaryBtn>
          </div>
          <div className="form-element register-link">
            <div className="mx-auto my-2">
              New Here ?{" "}
              <Link to="/register" className="link text-blue-500">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
