import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">⚖️</span>
        <div>
          <h2>Awam Ka Haq</h2>
          <small>Legal Aid & Lawyer Portal</small>
        </div>
      </Link>

      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/legal-rights">Legal Rights</NavLink></li>
        <li><NavLink to="/find-lawyer">Find a Lawyer</NavLink></li>
        <li><NavLink to="/legal-aid">Legal Aid</NavLink></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
      </ul>

      <div className="nav-actions">
        <Link to="/login" className="btn btn-outline">Login</Link>
        <Link to="/register" className="btn btn-gold">Register</Link>
      </div>
    </nav>
  )
}

export default Navbar