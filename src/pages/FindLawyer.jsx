import { useState } from 'react'
import './Pages.css'

const lawyers = [
  { name: 'Adv. Ahmed Khan', field: 'Criminal', city: 'Islamabad', exp: 12 },
  { name: 'Adv. Sana Malik', field: 'Family', city: 'Lahore', exp: 8 },
  { name: 'Adv. Bilal Raza', field: 'Property', city: 'Karachi', exp: 15 },
  { name: 'Adv. Ayesha Noor', field: 'Family', city: 'Islamabad', exp: 6 },
  { name: 'Adv. Usman Tariq', field: 'Criminal', city: 'Lahore', exp: 10 },
  { name: 'Adv. Hina Shah', field: 'Corporate', city: 'Karachi', exp: 9 },
]

function FindLawyer() {
  const [name, setName] = useState('')
  const [field, setField] = useState('All')

  const filtered = lawyers.filter(
    (l) =>
      l.name.toLowerCase().includes(name.toLowerCase()) &&
      (field === 'All' || l.field === field)
  )

  return (
    <>
      <div className="page-header">
        <h1>Find a Lawyer</h1>
        <p>Find the right lawyer for your case</p>
      </div>
      <div className="section">
        <div className="filter-row">
          <input
            placeholder="Search by name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={field} onChange={(e) => setField(e.target.value)}>
            <option>All</option>
            <option>Criminal</option>
            <option>Family</option>
            <option>Property</option>
            <option>Corporate</option>
          </select>
        </div>
        <div className="grid">
          {filtered.map((l) => (
            <div className="card" key={l.name}>
              <span className="tag">{l.field}</span>
              <h3>{l.name}</h3>
              <p>{l.city} • {l.exp} years experience</p>
              <button className="btn-primary">Contact</button>
            </div>
          ))}
        </div>
        {filtered.length === 0 && <p>No lawyers found.</p>}
      </div>
    </>
  )
}
export default FindLawyer