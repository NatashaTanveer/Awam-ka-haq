import './Pages.css'

function AboutUs() {
  return (
    <>
      <div className="page-header">
        <h1>About Us</h1>
        <p>Law for everyone, justice for all</p>
      </div>
      <div className="section">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            Awam Ka Haq is a legal aid and lawyer portal that gives ordinary
            people easy access to legal information and qualified lawyers.
          </p>
        </div>
        <div className="stats">
          <div className="stat"><h2>500+</h2><p>Lawyers</p></div>
          <div className="stat"><h2>10K+</h2><p>Users Helped</p></div>
          <div className="stat"><h2>50+</h2><p>Articles</p></div>
          <div className="stat"><h2>20+</h2><p>Cities</p></div>
        </div>
      </div>
    </>
  )
}
export default AboutUs