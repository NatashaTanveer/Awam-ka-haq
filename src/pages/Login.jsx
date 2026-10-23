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
    <div className="auth-wrap">
      <div className="auth-side">
        <h2>Welcome Back</h2>
        <p>Log in to find lawyers, track your legal aid requests and read legal guides.</p>
        <ul>
          <li>✓ <span>Verified lawyers across Pakistan</span></li>
          <li>✓ <span>Free legal aid for those in need</span></li>
          <li>✓ <span>Simple guides in plain language</span></li>
        </ul>
      </div>

      <div className="auth-main">
        <form className="auth-box p-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p className="muted">Enter your details to continue</p>

          <label>Email</label>
          <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button className="p-btn p-btn-full" type="submit">Login</button>

          <p className="switch">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
export default Login