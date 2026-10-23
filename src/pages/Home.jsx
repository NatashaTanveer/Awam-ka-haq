import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import './Home.css'
import './HomeExtra.css'
import './HomeLayouts.css'

const topics = [
  { label: 'Right to Fair Trial', to: '/legal-rights', type: 'Legal Rights' },
  { label: 'Safeguards on Arrest', to: '/legal-rights', type: 'Legal Rights' },
  { label: 'Equality of Citizens', to: '/legal-rights', type: 'Legal Rights' },
  { label: 'Criminal lawyer', to: '/find-lawyer', type: 'Lawyer' },
  { label: 'Family lawyer', to: '/find-lawyer', type: 'Lawyer' },
  { label: 'Property lawyer', to: '/find-lawyer', type: 'Lawyer' },
  { label: 'Free legal consultation', to: '/legal-aid', type: 'Legal Aid' },
  { label: 'Apply for legal aid', to: '/legal-aid', type: 'Legal Aid' },
  { label: 'How to file an FIR', to: '/articles', type: 'Article' },
  { label: 'Khula and divorce', to: '/articles', type: 'Article' },
  { label: 'Property disputes', to: '/articles', type: 'Article' },
  { label: 'Rights of employees', to: '/articles', type: 'Article' },
]

const categoryMap = {
  rights: 'Legal Rights',
  lawyers: 'Lawyer',
  aid: 'Legal Aid',
  articles: 'Article',
}

const stats = [
  { end: 500, suffix: '+', label: 'Verified Lawyers' },
  { end: 10, suffix: 'K+', label: 'People Helped' },
  { end: 50, suffix: '+', label: 'Legal Articles' },
  { end: 20, suffix: '+', label: 'Cities Covered' },
]

const services = [
  {
    icon: '📜',
    title: 'Know Your Rights',
    text: 'Understand your fundamental legal rights in simple language, with clear examples.',
    points: ['Constitutional rights explained', 'What to do if rights are violated', 'Quick knowledge quiz'],
    link: '/legal-rights',
    cta: 'Explore Legal Rights',
  },
  {
    icon: '⚖️',
    title: 'Find a Lawyer',
    text: 'Search verified lawyers by field of law, city and experience, then contact them directly.',
    points: ['Filter by field and city', 'Compare experience and ratings', 'Save your favorite lawyers'],
    link: '/find-lawyer',
    cta: 'Browse Lawyers',
  },
  {
    icon: '🤝',
    title: 'Free Legal Aid',
    text: 'Cannot afford a lawyer? Apply for free guidance and support from our legal aid team.',
    points: ['Free consultation', 'Help with documents', 'Support for women and children'],
    link: '/legal-aid',
    cta: 'Apply for Aid',
  },
  {
    icon: '📰',
    title: 'Legal Articles',
    text: 'Read simple guides on FIR, family law, property and employee rights written for everyone.',
    points: ['Easy language, no jargon', 'Topics from family to cyber law', 'Bookmark what you like'],
    link: '/articles',
    cta: 'Read Articles',
  },
]

const steps = [
  { no: '1', title: 'Search', text: 'Search for a legal topic or the type of lawyer you need.' },
  { no: '2', title: 'Choose', text: 'Compare profiles, experience and city, then pick the best fit.' },
  { no: '3', title: 'Connect', text: 'Contact the lawyer or apply for free legal aid in a few clicks.' },
]

const reasons = [
  'Every lawyer is verified before listing',
  'Free legal aid for people in need',
  'Simple guides in plain language',
  'Your information stays private',
]

const bars = [
  { label: 'Client Satisfaction', value: 98 },
  { label: 'Cases Guided Successfully', value: 92 },
  { label: 'Replies Within 3 Days', value: 95 },
  { label: 'Aid Requests Resolved', value: 90 },
]

const lawyers = [
  { name: 'Ahmed Khan', field: 'Criminal Law', city: 'Islamabad', exp: 12 },
  { name: 'Sana Malik', field: 'Family Law', city: 'Lahore', exp: 8 },
  { name: 'Bilal Raza', field: 'Property Law', city: 'Karachi', exp: 15 },
  { name: 'Ayesha Noor', field: 'Corporate Law', city: 'Islamabad', exp: 6 },
]

