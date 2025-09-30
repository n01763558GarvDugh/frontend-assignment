import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <h3 className="brand">FrontEnd Foundations</h3>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
