import './Pages.css'

const articles = [
  { tag: 'Family Law', title: 'How Khula and Divorce Work', text: 'How the process starts in a family court.' },
  { tag: 'Property', title: 'Avoiding Property Disputes', text: 'Key things to check in registry and documents.' },
  { tag: 'Criminal', title: 'How to File an FIR', text: 'FIR steps and what to do if the police refuse.' },
  { tag: 'Labour', title: 'Rights of Employees', text: 'Your rights on salary, leave and wrongful termination.' },
  { tag: 'Consumer', title: 'Filing a Consumer Complaint', text: 'Where to complain about a faulty product or service.' },
  { tag: 'Cyber', title: 'Online Harassment', text: 'How to report cyber crime.' },
]

function Articles() {
  return (
    <>
      <div className="page-header">
        <h1>Articles</h1>
        <p>Legal guidance in simple language</p>
      </div>
      <div className="section grid">
        {articles.map((a) => (
          <div className="card" key={a.title}>
            <span className="tag">{a.tag}</span>
            <h3>{a.title}</h3>
            <p>{a.text}</p>
            <button className="btn-primary">Read More</button>
          </div>
        ))}
      </div>
    </>
  )
}
export default Articles