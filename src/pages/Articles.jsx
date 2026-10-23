import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import './Pages.css'

const articles = [
  { icon: '💍', tag: 'Family', title: 'How Khula and Divorce Work', text: 'How the process starts in a family court and what to expect.', date: 'Oct 12, 2026', read: '5 min' },
  { icon: '🏘️', tag: 'Property', title: 'Avoiding Property Disputes', text: 'Key things to check in registry and property documents.', date: 'Oct 8, 2026', read: '6 min' },
  { icon: '🚔', tag: 'Criminal', title: 'How to File an FIR', text: 'FIR steps and what to do if the police refuse to register it.', date: 'Oct 3, 2026', read: '4 min' },
  { icon: '💼', tag: 'Labour', title: 'Rights of Employees', text: 'Your rights on salary, leave and wrongful termination.', date: 'Sep 28, 2026', read: '5 min' },
  { icon: '🛒', tag: 'Consumer', title: 'Filing a Consumer Complaint', text: 'Where to complain about a faulty product or service.', date: 'Sep 20, 2026', read: '3 min' },
  { icon: '💻', tag: 'Cyber', title: 'Online Harassment', text: 'How to report cyber crime and protect your accounts.', date: 'Sep 14, 2026', read: '4 min' },
]

const categories = ['All', 'Family', 'Property', 'Criminal', 'Labour', 'Consumer', 'Cyber']

function Articles() {
  const [active, setActive] = useState('All')
  const list = articles.filter((a) => active === 'All' || a.tag === active)

  return (
    <>
      <PageHeader
        title="Articles"
        subtitle="Easy-to-read legal guides written for ordinary people."
      />

      <section className="p-container">
        <div className="a-featured">
          <div className="a-banner">📚</div>
          <div className="a-body">
            <span className="p-tag">Featured</span>
            <h2>Understanding Your Legal Rights in Pakistan</h2>
            <p>
              A complete beginner's guide to the rights every citizen has, how to use
              them, and where to go when someone takes them away.
            </p>
            <button className="p-btn">Read Article</button>
          </div>
        </div>

        <div className="pills">
          {categories.map((c) => (
            <button
              key={c}
              className={`pill ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="p-grid p-grid-3">
          {list.map((a) => (
            <div className="p-card a-card" key={a.title}>
              <div className="a-banner">{a.icon}</div>
              <div className="a-body">
                <span className="p-tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <p className="a-meta" style={{ marginTop: 12 }}>{a.date} • {a.read} read</p>
                <button className="p-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Articles