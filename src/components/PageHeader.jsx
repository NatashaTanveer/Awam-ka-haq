import { Link } from 'react-router-dom'

function PageHeader({ title, subtitle }) {
  return (
    <div className="p-header">
      <p className="p-crumb">
        <Link to="/">Home</Link> / {title}
      </p>
      <h1>{title}</h1>
      <p className="p-header-sub">{subtitle}</p>
    </div>
  )
}

export default PageHeader