const helplines = [
  { icon: '🚔', title: 'Police Emergency', number: '15' },
  { icon: '🚑', title: 'Rescue & Ambulance', number: '1122' },
  { icon: '🧑‍⚖️', title: 'Human Rights Helpline', number: '1099' },
]

const reviews = [
  { name: 'Fatima Ali', text: 'I found a family lawyer within minutes. The process was simple and clear.' },
  { name: 'Usman Tariq', text: 'The legal rights section explained everything I needed in easy words.' },
  { name: 'Hina Shah', text: 'Free legal aid helped me when I had nowhere else to go. Thank you!' },
]

const faqs = [
  { q: 'Is Awam Ka Haq free to use?', a: 'Yes. Reading legal rights, articles and applying for legal aid are completely free.' },
  { q: 'Are the lawyers verified?', a: 'Every lawyer profile is checked before it is listed on the portal.' },
  { q: 'Can I get a lawyer if I cannot pay?', a: 'Yes. Apply for legal aid and our team will guide you or connect you with a volunteer lawyer.' },
  { q: 'Is my information private?', a: 'Your details are only used to help with your request and are never shared publicly.' },
]

const avatar = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0f2547&color=f5b942&size=200&bold=true`

function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [showSuggest, setShowSuggest] = useState(false)
  const [slide, setSlide] = useState(0)
  const [tab, setTab] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)
  const navigate = useNavigate()
  const { showToast } = useApp()

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % reviews.length), 4500)
    return () => clearInterval(timer)
  }, [])

  const matches = topics.filter(
    (t) =>
      t.label.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'all' || t.type === categoryMap[category])
  )

  const go = (to) => {
    setShowSuggest(false)
    navigate(to)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (!search.trim()) {
      showToast('Please type something to search', 'error')
      return
    }
    if (matches.length > 0) {
      go(matches[0].to)
    } else {
      showToast('No results found. Try another keyword.', 'error')
    }
  }

  const active = services[tab]

  return (
    <>
      {/* HERO */}
      <section className="h-hero h-hero-new">
        <div className="h-hero-content">
          <span className="h-badge">Legal Aid & Lawyer Portal</span>
          <h1>Awam Ka Haq</h1>
          <h2 className="h-typing">Know Your Rights. Find a Lawyer. Get Free Help.</h2>
          <p className="h-hero-text">
            Every citizen has the right to know their legal rights and have easy access to them.
          </p>
          <p className="h-hero-gold">Justice for All — The Law Belongs to Everyone.</p>

          <div className="h-search-wrap">
            <form className="h-search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search legal rights, lawyers, or topics..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setShowSuggest(true)
                }}
                onFocus={() => setShowSuggest(true)}
                onBlur={() => setTimeout(() => setShowSuggest(false), 150)}
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

            {showSuggest && search.trim() !== '' && (
              <div className="h-suggest">
                {matches.length > 0 ? (
                  matches.slice(0, 5).map((m) => (
                    <button key={m.label} onMouseDown={() => go(m.to)}>
                      {m.label}
                      <small>{m.type}</small>
                    </button>
                  ))
                ) : (
                  <p className="none">No suggestions found</p>
                )}
              </div>
            )}
          </div>

          <div className="h-hero-buttons">
            <Link to="/find-lawyer" className="h-btn h-btn-gold">Find a Lawyer</Link>
            <Link to="/legal-aid" className="h-btn h-btn-outline">Get Legal Aid</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="h-stats">
        {stats.map((s) => (
          <div className="h-stat" key={s.label}>
            <h2><Counter end={s.end} suffix={s.suffix} /></h2>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      {/* SERVICES: TABS */}
      <section className="h-section">
        <Reveal>
          <h2 className="h-title">Our Services</h2>
          <p className="h-subtitle">Pick a service to see how it helps you</p>
        </Reveal>
        <Reveal delay={150}>
          <div className="h-tabs">
            <div className="h-tab-list">
              {services.map((s, i) => (
                <button
                  key={s.title}
                  className={i === tab ? 'on' : ''}
                  onClick={() => setTab(i)}
                >
                  <span>{s.icon}</span>
                  {s.title}
                </button>
              ))}
            </div>

            <div className="h-tab-panel" key={tab} data-icon={active.icon}>
              <h3>{active.title}</h3>
              <p>{active.text}</p>
              <ul className="h-points">
                {active.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link to={active.link} className="h-btn h-btn-gold">{active.cta} →</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HOW IT WORKS: TIMELINE */}
      <section className="h-section h-light">
        <Reveal>
          <h2 className="h-title">How It Works</h2>
          <p className="h-subtitle">Get legal help in three simple steps</p>
        </Reveal>
        <Reveal delay={150}>
          <div className="h-timeline">
            {steps.map((s) => (
              <div className="h-tl-item" key={s.no}>
                <div className="h-step-no">{s.no}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* WHY CHOOSE US: SPLIT + PROGRESS BARS */}
      <section className="h-section">
        <div className="h-split">
          <Reveal>
            <div className="h-split-left">
              <h2 className="h-title">Why Choose Awam Ka Haq?</h2>
              <p>
                We built this portal so that legal help is not limited by money,
                status or lack of knowledge.
              </p>
              <ul className="h-checks">
                {reasons.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              {bars.map((b) => (
                <div className="h-bar" key={b.label}>
                  <div className="h-bar-top">
                    <span>{b.label}</span>
                    <span>{b.value}%</span>
                  </div>
                  <div className="h-bar-track">
                    <div className="h-bar-fill" style={{ '--w': `${b.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED LAWYERS: ROWS */}
      <section className="h-section h-light">
        <Reveal>
          <h2 className="h-title">Featured Lawyers</h2>
          <p className="h-subtitle">Experienced and verified legal professionals</p>
        </Reveal>
        <Reveal delay={150}>
          <div className="h-rows">
            {lawyers.map((l) => (
              <div className="h-row" key={l.name}>
                <img src={avatar(l.name)} alt={l.name} />
                <div>
                  <h3>Adv. {l.name}</h3>
                  <small>{l.field}</small>
                </div>
                <span className="col">📍 {l.city}</span>
                <span className="col">{l.exp} years experience</span>
                <span className="stars">★★★★★</span>
                <Link to="/find-lawyer" className="h-btn h-btn-navy">View Profile</Link>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* HELPLINES: BAND */}
      <section className="h-band">
        <Reveal>
          <h2>Emergency Helplines</h2>
          <p>Tap a number to call immediately</p>
          <div className="h-band-grid">
            {helplines.map((h) => (
              <a className="h-band-item" href={`tel:${h.number}`} key={h.title}>
                <span>{h.icon}</span>
                <strong>{h.number}</strong>
                <small>{h.title}</small>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS: BIG QUOTE */}
      <section className="h-section">
        <Reveal>
          <h2 className="h-title">What People Say</h2>
          <p className="h-subtitle">Real stories from people we have helped</p>
        </Reveal>
        <div className="h-bigquote">
          <div key={slide}>
            <p className="h-bq-text">{reviews[slide].text}”</p>
            <div className="h-bq-person">
              <img src={avatar(reviews[slide].name)} alt={reviews[slide].name} />
              <div>
                <strong>{reviews[slide].name}</strong>
                <small>★★★★★</small>
              </div>
            </div>
          </div>
          <div className="h-dots">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                className={i === slide ? 'on' : ''}
                onClick={() => setSlide(i)}
                aria-label={`Show review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ: ACCORDION */}
      <section className="h-section h-light">
        <Reveal>
          <h2 className="h-title">Frequently Asked Questions</h2>
          <p className="h-subtitle">Quick answers to common questions</p>
        </Reveal>
        <div className="h-faq">
          {faqs.map((f, i) => (
            <div className="h-faq-item" key={f.q}>
              <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                {f.q}
                <span>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="h-cta">
        <Reveal>
          <h2>Need legal help today?</h2>
          <p>Join thousands of people who found the right lawyer through Awam Ka Haq.</p>
          <Link to="/register" className="h-btn h-btn-gold">Create Free Account</Link>
        </Reveal>
      </section>
    </>
  )
}

export default Home