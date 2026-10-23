import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme, user, logout, favorites, showToast } = useApp()
  const navigate = useNavigate()

  const close = () => setOpen(false)

  const handleLogout = () => {
    logout()
    showToast('Logged out successfully')
    close()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={close}>
        <span className="logo-icon">⚖️</span>
        <div>
          <h2>Awam Ka Haq</h2>
          <small>Legal Aid & Lawyer Portal</small>
        </div>
      </Link>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
        <li><NavLink to="/legal-rights" onClick={close}>Legal Rights</NavLink></li>
        <li><NavLink to="/find-lawyer" onClick={close}>Find a Lawyer</NavLink></li>
        <li><NavLink to="/legal-aid" onClick={close}>Legal Aid</NavLink></li>
        <li><NavLink to="/articles" onClick={close}>Articles</NavLink></li>
        <li><NavLink to="/about" onClick={close}>About Us</NavLink></li>
      </ul>

      <div className="nav-right">
        <button className="icon-btn" onClick={toggleTheme} title="Toggle dark mode">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <Link to="/find-lawyer" className="icon-btn fav-btn" title="Favorite lawyers">
          ❤️
          {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
        </Link>

        {user ? (
          <div className="nav-actions">
            <span className="nav-user">Hi, {user.name.split(' ')[0]}</span>
            <button className="btn btn-gold" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="nav-actions">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-gold">Register</Link>
          </div>
        )}

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar