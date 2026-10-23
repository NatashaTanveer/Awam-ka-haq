import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>⚖️ Awam Ka Haq</h3>
          <p>
            A legal aid and lawyer portal that gives every citizen easy access
            to legal information and qualified lawyers.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/legal-rights">Legal Rights</Link>
          <Link to="/find-lawyer">Find a Lawyer</Link>
          <Link to="/legal-aid">Legal Aid</Link>
          <Link to="/articles">Articles</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Lahore, Pakistan</p>
          <p>📧 support@awamkahaq.com</p>
          <p>📞 +92 300 0000000</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Awam Ka Haq. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer