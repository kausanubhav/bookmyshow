import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Login({ setUser }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setUser({ email, password })
    localStorage.setItem("user", JSON.stringify({ email, password }))
    navigate("/")
  }

  return (
    <div className="login">
      <div className="container">
        <form>
          <h1 style={{ textAlign: "center" }}>Sign In</h1>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
