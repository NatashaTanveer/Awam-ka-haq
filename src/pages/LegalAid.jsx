import './Pages.css'

const services = [
  { title: 'Free Consultation', text: 'Basic legal advice at no cost.' },
  { title: 'Document Help', text: 'Assistance with applications, affidavits and legal notices.' },
  { title: 'Court Guidance', text: 'Guidance on court procedures and upcoming hearing dates.' },
  { title: 'Women & Child Support', text: 'Special support for cases involving women and children.' },
]

function LegalAid() {
  return (
    <>
      <div className="page-header">
        <h1>Legal Aid</h1>
        <p>Support for those who cannot afford a lawyer</p>
      </div>
      <div className="section">
        <div className="grid">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="card" style={{ marginTop: 30 }}>
          <h3>Apply for Legal Aid</h3>
          <p>Describe your case in a few words and we will get in touch with you.</p>
          <button className="btn-primary" onClick={() => alert('Request submitted!')}>
            Apply Now
          </button>
        </div>
      </div>
    </>
  )
}
export default LegalAid