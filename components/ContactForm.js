import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // simple validation
    if (!name.trim() || !email.includes('@')) {
      alert('Please enter a valid name and email.')
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div>
        <p className="success">Thanks, {name}! We received your message. (This is local-only — no server.)</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{display:'grid', gap:8, maxWidth:400}}>
        <input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea placeholder="Message (optional)" rows={4} />
        <div>
          <button type="submit">Send</button>
        </div>
      </div>
    </form>
  )
}
