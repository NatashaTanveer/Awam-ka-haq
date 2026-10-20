import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'citizen',
    password: '',
  })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Account created for ${form.name}`)
  }

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label>Full Name</label>
      <input
        name="name"
        placeholder="Your full name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        value={form.email}
        onChange={handleChange}
        required
      />
      <label>I am a</label>
      <select name="role" value={form.role} onChange={handleChange}>
        <option value="citizen">Citizen</option>
        <option value="lawyer">Lawyer</option>
      </select>
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Create a password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button className="btn-primary" type="submit">Create Account</button>
      <p className="switch">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  )
}
export default Register