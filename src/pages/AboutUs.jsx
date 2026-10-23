import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './Pages.css'

const values = [
  { icon: '🎯', title: 'Our Mission', text: 'To give every citizen easy access to legal information and qualified lawyers.' },
  { icon: '👁️', title: 'Our Vision', text: 'A society where justice is not limited by money, status or lack of knowledge.' },
  { icon: '💎', title: 'Our Values', text: 'Honesty, accessibility, respect and equal treatment for everyone.' },
]

const team = [
  { name: 'Natasha Tanveer', role: 'Founder & Developer' },
  { name: 'Ali Raza', role: 'Legal Advisor' },
  { name: 'Mariam Khan', role: 'Community Manager' },
  { name: 'Hamza Sheikh', role: 'Content Editor' },
]

const avatar = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0f2547&color=f5b942&size=200&bold=true`

function AboutUs() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Law for everyone, justice for all."
      />

      <section className="p-container">
        <h2 className="p-title">Who We Are</h2>
        <p className="p-sub" style={{ maxWidth: 750, margin: '0 auto 40px' }}>
          Awam Ka Haq is a legal aid and lawyer portal that gives ordinary people
          easy access to legal information and qualified lawyers.
        </p>
        <div className="p-grid p-grid-3">
          {values.map((v) => (
            <div className="p-card" key={v.title}>
              <div className="p-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-band">
        <div><h2>500+</h2><p>Verified Lawyers</p></div>
        <div><h2>10K+</h2><p>People Helped</p></div>
        <div><h2>50+</h2><p>Legal Articles</p></div>
        <div><h2>20+</h2><p>Cities Covered</p></div>
      </section>

      <section className="p-container">
        <h2 className="p-title">Meet Our Team</h2>
        <p className="p-sub">The people behind Awam Ka Haq</p>
        <div className="p-grid p-grid-4">
          {team.map((t) => (
            <div className="p-card team-card" key={t.name}>
              <img src={avatar(t.name)} alt={t.name} />
              <h3>{t.name}</h3>
              <p className="team-role">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-cta">
        <h2>Join Awam Ka Haq today</h2>
        <p>Create a free account and get the legal help you deserve.</p>
        <Link to="/register" className="p-btn p-btn-gold">Create Free Account</Link>
      </section>
    </>
  )
}
export default AboutUs