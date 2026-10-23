import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import './Pages.css'

const services = [
  { icon: '💬', title: 'Free Consultation', text: 'Basic legal advice at no cost.' },
  { icon: '📄', title: 'Document Help', text: 'Help with applications, affidavits and legal notices.' },
  { icon: '🏛️', title: 'Court Guidance', text: 'Guidance on court procedures and hearing dates.' },
  { icon: '👩‍👧', title: 'Women & Child Support', text: 'Special support for cases involving women and children.' },
]

const faqs = [
  { q: 'Who can apply for legal aid?', a: 'Anyone who cannot afford a lawyer, including low-income families, women, children and senior citizens.' },
  { q: 'Is the service really free?', a: 'Yes. Consultation and guidance through legal aid are completely free of charge.' },
  { q: 'How long does it take to get a reply?', a: 'Our team usually contacts you within 2 to 3 working days.' },
]

function LegalAid() {
  const [open, setOpen] = useState(0)
  const [form, setForm] = useState({ name: '', phone: '', type: 'Family', details: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${form.name}! Your legal aid request has been submitted.`)
    setForm({ name: '', phone: '', type: 'Family', details: '' })
  }

  return (
    <>
      <PageHeader
        title="Legal Aid"
        subtitle="Free legal support for people who cannot afford a lawyer."
      />

      <section className="p-container">
        <h2 className="p-title">How We Help</h2>
        <p className="p-sub">Our free legal aid services</p>
        <div className="p-grid p-grid-4">
          {services.map((s) => (
            <div className="p-card" key={s.title}>
              <div className="p-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-light">
        <div className="p-container">
          <div className="p-grid p-grid-2">
            <div>
              <h2 className="p-title" style={{ textAlign: 'left' }}>Who Is Eligible?</h2>
              <ul className="check-list">
                <li>Low-income individuals and families</li>
                <li>Women facing domestic or family issues</li>
                <li>Children and their guardians</li>
                <li>Senior citizens and persons with disabilities</li>
                <li>Anyone who cannot afford legal fees</li>
              </ul>
            </div>

            <form className="form-card p-form" onSubmit={handleSubmit}>
              <h3>Apply for Legal Aid</h3>
              <label>Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
              <label>Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="03XX XXXXXXX" required />
              <label>Type of Case</label>
              <select name="type" value={form.type} onChange={handleChange}>
                <option>Family</option>
                <option>Criminal</option>
                <option>Property</option>
                <option>Labour</option>
                <option>Other</option>
              </select>
              <label>Describe Your Case</label>
              <textarea name="details" value={form.details} onChange={handleChange} placeholder="Briefly explain your problem..." required />
              <button className="p-btn p-btn-full" type="submit" style={{ marginTop: 18 }}>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="p-container" style={{ maxWidth: 800 }}>
        <h2 className="p-title">Frequently Asked Questions</h2>
        <p className="p-sub">Quick answers to common questions</p>
        {faqs.map((f, i) => (
          <div className="faq-item" key={f.q}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q} <span>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p className="faq-a">{f.a}</p>}
          </div>
        ))}
      </section>
    </>
  )
}
export default LegalAid