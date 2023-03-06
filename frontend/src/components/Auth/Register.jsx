import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import PrimaryBtn from "../UIComponents/Buttons/PrimaryBtn"

function Register() {
  const navigate = useNavigate()
  const initialState = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  }

  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState(false)
  const { name, email, password, passwordConf } = formData

  const onChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (password !== passwordConf) return
    try {
      const response = await axios.post("/api/users", formData)
      if (response.data.success) {
        navigate("/")
      }
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return (
    <div className="flex justify-center">
      <div className="w-full flex items-center">
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col items-center gap-2 justify-between"
        >
          <div className="form-element">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-element">
            <label htmlFor="passwordConf">Password Confirmation*</label>
            <input
              type="password"
              name="passwordConf"
              id="passwordConf"
              value={passwordConf}
              onChange={onChange}
              required
            />
          </div>
          {error && <h1 className="text-red-500">Invalid Form Details</h1>}
          <div className="form-submit">
            <PrimaryBtn type="submit" text="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
