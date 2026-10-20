import { useState } from 'react'
import './Home.css'

function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  const handleSearch = (e) => {
    e.preventDefault()
    alert(`Searching "${search}" in ${category}`)
  }

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Awam Ka Haq</h1>
          <h3>Legal Aid & Lawyer Portal</h3>
          <p className="hero-text">
           Every citizen has the right to know their legal rights and have easy access to them.
          </p>
          <p className="hero-urdu">Justice for All — The Law Belongs to Everyone.</p>

          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search legal rights, lawyers, or topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="rights">Legal Rights</option>
              <option value="lawyers">Lawyers</option>
              <option value="aid">Legal Aid</option>
              <option value="articles">Articles</option>
            </select>
            <button type="submit">Search</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Home