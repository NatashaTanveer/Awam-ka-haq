import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

function Register() {
  const [form, setForm] = useState({ name: '', email: '', role: 'citizen', password: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Account created for ${form.name}`)
  }

  return (
    <div className="auth-wrap">
      <div className="auth-side">
        <h2>Join Awam Ka Haq</h2>
        <p>Create a free account as a citizen or as a lawyer and be part of our community.</p>
        <ul>
          <li>✓ <span>Search and contact lawyers</span></li>
          <li>✓ <span>Apply for free legal aid</span></li>
          <li>✓ <span>Lawyers can build a public profile</span></li>
        </ul>
      </div>

      <div className="auth-main">
        <form className="auth-box p-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <p className="muted">It only takes a minute</p>

          <label>Full Name</label>
          <input name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />

          <label>I am a</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="citizen">Citizen</option>
            <option value="lawyer">Lawyer</option>
          </select>

          <label>Password</label>
          <input type="password" name="password" placeholder="Create a password" value={form.password} onChange={handleChange} required />

          <button className="p-btn p-btn-full" type="submit">Create Account</button>

          <p className="switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
export default Register