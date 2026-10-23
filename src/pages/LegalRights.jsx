import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import './Pages.css'

const rights = [
  { icon: '⚖️', tag: 'Article 10A', title: 'Right to Fair Trial', text: 'Every citizen has the right to a fair and transparent trial.' },
  { icon: '🛡️', tag: 'Article 9', title: 'Security of Person', text: 'No one can be deprived of life or liberty except in accordance with law.' },
  { icon: '🏠', tag: 'Article 14', title: 'Dignity of Man', text: 'The dignity of a person and the privacy of the home are protected.' },
  { icon: '🤝', tag: 'Article 25', title: 'Equality of Citizens', text: 'All citizens are equal before the law and entitled to equal protection.' },
  { icon: '🔍', tag: 'Article 19A', title: 'Right to Information', text: 'Every citizen has the right to access information of public importance.' },
  { icon: '👮', tag: 'Article 10', title: 'Safeguards on Arrest', text: 'A person arrested must be told the reason and can consult a lawyer.' },
]

const steps = [
  { icon: '📝', title: 'Document Everything', text: 'Write down dates, names and keep copies of all papers and messages.' },
  { icon: '🏛️', title: 'Report It', text: 'File a complaint with the police, court or the relevant authority.' },
  { icon: '👩‍⚖️', title: 'Get a Lawyer', text: 'Contact a verified lawyer or apply for free legal aid.' },
]

function LegalRights() {
  return (
    <>
      <PageHeader
        title="Legal Rights"
        subtitle="Know your fundamental rights as a citizen and learn how to protect them."
      />

      <section className="p-container">
        <h2 className="p-title">Your Fundamental Rights</h2>
        <p className="p-sub">Guaranteed by the Constitution of Pakistan</p>
        <div className="p-grid p-grid-3">
          {rights.map((r) => (
            <div className="p-card" key={r.title}>
              <div className="p-icon">{r.icon}</div>
              <span className="p-tag">{r.tag}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-light">
        <div className="p-container">
          <h2 className="p-title">If Your Rights Are Violated</h2>
          <p className="p-sub">Follow these three steps</p>
          <div className="p-grid p-grid-3">
            {steps.map((s) => (
              <div className="p-card" key={s.title}>
                <div className="p-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-cta">
        <h2>Need help protecting your rights?</h2>
        <p>Talk to a verified lawyer today.</p>
        <Link to="/find-lawyer" className="p-btn p-btn-gold">Find a Lawyer</Link>
      </section>
    </>
  )
}
export default LegalRights