import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import './Pages.css'

const lawyers = [
  { name: 'Ahmed Khan', field: 'Criminal', city: 'Islamabad', exp: 12, rating: 5 },
  { name: 'Sana Malik', field: 'Family', city: 'Lahore', exp: 8, rating: 5 },
  { name: 'Bilal Raza', field: 'Property', city: 'Karachi', exp: 15, rating: 4 },
  { name: 'Ayesha Noor', field: 'Family', city: 'Islamabad', exp: 6, rating: 4 },
  { name: 'Usman Tariq', field: 'Criminal', city: 'Lahore', exp: 10, rating: 5 },
  { name: 'Hina Shah', field: 'Corporate', city: 'Karachi', exp: 9, rating: 4 },
  { name: 'Imran Siddiqui', field: 'Property', city: 'Lahore', exp: 18, rating: 5 },
  { name: 'Zainab Fatima', field: 'Corporate', city: 'Islamabad', exp: 7, rating: 4 },
]

const avatar = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0f2547&color=f5b942&size=200&bold=true`

function FindLawyer() {
  const [name, setName] = useState('')
  const [field, setField] = useState('All')
  const [city, setCity] = useState('All')

  const filtered = lawyers.filter(
    (l) =>
      l.name.toLowerCase().includes(name.toLowerCase()) &&
      (field === 'All' || l.field === field) &&
      (city === 'All' || l.city === city)
  )

  return (
    <>
      <PageHeader
        title="Find a Lawyer"
        subtitle="Search verified lawyers by name, field of law and city."
      />

      <section className="p-container">
        <div className="p-filter">
          <input
            placeholder="Search by lawyer name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={field} onChange={(e) => setField(e.target.value)}>
            <option value="All">All Fields</option>
            <option>Criminal</option>
            <option>Family</option>
            <option>Property</option>
            <option>Corporate</option>
          </select>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="All">All Cities</option>
            <option>Islamabad</option>
            <option>Lahore</option>
            <option>Karachi</option>
          </select>
        </div>

        <p className="p-count">{filtered.length} lawyer(s) found</p>

        <div className="p-grid p-grid-4">
          {filtered.map((l) => (
            <div className="p-card l-card" key={l.name}>
              <img src={avatar(l.name)} alt={l.name} />
              <h3>Adv. {l.name}</h3>
              <span className="p-tag">{l.field} Law</span>
              <p>📍 {l.city}</p>
              <p>{l.exp} years experience</p>
              <p className="l-stars">{'★'.repeat(l.rating)}{'☆'.repeat(5 - l.rating)}</p>
              <div className="l-actions">
                <button className="p-btn" onClick={() => alert(`Contact request sent to Adv. ${l.name}`)}>
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && <p className="p-sub">No lawyers found. Try a different search.</p>}
      </section>
    </>
  )
}
export default FindLawyer