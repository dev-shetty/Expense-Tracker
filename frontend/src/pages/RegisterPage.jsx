import React, { useEffect } from "react"
import Register from "../components/Auth/Register"

function RegisterPage() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-center font-bold text-xl my-2">Register</h1>
      <Register />
    </div>
  )
}

export default RegisterPage
