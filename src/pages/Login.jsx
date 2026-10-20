import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Logged in as ${email}`)
  }

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Email</label>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="btn-primary" type="submit">Login</button>
      <p className="switch">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  )
}
export default Login