import './Pages.css'

const rights = [
  { tag: 'Article 10A', title: 'Right to Fair Trial', text: 'Every citizen has the right to a fair and transparent trial.' },
  { tag: 'Article 9', title: 'Security of Person', text: 'No one can be deprived of life or liberty except in accordance with law.' },
  { tag: 'Article 14', title: 'Dignity of Man', text: 'The dignity of a person and the privacy of the home are protected.' },
  { tag: 'Article 25', title: 'Equality of Citizens', text: 'All citizens are equal before the law and entitled to equal protection.' },
  { tag: 'Article 19A', title: 'Right to Information', text: 'Every citizen has the right to access information of public importance.' },
  { tag: 'Article 10', title: 'Safeguards on Arrest', text: 'A person arrested must be told the reason and can consult a lawyer.' },
]

function LegalRights() {
  return (
    <>
      <div className="page-header">
        <h1>Legal Rights</h1>
        <p>Know your fundamental legal rights</p>
      </div>
      <div className="section grid">
        {rights.map((r) => (
          <div className="card" key={r.title}>
            <span className="tag">{r.tag}</span>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}
export default LegalRights